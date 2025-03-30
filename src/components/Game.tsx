import React from 'react';
import { motion } from 'framer-motion';
import { useGame } from '../contexts/GameContext';
import TrenchScene from './TrenchScene';
import GameUI from './GameUI';
import './Game.css';

const AVATARS = [
  { id: 1, name: 'Eric', image: 'assets/avatars/eric.png' },
  { id: 2, name: 'Tolkein', image: 'assets/avatars/tolkein.png' },
  { id: 3, name: 'Wendy', image: 'assets/avatars/wendy.png' },
  { id: 4, name: 'Henrieta', image: 'assets/avatars/henrieta.webp' },
];

const Game: React.FC = () => {
  const { state } = useGame();
  const playerAvatar = state.player.avatarId ? AVATARS.find(avatar => avatar.id === state.player.avatarId) : undefined;

  return (
    <div className="game-container">
      {/* Game Scene */}
      <div className="game-scene">
        <TrenchScene 
          playerAvatar={playerAvatar}
        />
      </div>

      {/* Game UI */}
      <motion.div
        className="game-ui"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <GameUI />
      </motion.div>
    </div>
  );
};

export default Game; 