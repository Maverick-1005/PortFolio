'use client';

import { useEffect, useState, useMemo } from 'react';
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
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const texts = useMemo(() => ["Full Stack Developer", "AI/DS Student", "Problem Solver"], []);

  useEffect(() => {
    setMounted(true);
    
    let timeout: NodeJS.Timeout;
    
    const animateText = () => {
      const currentText = texts[currentTextIndex];
      const shouldDelayDeletion = !isDeleting && displayText === currentText;
      const shouldDelayNextWord = isDeleting && displayText === '';
      
      if (shouldDelayDeletion) {
        // Delay before starting to delete
        timeout = setTimeout(() => {
          setIsDeleting(true);
          timeout = setTimeout(animateText, 50);
        }, 2000);
        return;
      }
      
      if (shouldDelayNextWord) {
        // Move to next text
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        timeout = setTimeout(animateText, 50);
        return;
      }
      
      setDisplayText(prev => {
        if (isDeleting) {
          return prev.slice(0, -1);
        } else {
          return currentText.slice(0, prev.length + 1);
        }
      });
      
      // Set the next timeout
      const nextDelay = isDeleting ? 50 : 100;
      timeout = setTimeout(animateText, nextDelay);
    };

    if (mounted) {
      timeout = setTimeout(animateText, 100);
      
      // Blink cursor
      const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500);
      
      return () => {
        if (timeout) clearTimeout(timeout);
        clearInterval(cursorInterval);
      };
    }
  }, [mounted, displayText, currentTextIndex, isDeleting, texts]);

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
          <span>I&apos;m a</span>
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
          I&apos;m a 3rd year B.Tech student at <span className="text-cyan-200">IIIT Sri City</span>, pursuing <span className="text-cyan-200">Artificial Intelligence and Data Science</span>. I specialize in building seamless digital experiences and solving real-world problems through clean, efficient, and scalable code. My strong foundation in algorithms and data structures fuels my passion for <span className="text-cyan-200">problem-solving and competitive programming</span>, where I constantly challenge myself to think critically and optimize under constraints. I enjoy working across the tech stack — from intuitive <span className="text-cyan-200">front-end</span> interfaces to robust <span className="text-cyan-200">backend</span> systems. I&apos;m driven by curiosity, a love for learning, and a desire to build intelligent, impactful solutions.
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