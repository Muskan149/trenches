import React from 'react';
import { motion } from 'framer-motion';
import { useGameLogic } from '../hooks/useGameLogic';
import './TrenchScene.css';

interface TrenchSceneProps {
  playerAvatar?: {
    id: number;
    image: string;
  };
}

const TrenchScene: React.FC<TrenchSceneProps> = ({ playerAvatar }) => {
  const { player, isCorrect } = useGameLogic();
  const depthPercentage = player.trenchDepth * 20; // Each level of depth is 20% of the screen height

  return (
    <div className="scene-container">
      {/* Sky */}
      <div className="sky" />
      
      {/* Ground with grass */}
      <div className="ground">
        <div className="grass" />
      </div>

      {/* Trench */}
      <div className="trench-container" style={{ transform: `translateY(${depthPercentage}%)` }}>
        <div className="trench-left-wall" />
        <div className="trench-right-wall" />
        <div className="trench-bottom" />
        
        {/* Player Avatar */}
        {playerAvatar && (
          <motion.div 
            className="player-avatar"
            initial={{ scale: 0 }}
            animate={{ 
              scale: 1,
              y: isCorrect ? -100 : 0 
            }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              y: {
                duration: 0.5,
                ease: "easeOut"
              }
            }}
          >
            <img src={playerAvatar.image} alt="Player" />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default TrenchScene; 