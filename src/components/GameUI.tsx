import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGame } from '../contexts/GameContext';
import { useGameLogic } from '../hooks/useGameLogic';
import './GameUI.css';
import KnotTest from './KnotTest';
import { transactions, roasts } from './transactionData';
import TrenchScene from './TrenchScene';

const AVATARS = [
  { id: 1, name: 'Eric', image: 'assets/avatars/eric.png' },
  { id: 2, name: 'Tolkein', image: 'assets/avatars/tolkein.png' },
  { id: 3, name: 'Wendy', image: 'assets/avatars/wendy.png' },
  { id: 4, name: 'Henrieta', image: 'assets/avatars/henrieta.webp' },
];

const GameUI: React.FC = () => {
  const { state, dispatch } = useGame();
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [showNameInput, setShowNameInput] = useState(false);
  const [showAvatarSelect, setShowAvatarSelect] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState<number | null>(null);
  const [showRoast, setShowRoast] = useState(false);
  const [currentRoastIndex, setCurrentRoastIndex] = useState(0);
  const [showGameRules, setShowGameRules] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const {
    currentQuestion,
    currentQuestionIndex,
    selectedAnswer,
    showAnswer,
    handleAnswer,
    isGameOver,
    player,
    progress,
    questions,
    totalQuestions
  } = useGameLogic();

  const handleConnect = async () => {
    console.log("handleConnect")
    
    setIsConnecting(true);
    //Knot connection and analysis
    setTimeout(async () => {
      setIsConnecting(false);
      setIsConnected(true);
      setShowNameInput(true);
    }, 2000);
  };

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (playerName.trim()) {
      setShowNameInput(false);
      setShowAvatarSelect(true);
    }
  };

  const handleAvatarSelect = (avatarId: number) => {
    setSelectedAvatar(avatarId);
  };

  const handleStart = () => {
    if (selectedAvatar !== null) {
      dispatch({ type: 'START_GAME', payload: {
        id: '1',
        name: playerName,
        gender: 'other',
        avatarId: selectedAvatar,
        trenchDepth: 0,
        score: 0,
        level: 1,
      }});
      setShowWarning(true);
      // After warning, show roasts
      setTimeout(() => {
        setShowWarning(false);
        setShowRoast(true);
        setCurrentRoastIndex(0);
      }, 3000);
    }
  };

  const handleRoastComplete = () => {
    if (currentRoastIndex < roasts.length - 1) {
      setCurrentRoastIndex(prev => prev + 1);
    } else {
      setShowRoast(false);
      setShowGameRules(true);
    }
  };

  const handleRulesAcknowledge = () => {
    setShowGameRules(false);
  };

  if (!state.isGameStarted) {
    return (
      <div className="welcome-screen">
        <h1 className="title">Welcome to Trenches</h1>
        <p className="subtitle">Escape the trenches of your financial faux-pas!</p>
        
        {isConnecting ? (
          <div className="analyzing-container">
            <div className="loading-spinner"></div>
            <p>Analyzing your transactions... this might take a second</p>
          </div>
        ) : showAvatarSelect ? (
          <motion.div 
            className="avatar-select-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="avatar-title">Choose your character</h2>
            <div className="avatar-grid">
              {AVATARS.map((avatar) => (
                <button
                  key={avatar.id}
                  className={`avatar-option ${selectedAvatar === avatar.id ? 'selected' : ''}`}
                  onClick={() => handleAvatarSelect(avatar.id)}
                >
                  <img src={avatar.image} alt={avatar.name} className="avatar-image" />
                </button>
              ))}
            </div>
            <button 
              className="connect-button"
              onClick={handleStart}
              disabled={selectedAvatar === null}
            >
              Start Game!
            </button>
          </motion.div>
        ) : showNameInput ? (
          <motion.form 
            className="name-input-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleNameSubmit}
          >
            <input
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              placeholder="Enter your name"
              className="name-input"
              autoFocus
            />
            <button 
              type="submit"
              className="connect-button"
              disabled={!playerName.trim()}
            >
              Next
            </button>
          </motion.form>
        ) : !isConnected ? (
          <KnotTest onExit={handleConnect} />
        ) : null}
      </div>
    );
  }

  if (isGameOver) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-800 p-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-6xl font-bold mb-8 text-white animate-pulse">Game Over!</h2>
          <div className="bg-gray-700 rounded-lg p-8 shadow-xl">
            <p className="text-3xl mb-4 text-gray-300">Final Score</p>
            <p className="text-5xl font-bold text-green-400 mb-6">{player.score}/500</p>
            <div className="w-full bg-gray-600 rounded-full h-4">
              <div 
                className="bg-green-500 h-4 rounded-full transition-all duration-1000"
                style={{ width: `${(player.score / 500) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="game-ui-container">
      {/* Player Info */}
      <div className="player-info">
        <div className="flex items-center gap-4">
          <div>
            <h2>{player.name}</h2>
            <div className="stats">
              <span>Score: {player.score}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Warning Section */}
      {showWarning && !showRoast && (
        <div className="warning-section">
          <h2 className="warning-title">Prepare Yourself</h2>
          <p className="warning-text">Your financial decisions are about to be roasted...</p>
          <div className="warning-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <button 
            className="connect-button ready-button"
            onClick={() => {
              setShowWarning(false);
              setShowRoast(true);
              setCurrentRoastIndex(0);
            }}
          >
            I'm Ready
          </button>
        </div>
      )}

      {/* Roast Display */}
      {showRoast && (
        <motion.div
          key={currentRoastIndex}
          initial={{ opacity: 0, z: -1 }}
          animate={{ opacity: 1, z: 0 }}
          exit={{ opacity: 0, z: 1 }}
          className="roast-container"
        >
          <p className="roast-text">{roasts[currentRoastIndex]}</p>
          <div className="sound-effect-container">
            <iframe 
              width="110" 
              height="200" 
              src="https://www.myinstants.com/instant/aw-hell-nah-man-10448/embed/" 
              frameBorder="0" 
              scrolling="no"
            />
          </div>
          <button 
            className={`connect-button ${currentRoastIndex < roasts.length ? 'roast-button' : ''}`}
            onClick={handleRoastComplete}
          >
            {currentRoastIndex < roasts.length - 1 ? 'Next Roast 💀' : 'End of Roasts 😇'}
          </button>
        </motion.div>
      )}

      {/* Game Rules */}
      {showGameRules && (
        <motion.div
          initial={{ opacity: 0, z: -1 }}
          animate={{ opacity: 1, z: 0 }}
          exit={{ opacity: 0, z: 1 }}
          className="rules-container"
        >
          <h2>The Game Begins</h2>
          <h3>Rules</h3>
          <ul>
            <li>Correct answers will help you rise from the trenches</li>
            <li>Wrong answers will lead you deeper into the trench :\</li>
          </ul>
          <button 
            className="connect-button"
            onClick={handleRulesAcknowledge}
          >
            I Understand
          </button>
        </motion.div>
      )}

      {/* Questions */}
      {!showRoast && !showGameRules && currentQuestion && (
        <motion.div
          className="question-container"
          initial={{ opacity: 0, z: -1 }}
          animate={{ opacity: 1, z: 0 }}
          exit={{ opacity: 0, z: 1 }}
        >
          <div className="question-header mb-6">
            <span className="text-sm text-gray-400">Question {currentQuestionIndex + 1} of {totalQuestions}</span>
          </div>
          <h3>{currentQuestion.question}</h3>
          <div className="answers">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                className={`answer-button ${
                  showAnswer
                    ? index === currentQuestion.correctAnswer
                      ? 'correct-answer'
                      : index === selectedAnswer
                      ? 'incorrect'
                      : ''
                    : ''
                }`}
                onClick={() => handleAnswer(index)}
                disabled={showAnswer}
              >
                {option}
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Progress Bar */}
      <div className="fixed bottom-0 left-0 right-0 h-2 bg-gray-700">
        <motion.div
          className="h-full bg-green-500"
          initial={{ width: 0 }}
          animate={{ width: `${(currentQuestionIndex / totalQuestions) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
};

export default GameUI; 