'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Loading() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide loading screen after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed text-cyan-200 inset-0 z-50 flex items-center justify-center bg-gray-900"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {/* Logo Container */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="h-20 w-20 rounded-lg border-2 border-primary flex items-center justify-center text-3xl font-bold text-primary"
        >
          A
        </motion.div>
        
        {/* Pulsing ring effect */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 rounded-lg border-2 border-primary"
        />
      </motion.div>
    </motion.div>
  );
} 