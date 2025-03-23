export interface Flashcard {
  front: string;
  back: string;
  favorite?: boolean;
  lastReviewed?: Date;
  timesReviewed?: number;
  successRate?: number;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  condition: string;
  unlocked: boolean;
  unlockedDate?: Date;
}

export interface LearningPath {
  currentStage: number;
  stages: {
    level: number;
    requiredCards: number;
    requiredSuccessRate: number;
    completed: boolean;
    completionDate?: Date;
  }[];
}

export interface ReviewSchedule {
  nextReviewDate: Date;
  reviewHistory: {
    date: Date;
    successRate: number;
    cardsReviewed: number;
  }[];
  spacedRepetitionLevel: number;
}

export interface PerformanceAnalytics {
  bestTimeOfDay: string;
  averageSessionLength: number;
  mostChallengingCards: string[];
  improvementRate: number;
  studyPatterns: {
    dayOfWeek: string;
    averageTimeSpent: number;
    averageSuccessRate: number;
  }[];
}

export interface SubcategoryStats {
  totalCards: number;
  cardsStudied: number;
  averageSuccessRate: number;
  lastStudyDate?: Date;
  totalStudyTime: number; // in minutes
  masteryLevel: 'beginner' | 'intermediate' | 'advanced' | 'master';
  streak: number; // Consecutive days studied
  weeklyProgress: {
    date: Date;
    cardsStudied: number;
    successRate: number;
    timeSpent: number;
  }[];
  difficultyDistribution: {
    easy: number;
    medium: number;
    hard: number;
  };
  lastWeekProgress: {
    cardsStudied: number;
    averageSuccessRate: number;
    timeSpent: number;
  };
  achievements: Achievement[];
  learningPath: LearningPath;
  reviewSchedule: ReviewSchedule;
  analytics: PerformanceAnalytics;
}

export interface Subcategory {
  id: string;
  name: string;
  cards: Flashcard[];
  stats: SubcategoryStats;
}

export interface FlashcardSet {
  id: string;
  name: string;
  subcategories: Subcategory[];
}

