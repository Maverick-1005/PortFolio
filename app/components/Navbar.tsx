'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiYoutube, FiMenu, FiX } from 'react-icons/fi';

const navItems = [
  { id: '01', name: 'About', href: '#about' },
  { id: '02', name: 'Work', href: '#work' },
  { id: '03', name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Prevent scrolling when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isSidebarOpen]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Close sidebar after navigation on mobile
      setIsSidebarOpen(false);
    }
  };

  if (!mounted) return null;

  return (
    <>
      <motion.header
        className={`fixed bg-gray-900 text-cyan-100 top-0 left-0 w-full max-w-screen z-50 transition-all duration-300 ${scrolled
            ? 'bg-background/90 backdrop-blur-md shadow-md shadow-black/5'
            : ''
          } border-b border-border/20`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Main container with explicit padding */}
        <div className="w-full py-3 px-3 md:px-16 lg:px-24 flex justify-between items-center">
          {/* Logo - Left */}
          <div className="">
            <a
              href="#hero"
              onClick={(e) => handleScroll(e, '#hero')}
              aria-label="Ansh Mishra"
              className="block"
            >
              <div className="h-14 w-14 rounded-lg border-2 border-primary flex items-center justify-center text-2xl font-bold text-primary">
                A
              </div>
            </a>
          </div>

          {/* Navigation - Right */}
          <div className="hidden sm:block">
            <nav className="flex items-center">
              {navItems.map((item) => (
                <div
                  key={item.id}
                  className="px-6 md:px-8 lg:px-10"
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="flex items-center text-text-muted hover:text-primary transition-colors text-sm font-medium whitespace-nowrap"
                  >
                    <span className="text-primary mr-3 md:mr-4 lg:mr-5 font-mono">{'>'} {item.id}.</span>
                    {item.name}
                  </a>
                </div>
              ))}
              <a
                href="https://drive.google.com/file/d/1L25VJwBelcOSNs3TEfhuKfwOSLaeB_3g/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-primary text-primary px-6 py-2 rounded-sm hover:bg-primary hover:bg-opacity-10 transition-all text-sm font-medium ml-5"
              >
                Resume
              </a>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-primary hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isSidebarOpen ? (
                <FiX size={24} />
              ) : (
                <FiMenu size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Sidebar - Always fixed position, independent of scrolling */}
        <AnimatePresence>
          {isSidebarOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-blue-950/80 backdrop-blur-sm z-40 sm:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsSidebarOpen(false)}
                style={{ position: 'fixed' }}
              />
              
              {/* Sidebar */}
              <motion.div
                className="fixed inset-y-0 right-0 h-screen min-h-screen w-3/4 max-w-xs bg-blue-950 border-l border-cyan-900 z-50 sm:hidden flex flex-col"
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              >
                <div className="flex justify-end p-6">
                  <button 
                    onClick={() => setIsSidebarOpen(false)}
                    className="text-primary hover:text-primary transition-colors"
                    aria-label="Close menu"
                  >
                    <FiX size={24} />
                  </button>
                </div>
                
                <nav className="flex flex-col items-center justify-center flex-grow gap-10 pb-20">
                  {navItems.map((item) => (
                    <div key={item.id} className="w-full text-center">
                      <a
                        href={item.href}
                        onClick={(e) => handleScroll(e, item.href)}
                        className="flex flex-col items-center text-text-muted hover:text-primary transition-colors text-lg font-medium"
                      >
                        <span className="text-primary mb-1 font-mono text-sm">{'>'} {item.id}.</span>
                        {item.name}
                      </a>
                    </div>
                  ))}
                  <a
                    href="https://drive.google.com/file/d/1L25VJwBelcOSNs3TEfhuKfwOSLaeB_3g/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-primary text-primary px-8 py-3 rounded-sm hover:bg-primary hover:bg-opacity-10 transition-all text-base font-medium mt-6"
                  >
                    Resume
                  </a>
                </nav>
                
                <div className="flex justify-center gap-6 p-6 border-t border-cyan-900">
                  <a
                    href="https://github.com/Maverick-1005"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-primary transition-colors"
                  >
                    <FiGithub size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ansh-mishra1005/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-primary transition-colors"
                  >
                    <FiLinkedin size={20} />
                  </a>
                  <a
                    href="https://codeforces.com/profile/ansh1005mishra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-primary transition-colors text-xl"
                  >
                    <FiYoutube />
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}