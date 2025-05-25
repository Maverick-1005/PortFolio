'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedBackground from '../components/AnimatedBackground';

const SplitText = ({ children, className = "" }: { children: string, className?: string }) => {
  return (
    <span className={className}>
      {children.split(" ").map((word, wordIndex, words) => (
        <span key={wordIndex}>
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={`${wordIndex}-${charIndex}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: (wordIndex * word.length + charIndex) * 0.03,
                ease: [0.2, 0.65, 0.3, 0.9],
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
          {/* Add space after each word except the last one */}
          {wordIndex !== words.length - 1 && " "}
        </span>
      ))}
    </span>
  );
};

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const texts = ["Full Stack Developer", "AI/DS Student", "Problem Solver"];

  useEffect(() => {
    setMounted(true);
    
    const typeText = async () => {
      for (let i = 0; i < texts.length; i++) {
        // Type the current text
        for (let j = 0; j <= texts[i].length; j++) {
          setDisplayText(texts[i].substring(0, j));
          await new Promise(resolve => setTimeout(resolve, 100));
        }
        
        // Pause at the end of the text
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Delete the current text
        for (let j = texts[i].length; j >= 0; j--) {
          setDisplayText(texts[i].substring(0, j));
          await new Promise(resolve => setTimeout(resolve, 50));
        }
        
        // Move to the next text (or back to the first one)
        setCurrentTextIndex((i + 1) % texts.length);
      }
      
      // After going through all texts once, restart
      typeText();
    };
    
    if (mounted) {
      typeText();
      
      // Blink cursor
      const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500);
      
      return () => {
        clearInterval(cursorInterval);
      };
    }
  }, [mounted]);

  if (!mounted) return null;

  return (
    <section id="hero" className="bg-gray-900 min-h-screen text-cyan-200 flex flex-col justify-center relative pt-24 sm:pt-28 overflow-hidden">
      <AnimatedBackground />
      <div className="container px-4 sm:px-8 md:px-12 max-w-7xl mx-auto relative z-10">
        <motion.p
          className="text-primary mb-4 font-mono text-base sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <SplitText>Hi, my name is</SplitText>
        </motion.p>
        
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-amber-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SplitText>Ansh Mishra.</SplitText>
        </motion.h1>
        
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-muted mb-6 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <SplitText>I build things for the web & beyond.</SplitText>
          <motion.div 
            className="absolute -bottom-2 left-0 h-0.5 bg-primary"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 1.5 }}
          />
        </motion.h2>
        
        <motion.div
          className="text-lg sm:text-xl md:text-2xl text-text-muted mb-8 flex flex-wrap items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span>I'm a</span>
          <motion.span 
            className="text-primary"
            animate={{ 
              opacity: [0.5, 1, 0.5],
              scale: [0.98, 1, 0.98]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {displayText}
          </motion.span>
          {showCursor && <span className="typing-cursor"></span>}
        </motion.div>
        
        <motion.p
          className="text-base sm:text-lg text-gray-300 font-bold font-sans text-text-muted mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          I'm a 3rd year B.Tech student at <span className='text-cyan-200'>IIIT Sri City</span>, pursuing <span className='text-cyan-200'>Artificial Intelligence and Data Science</span>. I specialize in building seamless digital experiences and solving real-world problems through clean, efficient, and scalable code. My strong foundation in algorithms and data structures fuels my passion for <span className='text-cyan-200'>problem-solving and competitive programming</span>, where I constantly challenge myself to think critically and optimize under constraints. I enjoy working across the tech stack — from intuitive <span className='text-cyan-200'>front-end</span> interfaces to robust <span className='text-cyan-200'>backend</span> systems. I'm driven by curiosity, a love for learning, and a desire to build intelligent, impactful solutions.
        </motion.p>
        
        <motion.a
          href="https://drive.google.com/file/d/1L25VJwBelcOSNs3TEfhuKfwOSLaeB_3g/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="relative border-2 border-primary text-primary px-4 sm:px-6 py-2 sm:py-3 rounded text-sm sm:text-base hover:bg-primary hover:bg-opacity-10 transition-all inline-flex items-center group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">Check out my resume!</span>
          <motion.div
            className="absolute inset-0 bg-primary/20 rounded opacity-0 group-hover:opacity-100"
            initial={false}
            animate={{ scale: [0.7, 1], opacity: [0, 1] }}
            transition={{ duration: 0.2 }}
          />
        </motion.a>
      </div>
    </section>
  );
} 