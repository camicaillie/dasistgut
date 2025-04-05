import { Flashcard } from '../data/flashcards';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from './firebase'; // Adjust the path to your firebase.ts file

/**
 * Spaced Repetition System (SRS) implementation
 * 
 * This system is based on the SM-2 algorithm with some modifications.
 * It schedules cards for review based on previous performance.
 */

export interface SRSCard extends Flashcard {
  id: number;
  difficulty?: 'easy' | 'medium' | 'hard';
  // SRS specific fields
  dueDate?: Date;
  interval?: number; // in days
  easeFactor?: number; // multiplier for interval
  repetitions?: number; // number of times reviewed
  lastReviewed?: Date;
}

// Default values
const DEFAULT_EASE_FACTOR = 2.5;
const DEFAULT_INTERVAL = 1;

/**
 * Calculate the next review date for a card based on difficulty rating
 */
export const calculateNextReview = (
  card: SRSCard,
  difficulty: 'easy' | 'medium' | 'hard'
): SRSCard => {
  // Clone the card to avoid mutating the original
  const updatedCard = { ...card };
  
  // Initialize SRS values if they don't exist
  if (!updatedCard.easeFactor) updatedCard.easeFactor = DEFAULT_EASE_FACTOR;
  if (!updatedCard.interval) updatedCard.interval = DEFAULT_INTERVAL;
  if (!updatedCard.repetitions) updatedCard.repetitions = 0;
  
  // Update card's difficulty rating
  updatedCard.difficulty = difficulty;
  
  // Get current date
  const now = new Date();
  updatedCard.lastReviewed = now;
  
  // Adjust ease factor based on difficulty
  switch (difficulty) {
    case 'easy':
      updatedCard.easeFactor += 0.15;
      break;
    case 'medium':
      updatedCard.easeFactor -= 0.05;
      break;
    case 'hard':
      updatedCard.easeFactor -= 0.3;
      break;
  }
  
  // Ensure ease factor doesn't go below 1.3
  updatedCard.easeFactor = Math.max(1.3, updatedCard.easeFactor);
  
  // Calculate next interval
  if (difficulty === 'hard') {
    // If hard, reset to a shorter interval
    updatedCard.interval = Math.max(1, Math.floor(updatedCard.interval * 0.5));
  } else {
    // For easy/medium, increase the interval
    if (updatedCard.repetitions === 0) {
      updatedCard.interval = 1;
    } else if (updatedCard.repetitions === 1) {
      updatedCard.interval = 3;
    } else {
      updatedCard.interval = Math.round(updatedCard.interval * updatedCard.easeFactor);
    }
  }
  
  // Increment repetition counter
  updatedCard.repetitions += 1;
  
  // Calculate due date
  const dueDate = new Date(now);
  dueDate.setDate(dueDate.getDate() + updatedCard.interval);
  updatedCard.dueDate = dueDate;
  
  return updatedCard;
};

/**
 * Get cards that are due for review
 */
export const getDueCards = (cards: SRSCard[]): SRSCard[] => {
  const now = new Date();
  return cards.filter(card => !card.dueDate || card.dueDate <= now);
};

/**
 * Sort cards by due date (oldest first)
 */
export const sortCardsByDueDate = (cards: SRSCard[]): SRSCard[] => {
  return [...cards].sort((a, b) => {
    // Cards without due dates come first
    if (!a.dueDate) return -1;
    if (!b.dueDate) return 1;
    
    // Sort by due date (oldest first)
    return a.dueDate.getTime() - b.dueDate.getTime();
  });
};

/**
 * Save SRS data to Firestore
 */
export const saveSRSData = async (categoryId: string, subcategoryId: string, cards: SRSCard[]): Promise<void> => {
  if (!auth.currentUser) {
    console.log('User not logged in, cannot save SRS data');
    return;
  }

  const userId = auth.currentUser.uid;
  const docId = `${categoryId}_${subcategoryId}`; // e.g., "general_mathematics"
  const docRef = doc(db, 'users', userId, 'srsData', docId);

  // Convert dates to ISO strings for Firestore
  const serializedCards = cards.map(card => ({
    ...card,
    dueDate: card.dueDate ? card.dueDate.toISOString() : undefined,
    lastReviewed: card.lastReviewed ? card.lastReviewed.toISOString() : undefined,
  }));

  try {
    await setDoc(docRef, { cards: serializedCards }, { merge: true });
  } catch (error) {
    console.error('Error saving SRS data to Firestore:', error);
    throw error; // Optionally rethrow to handle errors in the calling code
  }
};

/**
 * Load SRS data from Firestore
 */
export const loadSRSData = async (categoryId: string, subcategoryId: string, defaultCards: Flashcard[]): Promise<SRSCard[]> => {
  if (!auth.currentUser) {
    console.log('User not logged in, returning default cards');
    return defaultCards.map((card, index) => ({
      ...card,
      id: index + 1,
    }));
  }

  const userId = auth.currentUser.uid;
  const docId = `${categoryId}_${subcategoryId}`;
  const docRef = doc(db, 'users', userId, 'srsData', docId);

  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      const savedCards = data.cards as SRSCard[];
      return savedCards.map(card => ({
        ...card,
        dueDate: card.dueDate ? new Date(card.dueDate) : undefined,
        lastReviewed: card.lastReviewed ? new Date(card.lastReviewed) : undefined,
      }));
    }
  } catch (error) {
    console.error('Error loading SRS data from Firestore:', error);
  }

  // If no data exists in Firestore or an error occurs, return default cards
  return defaultCards.map((card, index) => ({
    ...card,
    id: index + 1,
  }));
};