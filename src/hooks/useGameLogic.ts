import { useState } from 'react';
import { useGame } from '../contexts/GameContext';
import { questions } from '../components/transactionData';

export const useGameLogic = () => {
  const { state, dispatch } = useGame();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [consecutiveWrongAnswers, setConsecutiveWrongAnswers] = useState(0);

  const handleAnswer = (index: number) => {
    if (showAnswer) return; // Prevent multiple selections
    
    setSelectedAnswer(index);
    setShowAnswer(true);
    
    const isCorrect = index === questions[currentQuestionIndex].correctAnswer;
    
    if (isCorrect) {
      dispatch({ type: 'ANSWER_QUESTION', payload: { isCorrect } });
      setConsecutiveWrongAnswers(0);
    } else {
      dispatch({ type: 'ANSWER_QUESTION', payload: { isCorrect } });
      setConsecutiveWrongAnswers(prev => prev + 1);
      if (consecutiveWrongAnswers === 1) {
        dispatch({ type: 'DEEPEN_TRENCH' });
      }
    }

    // Move to next question after a delay (longer for wrong answers)
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedAnswer(null);
        setShowAnswer(false);
      } else {
        dispatch({ type: 'END_GAME' });
      }
    }, isCorrect ? 1500 : 2500); // Shorter delay for correct answers, longer for wrong
  };

  return {
    currentQuestionIndex,
    selectedAnswer,
    showAnswer,
    handleAnswer,
    isCorrect: showAnswer && selectedAnswer === questions[currentQuestionIndex]?.correctAnswer,
    currentQuestion: questions[currentQuestionIndex],
    isGameOver: state.isGameOver,
    player: state.player,
    progress: state.progress,
    questions,
    totalQuestions: questions.length
  };
}; 