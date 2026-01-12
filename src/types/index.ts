export type AgeRange = '5-7' | '8-10' | '11-12';

export type Character = 'Krishna' | 'Ganesha' | 'Hanuman' | 'Rama' | 'Prahlada' | 'Shiva' | 'Vishnu' | 'Lakshmi' | 'Saraswati' | 'Durga' | 'Arjuna' | 'Draupadi' | 'Sita' | 'Lakshmana' | 'Karthikeya' | 'Narasimha' | 'Buddha' | 'Kali' | 'Parvati' | 'Indra';

export type Value = 'honesty' | 'wisdom' | 'courage' | 'faith' | 'dharma' | 'compassion' | 'perseverance' | 'devotion' | 'patience' | 'respect' | 'justice' | 'love' | 'forgiveness' | 'humility' | 'determination' | 'sacrifice' | 'helpfulness' | 'generosity' | 'learning' | 'creativity' | 'protection' | 'focus' | 'loyalty' | 'brotherhood' | 'peace' | 'responsibility' | 'care' | 'joy' | 'music' | 'curiosity' | 'strength' | 'playfulness' | 'cleverness' | 'kindness' | 'discernment' | 'purity' | 'gratitude' | 'truth' | 'friendship' | 'dedication' | 'acceptance' | 'transformation' | 'hospitality' | 'balance' | 'preparation' | 'self-discovery' | 'leadership' | 'unity' | 'purpose' | 'obedience' | 'self-acceptance' | 'cleanliness' | 'communication' | 'nature' | 'blessing' | 'duty';

export interface DecisionPoint {
  id: string;
  question: string;
  options: {
    id: string;
    text: string;
    consequence: string;
    lesson: string;
  }[];
}

export interface InteractiveElement {
  id: string;
  type: 'character' | 'object' | 'concept';
  position: { x: number; y: number };
  content: string;
  title: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Chapter {
  id: string;
  title: string;
  content: string;
  illustration?: string;
  decisionPoint?: DecisionPoint;
  interactiveElements?: InteractiveElement[];
  quiz?: QuizQuestion[];
}

export interface Story {
  id: string;
  title: string;
  description: string;
  ageRange: AgeRange;
  character: Character;
  values: Value[];
  illustration: string;
  chapters: Chapter[];
  estimatedMinutes: number;
  unlocked: boolean;
  requiredStories?: string[]; // Story IDs that must be completed first
}

export interface Achievement {
  id: string;
  type: 'character_badge' | 'value_gem' | 'knowledge_star' | 'streak' | 'completion';
  title: string;
  description: string;
  icon: string;
  unlockedAt?: number; // timestamp
  storyId?: string;
  value?: Value;
  character?: Character;
}

export interface Progress {
  completedStories: string[];
  currentStory?: {
    storyId: string;
    chapterIndex: number;
  };
  achievements: Achievement[];
  dailyStreak: number;
  lastActivityDate: string; // YYYY-MM-DD
  totalTimeSpent: number; // minutes
  chatHistory: ChatMessage[];
  timeLimit?: number; // minutes per day
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  storyContext?: string; // Story ID if message is related to a story
}

export interface StoryCompletion {
  storyId: string;
  completedAt: number; // timestamp
  timeSpent: number; // minutes
  decisionsMade: string[]; // Decision point option IDs
  quizScore?: number;
}

export interface Collection {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
  storyIds: string[];
  theme: 'courage' | 'wisdom' | 'devotion' | 'adventure' | 'family' | 'nature' | 'festival';
}
