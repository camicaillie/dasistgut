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
export const saveSRSData = async (
  categoryId: string, 
  subcategoryId: string, 
  cards: SRSCard[],
  currentIndex: number = 0
): Promise<void> => {
  const docId = `${categoryId}_${subcategoryId}`; // e.g., "general_mathematics"
  console.log(`saveSRSData called with category: ${categoryId}, subcategory: ${subcategoryId}, index: ${currentIndex}`);
  
  // Always save to localStorage as a fallback, even if not authenticated
  try {
    localStorage.setItem(`flashcard_progress_${docId}`, currentIndex.toString());
    localStorage.setItem(`flashcard_last_updated_${docId}`, new Date().toISOString());
  } catch (e) {
    console.error('Error saving to localStorage:', e);
  }
  
  if (!auth.currentUser) {
    console.log('User not logged in, saved to localStorage only');
    return;
  }

  const userId = auth.currentUser.uid;
  console.log(`Saving to Firestore for user ${userId} (${auth.currentUser.email || 'no email'})`);
  
  // Store the combination of user ID and deck for easier retrieval in localStorage
  const userProgressKey = `${userId}_${docId}`;
  localStorage.setItem(`user_progress_${userProgressKey}`, currentIndex.toString());
  
  const docRef = doc(db, 'users', userId, 'srsData', docId);

  // Convert dates to ISO strings for Firestore
  const serializedCards = cards.map(card => ({
    ...card,
    dueDate: card.dueDate ? card.dueDate.toISOString() : undefined,
    lastReviewed: card.lastReviewed ? card.lastReviewed.toISOString() : undefined,
  }));

  try {
    await setDoc(docRef, { 
      cards: serializedCards,
      currentIndex,
      lastUpdated: new Date().toISOString(),
      userId: userId,
      userEmail: auth.currentUser.email || 'no email',
      categoryId,
      subcategoryId,
      provider: auth.currentUser.providerData.length > 0 ? 
        auth.currentUser.providerData[0].providerId : 'unknown'
    }, { merge: true });
    console.log(`Successfully saved SRS data for ${docId} with index ${currentIndex}`);
  } catch (error) {
    console.error('Error saving SRS data to Firestore:', error);
    // Don't throw the error - let the app continue even if saving fails
    // We've already saved to localStorage as a backup
  }
};

/**
 * Load SRS data from Firestore
 */
export const loadSRSData = async (
  categoryId: string, 
  subcategoryId: string, 
  defaultCards: Flashcard[]
): Promise<{ cards: SRSCard[], currentIndex: number }> => {
  console.log(`loadSRSData called with category: ${categoryId}, subcategory: ${subcategoryId}`);
  const docId = `${categoryId}_${subcategoryId}`;

  // First, check local storage for any backup index regardless of authentication
  const localBackupIndex = localStorage.getItem(`flashcard_progress_${docId}`);
  let backupIndex = localBackupIndex ? parseInt(localBackupIndex, 10) : 0;
  
  if (localBackupIndex) {
    console.log(`Found local backup index: ${backupIndex} for ${docId}`);
  }

  // If user is authenticated, try to get data from Firestore
  if (auth.currentUser) {
    const userId = auth.currentUser.uid;
    console.log(`User is authenticated with ID: ${userId}, email: ${auth.currentUser.email || 'no email'}`);
    console.log(`Looking for document ID: ${docId} for user ${userId}`);
    
    // Also check for user-specific progress in localStorage
    const userProgressKey = `${userId}_${docId}`;
    const userLocalProgress = localStorage.getItem(`user_progress_${userProgressKey}`);
    if (userLocalProgress) {
      const userBackupIndex = parseInt(userLocalProgress, 10);
      console.log(`Found user-specific local backup index: ${userBackupIndex} for ${userProgressKey}`);
      // Use the user-specific backup if it exists
      backupIndex = userBackupIndex;
    }
    
    const docRef = doc(db, 'users', userId, 'srsData', docId);

    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        const savedCards = data.cards as SRSCard[];
        
        // Use the Firestore index if available, or fall back to localStorage backup
        let currentIndex = data.currentIndex;
        
        // If Firestore doesn't have an index but we have a backup, use that
        if (currentIndex === undefined && backupIndex !== undefined) {
          currentIndex = backupIndex;
          console.log(`Using backup index: ${currentIndex}`);
        } else if (currentIndex === undefined) {
          currentIndex = 0;
        }
        
        console.log(`Found saved data for ${docId} with ${savedCards?.length || 0} cards and index ${currentIndex}`);
        
        // If we have cards, return them with the current index
        if (savedCards && savedCards.length > 0) {
          return { 
            cards: savedCards.map(card => ({
              ...card,
              dueDate: card.dueDate ? new Date(card.dueDate) : undefined,
              lastReviewed: card.lastReviewed ? new Date(card.lastReviewed) : undefined,
            })),
            currentIndex
          };
        }
      } else {
        console.log(`No saved data found in Firestore for ${docId}`);
      }
    } catch (error) {
      console.error('Error loading SRS data from Firestore:', error);
    }
    
    // If we reached here, we couldn't load saved card data from Firestore
    // Check if we at least have a backup index
    if (backupIndex !== undefined) {
      console.log(`Using backup index ${backupIndex} with default cards`);
      return { 
        cards: defaultCards.map((card, index) => ({
          ...card,
          id: index + 1,
        })),
        currentIndex: backupIndex
      };
    }
  } else {
    console.log('User not logged in, checking only for local storage data');
    // If we have a local backup index but no authentication, still use it
    if (backupIndex !== undefined) {
      console.log(`Using local backup index ${backupIndex} with default cards`);
      return { 
        cards: defaultCards.map((card, index) => ({
          ...card,
          id: index + 1,
        })),
        currentIndex: backupIndex
      };
    }
  }

  // If no data exists in Firestore, no local backups were found, or user is not logged in
  console.log('No saved data found anywhere, returning default cards from beginning');
  return { 
    cards: defaultCards.map((card, index) => ({
      ...card,
      id: index + 1,
    })),
    currentIndex: 0 
  };
};