export type Gender = 'male' | 'female' | 'other';

export interface Player {
  id: string;
  name: string;
  gender: Gender;
  avatarId: number;
  trenchDepth: number;
  score: number;
  level: number;
}

export interface Transaction {
  id: string;
  amount: number;
  date: string;
  category: string;
  description: string;
  merchant: string;
}

export interface FinancialFauxPas {
  id: string;
  type: 'subscription' | 'food_delivery' | 'retail_therapy' | 'credit_card' | 'other';
  description: string;
  amount: number;
  transactions: Transaction[];
  question: string;
  correctAnswer: string;
  learningMoment: string;
}

export interface GameState {
  player: Player;
  fauxPas: FinancialFauxPas[];
  currentQuestion: FinancialFauxPas | null;
  isGameStarted: boolean;
  isGameOver: boolean;
  progress: number;
}

export type Difficulty = 'beginner' | 'intermediate' | 'advanced'; 