'use client';

import { useEffect } from 'react';

interface ScrollRevealOptions {
  delay?: number;
  distance?: string;
  duration?: number;
  easing?: string;
  origin?: 'top' | 'right' | 'bottom' | 'left';
  reset?: boolean;
}

export default function useScrollReveal(
  targetRef: React.RefObject<HTMLElement>,
  options: ScrollRevealOptions = {}
): void {
  useEffect(() => {
    const initScrollReveal = async () => {
      if (typeof window !== 'undefined') {
        try {
          const ScrollReveal = (await import('scrollreveal')).default;
          
          const defaultOptions: ScrollRevealOptions = {
            delay: 200,
            distance: '20px',
            duration: 800,
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
            origin: 'bottom',
            reset: false,
          };
          
          const sr = ScrollReveal();
          
          if (targetRef.current) {
            sr.reveal(targetRef.current, {
              ...defaultOptions,
              ...options,
            });
          }
        } catch (error) {
          console.error('Failed to load ScrollReveal:', error);
        }
      }
    };
    
    initScrollReveal();
  }, [targetRef, options]);
} 