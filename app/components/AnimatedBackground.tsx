import React from 'react';
import { motion } from 'framer-motion';

const FloatingElement = ({ delay = 0, size = 4, color = "rgba(0, 229, 173, 0.1)" }) => {
  return (
    <motion.div
      style={{ 
        width: size, 
        height: size, 
        backgroundColor: color,
        borderRadius: '50%'
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: [1, 2, 1],
        opacity: [0.1, 0.3, 0.1],
      }}
      transition={{
        duration: Math.random() * 3 + 5,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100%,#1e3a8a,transparent)]" />
      
      {/* Floating Elements */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
          }}
          animate={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
          }}
          transition={{
            duration: Math.random() * 10 + 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        >
          <FloatingElement 
            delay={i * 0.2} 
            size={Math.random() * 8 + 4}
            color={`rgba(0, 229, 173, ${Math.random() * 0.1 + 0.05})`}
          />
        </motion.div>
      ))}

      {/* Mesh Grid */}
      <div 
        className="absolute inset-0 opacity-20" 
        style={{ 
          backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} 
      />
    </div>
  );
} 