export const flashcardSets: FlashcardSet[] = [
  {
    id: 'general',
    name: 'Člověk a společnost',
    subcategories: [
      {
        id: 'filosofie',
        name: 'Filosofie',
        cards: [
          { front: 'Kdo je považován za otce západní filozofie?', back: 'Sókratés' },
          { front: 'Co je to "cogito ergo sum"?', back: 'Myslím, tedy jsem - René Descartes' },
          { front: 'Kdo napsal "Kritiku čistého rozumu"?', back: 'Immanuel Kant' },
        ],
        stats: {
          totalCards: 3,
          cardsStudied: 0,
          averageSuccessRate: 0,
          totalStudyTime: 0,
          masteryLevel: 'beginner',
          streak: 0,
          weeklyProgress: [],
          difficultyDistribution: {
            easy: 0,
            medium: 0,
            hard: 0
          },
          lastWeekProgress: {
            cardsStudied: 0,
            averageSuccessRate: 0,
            timeSpent: 0
          },
          achievements: [],
          learningPath: {
            currentStage: 1,
            stages: [
              {
                level: 1,
                requiredCards: 3,
                requiredSuccessRate: 70,
                completed: false
              }
            ]
          },
          reviewSchedule: {
            nextReviewDate: new Date(),
            reviewHistory: [],
            spacedRepetitionLevel: 1
          },
          analytics: {
            bestTimeOfDay: '',
            averageSessionLength: 0,
            mostChallengingCards: [],
            improvementRate: 0,
            studyPatterns: []
          }
        }
      },
      {
        id: 'psychologie',
        name: 'Psychologie',
        cards: [
          { front: 'Kdo je považován za zakladatele psychoanalýzy?', back: 'Sigmund Freud' },
          { front: 'Co je to "kognitivní disonance"?', back: 'Psychologický stav, kdy člověk drží protichůdné myšlenky nebo přesvědčení' },
          { front: 'Co je to "hierarchie potřeb" podle Maslowa?', back: 'Teorie motivace založená na pěti úrovních lidských potřeb' },
        ],
        stats: {
          totalCards: 3,
          cardsStudied: 0,
          averageSuccessRate: 0,
          totalStudyTime: 0,
          masteryLevel: 'beginner',
          streak: 0,
          weeklyProgress: [],
          difficultyDistribution: {
            easy: 0,
            medium: 0,
            hard: 0
          },
          lastWeekProgress: {
            cardsStudied: 0,
            averageSuccessRate: 0,
            timeSpent: 0
          },
          achievements: [],
          learningPath: {
            currentStage: 1,
            stages: [
              {
                level: 1,
                requiredCards: 3,
                requiredSuccessRate: 70,
                completed: false
              }
            ]
          },
          reviewSchedule: {
            nextReviewDate: new Date(),
            reviewHistory: [],
            spacedRepetitionLevel: 1
          },
          analytics: {
            bestTimeOfDay: '',
            averageSessionLength: 0,
            mostChallengingCards: [],
            improvementRate: 0,
            studyPatterns: []
          }
        }
      },
      {
        id: 'sociologie',
        name: 'Sociologie',
        cards: [
          { front: 'Kdo je považován za zakladatele sociologie?', back: 'Auguste Comte' },
          { front: 'Co je to "sociální stratifikace"?', back: 'Rozvrstvení společnosti do různých sociálních vrstev' },
          { front: 'Co je to "socializace"?', back: 'Proces, během kterého se jedinec učí být členem společnosti' },
        ],
        stats: {
          totalCards: 3,
          cardsStudied: 0,
          averageSuccessRate: 0,
          totalStudyTime: 0,
          masteryLevel: 'beginner',
          streak: 0,
          weeklyProgress: [],
          difficultyDistribution: {
            easy: 0,
            medium: 0,
            hard: 0
          },
          lastWeekProgress: {
            cardsStudied: 0,
            averageSuccessRate: 0,
            timeSpent: 0
          },
          achievements: [],
          learningPath: {
            currentStage: 1,
            stages: [
              {
                level: 1,
                requiredCards: 3,
                requiredSuccessRate: 70,
                completed: false
              }
            ]
          },
          reviewSchedule: {
            nextReviewDate: new Date(),
            reviewHistory: [],
            spacedRepetitionLevel: 1
          },
          analytics: {
            bestTimeOfDay: '',
            averageSessionLength: 0,
            mostChallengingCards: [],
            improvementRate: 0,
            studyPatterns: []
          }
        }
      },
    ],
  },
  {
    id: 'pravo-politologie',
    name: 'Právo a politologie',
    subcategories: [
      {
        id: 'pravo',
        name: 'Právo',
        cards: [
          { front: 'Co je to "ústavní právo"?', back: 'Obor práva upravující základní vztahy ve státě' },
          { front: 'Co je to "občanské právo"?', back: 'Obor práva upravující majetkové vztahy mezi občany' },
          { front: 'Co je to "trestní právo"?', back: 'Obor práva upravující trestné činy a tresty' },
        ],
        stats: {
          totalCards: 3,
          cardsStudied: 0,
          averageSuccessRate: 0,
          totalStudyTime: 0,
          masteryLevel: 'beginner',
          streak: 0,
          weeklyProgress: [],
          difficultyDistribution: {
            easy: 0,
            medium: 0,
            hard: 0
          },
          lastWeekProgress: {
            cardsStudied: 0,
            averageSuccessRate: 0,
            timeSpent: 0
          },
          achievements: [],
          learningPath: {
            currentStage: 1,
            stages: [
              {
                level: 1,
                requiredCards: 3,
                requiredSuccessRate: 70,
                completed: false
              }
            ]
          },
          reviewSchedule: {
            nextReviewDate: new Date(),
            reviewHistory: [],
            spacedRepetitionLevel: 1
          },
          analytics: {
            bestTimeOfDay: '',
            averageSessionLength: 0,
            mostChallengingCards: [],
            improvementRate: 0,
            studyPatterns: []
          }
        }
      },
      {
        id: 'politologie',
        name: 'Politologie',
        cards: [
          { front: 'Co je to "dělba moci"?', back: 'Rozdělení státní moci na zákonodárnou, výkonnou a soudní' },
          { front: 'Co je to "demokracie"?', back: 'Forma vlády, kde moc vychází z lidu' },
          { front: 'Co je to "ústava"?', back: 'Základní zákon státu, který určuje jeho uspořádání' },
        ],
        stats: {
          totalCards: 3,
          cardsStudied: 0,
          averageSuccessRate: 0,
          totalStudyTime: 0,
          masteryLevel: 'beginner',
          streak: 0,
          weeklyProgress: [],
          difficultyDistribution: {
            easy: 0,
            medium: 0,
            hard: 0
          },
          lastWeekProgress: {
            cardsStudied: 0,
            averageSuccessRate: 0,
            timeSpent: 0
          },
          achievements: [],
          learningPath: {
            currentStage: 1,
            stages: [
              {
                level: 1,
                requiredCards: 3,
                requiredSuccessRate: 70,
                completed: false
              }
            ]
          },
          reviewSchedule: {
            nextReviewDate: new Date(),
            reviewHistory: [],
            spacedRepetitionLevel: 1
          },
          analytics: {
            bestTimeOfDay: '',
            averageSessionLength: 0,
            mostChallengingCards: [],
            improvementRate: 0,
            studyPatterns: []
          }
        }
      },
    ],
  },
  {
    id: 'historie-ekonomie',
    name: 'Moderní historie a ekonomie',
    subcategories: [
      {
        id: 'ekonomie',
        name: 'Ekonomie',
        cards: [
          { front: 'Co je to "nabídka a poptávka"?', back: 'Základní ekonomický zákon trhu' },
          { front: 'Co je to "inflace"?', back: 'Obecný růst cenové hladiny v ekonomice' },
          { front: 'Co je to "HDP"?', back: 'Hrubý domácí produkt - celková hodnota statků a služeb vyrobených v zemi za určité období' },
        ],
        stats: {
          totalCards: 3,
          cardsStudied: 0,
          averageSuccessRate: 0,
          totalStudyTime: 0,
          masteryLevel: 'beginner',
          streak: 0,
          weeklyProgress: [],
          difficultyDistribution: {
            easy: 0,
            medium: 0,
            hard: 0
          },
          lastWeekProgress: {
            cardsStudied: 0,
            averageSuccessRate: 0,
            timeSpent: 0
          },
          achievements: [],
          learningPath: {
            currentStage: 1,
            stages: [
              {
                level: 1,
                requiredCards: 3,
                requiredSuccessRate: 70,
                completed: false
              }
            ]
          },
          reviewSchedule: {
            nextReviewDate: new Date(),
            reviewHistory: [],
            spacedRepetitionLevel: 1
          },
          analytics: {
            bestTimeOfDay: '',
            averageSessionLength: 0,
            mostChallengingCards: [],
            improvementRate: 0,
            studyPatterns: []
          }
        }
      },
      {
        id: 'moderni-historie',
        name: 'Moderní historie',
        cards: [
          { front: 'Kdy začala druhá světová válka?', back: '1939' },
          { front: 'Kdy skončila druhá světová válka?', back: '1945' },
          { front: 'Kdy začala studená válka?', back: '1947' },
        ],
        stats: {
          totalCards: 3,
          cardsStudied: 0,
          averageSuccessRate: 0,
          totalStudyTime: 0,
          masteryLevel: 'beginner',
          streak: 0,
          weeklyProgress: [],
          difficultyDistribution: {
            easy: 0,
            medium: 0,
            hard: 0
          },
          lastWeekProgress: {
            cardsStudied: 0,
            averageSuccessRate: 0,
            timeSpent: 0
          },
          achievements: [],
          learningPath: {
            currentStage: 1,
            stages: [
              {
                level: 1,
                requiredCards: 3,
                requiredSuccessRate: 70,
                completed: false
              }
            ]
          },
          reviewSchedule: {
            nextReviewDate: new Date(),
            reviewHistory: [],
            spacedRepetitionLevel: 1
          },
          analytics: {
            bestTimeOfDay: '',
            averageSessionLength: 0,
            mostChallengingCards: [],
            improvementRate: 0,
            studyPatterns: []
          }
        }
      },
      {
        id: 'evropska-integrace',
        name: 'Evropská integrace',
        cards: [
          { front: 'Kdy byla založena Evropská unie?', back: '1993 (Maastrichtská smlouva)' },
          { front: 'Kdy vstoupilo Česko do EU?', back: '2004' },
          { front: 'Kdy vstoupilo do EU Chorvatsko?', back: '2013' },
        ],
        stats: {
          totalCards: 3,
          cardsStudied: 0,
          averageSuccessRate: 0,
          totalStudyTime: 0,
          masteryLevel: 'beginner',
          streak: 0,
          weeklyProgress: [],
          difficultyDistribution: {
            easy: 0,
            medium: 0,
            hard: 0
          },
          lastWeekProgress: {
            cardsStudied: 0,
            averageSuccessRate: 0,
            timeSpent: 0
          },
          achievements: [],
          learningPath: {
            currentStage: 1,
            stages: [
              {
                level: 1,
                requiredCards: 3,
                requiredSuccessRate: 70,
                completed: false
              }
            ]
          },
          reviewSchedule: {
            nextReviewDate: new Date(),
            reviewHistory: [],
            spacedRepetitionLevel: 1
          },
          analytics: {
            bestTimeOfDay: '',
            averageSessionLength: 0,
            mostChallengingCards: [],
            improvementRate: 0,
            studyPatterns: []
          }
        }
      },
    ],
  },
]; 