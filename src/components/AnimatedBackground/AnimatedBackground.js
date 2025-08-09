import React from 'react';
import { motion } from 'framer-motion';
import './AnimatedBackground.scss';

function AnimatedBackground() {
  return (
    <div className="animated-bg">
      <motion.div
        className="blob blob1"
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -30, 30, 0],
          scale: [1, 1.2, 1, 1.1, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="blob blob2"
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 40, -20, 0],
          scale: [1.1, 1, 1.2, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="blob blob3"
        animate={{
          x: [0, 30, -40, 0],
          y: [0, 20, -30, 0],
          scale: [1, 1.15, 1, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}

export default AnimatedBackground;
