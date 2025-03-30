import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { GameState, Player, FinancialFauxPas, Difficulty } from '../types/game';

type GameAction =
  | { type: 'START_GAME'; payload: Player }
  | { type: 'SET_FAUX_PAS'; payload: FinancialFauxPas[] }
  | { type: 'SET_CURRENT_QUESTION'; payload: FinancialFauxPas }
  | { type: 'ANSWER_QUESTION'; payload: { isCorrect: boolean } }
  | { type: 'UPDATE_PROGRESS'; payload: number }
  | { type: 'END_GAME' }
  | { type: 'DEEPEN_TRENCH' };

const initialState: GameState = {
  player: {
    id: '',
    name: '',
    gender: 'other',
    avatarId: 0,
    trenchDepth: 0,
    score: 0,
    level: 1,
  },
  fauxPas: [],
  currentQuestion: null,
  isGameStarted: false,
  isGameOver: false,
  progress: 0,
};

const GameContext = createContext<{
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
} | null>(null);

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'START_GAME':
      return {
        ...state,
        player: action.payload,
        isGameStarted: true,
        isGameOver: false,
        progress: 0,
      };
    case 'SET_FAUX_PAS':
      return {
        ...state,
        fauxPas: action.payload,
      };
    case 'SET_CURRENT_QUESTION':
      return {
        ...state,
        currentQuestion: action.payload,
      };
    case 'ANSWER_QUESTION':
      const { isCorrect } = action.payload;
      const newDepth = isCorrect
        ? Math.max(0, state.player.trenchDepth - 1)
        : state.player.trenchDepth + 1;
      
      return {
        ...state,
        player: {
          ...state.player,
          trenchDepth: newDepth,
          score: isCorrect ? state.player.score + 100 : state.player.score,
        },
        currentQuestion: null,
        isGameOver: newDepth >= 5,
      };
    case 'UPDATE_PROGRESS':
      return {
        ...state,
        progress: action.payload,
      };
    case 'END_GAME':
      return {
        ...state,
        isGameOver: true,
      };
    case 'DEEPEN_TRENCH':
      return {
        ...state,
        player: {
          ...state.player,
          trenchDepth: Math.min(5, state.player.trenchDepth + 2),
        },
        isGameOver: state.player.trenchDepth >= 3,
      };
    default:
      return state;
  }
}

export function GameProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
} 