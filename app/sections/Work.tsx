'use client';

import { useState, useEffect } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  external?: string;
  featured: boolean;
}

export default function Work() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200
      }
    }
  };

  const projects: Project[] = [
    {
      title: 'Lobby',
      description: 'A real-time communication platform inspired by Discord, enabling seamless text, voice, and video interactions. It supports user authentication, private and public chat rooms, role-based permissions, and media sharing.',
      image: '/uploads/project1.jpg',
      tags: ['Next.js', 'Shaden-UI', 'Clerk', 'Sockets', 'Zustand', 'MySQL', 'Web-RTC'],
      github: 'https://github.com/Maverick-1005/Lobby',
      external: 'https://lobii.vercel.app',
      featured: true
    },
    {
      title: 'VidVault',
      description: 'A video streaming platform inspired by YouTube, offering features like Google login, video upload, subscriptions, playlists and watch history. Users can create channels, upload videos, subscribe to others, and engage with content.',
      image: '/uploads/project2.jpg',
      tags: ['OAuth 2.0', 'Material-UI', 'Cloudinary', 'MERN', 'Redux', 'JWT'],
      github: 'https://github.com/Maverick-1005/VidVault-Backend',
      external: 'https://vidvault.vercel.app',
      featured: true
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);

  if (!mounted) return null;

  return (
    <section id="work" className="section bg-gray-900 text-cyan-200 py-20 min-h-screen">
      <div className="container px-4 sm:px-8 md:px-12 max-w-7xl mx-auto">
        <motion.div 
          className="flex flex-col"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div 
            className="mb-12"
            variants={itemVariants}
          >
            {/* Header for larger screens */}
            <div className="hidden sm:flex items-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground whitespace-nowrap">
                <span className="text-primary mr-2">{'>'} 02.</span>
                <span className="text-white">Some Things I&apos;ve Built</span> 
              </h2>
              <motion.div 
                className="w-full ml-4 md:ml-10 h-0 border-t-2 border-gray-400"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ originX: 0 }}
              />
            </div>

            {/* Header for mobile */}
            <div className="sm:hidden">
              <h2 className="text-2xl font-bold text-foreground">
                <span className="text-primary mr-2">{'>'} 02.</span>
                <span className="text-white">Some Things I&apos;ve Built</span> 
              </h2>
              <motion.div 
                className="w-full mt-4 h-0 border-t-2 border-gray-400"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ originX: 0 }}
              />
            </div>
          </motion.div>

          {/* Featured Projects */}
          <div className="space-y-24">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                className="relative"
                variants={itemVariants}
              >
                {/* Mobile Layout (Image Background) */}
                <motion.div 
                  className="md:hidden relative h-[550px] w-full rounded-lg overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0">
                    <motion.img
                      src={project.image || '/uploads/placeholder.jpg'}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.2, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                    />
                    <div className="absolute inset-0 bg-gray-900/80"></div>
                  </div>
                  
                  {/* Content overlay for mobile */}
                  <motion.div 
                    className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-center"
                    variants={containerVariants}
                  >
                    <motion.p variants={itemVariants} className="text-primary font-mono mb-1">Featured Project</motion.p>
                    <motion.h3 variants={itemVariants} className="text-2xl text-white font-bold mb-4">{project.title}</motion.h3>
                    <motion.div 
                      variants={itemVariants}
                      className="bg-gray-900/80 p-4 sm:p-6 rounded-lg backdrop-blur-sm mb-6"
                    >
                      <p className="text-text-muted text-sm sm:text-base">{project.description}</p>
                    </motion.div>
                    <motion.ul 
                      className="flex flex-wrap gap-2 sm:gap-3 mb-6"
                      variants={containerVariants}
                    >
                      {project.tags.map((tag, i) => (
                        <motion.li 
                          key={i} 
                          variants={tagVariants}
                          className="text-xs sm:text-sm text-text-muted"
                        >
                          {tag}
                        </motion.li>
                      ))}
                    </motion.ul>
                    <motion.div 
                      className="flex gap-4"
                      variants={containerVariants}
                    >
                      {project.github && (
                        <motion.a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-text-muted hover:text-primary transition-colors"
                          aria-label="GitHub Repository"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FiGithub size={20} />
                        </motion.a>
                      )}
                      {project.external && (
                        <motion.a 
                          href={project.external} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-text-muted hover:text-primary transition-colors"
                          aria-label="External Link"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FiExternalLink size={20} />
                        </motion.a>
                      )}
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Desktop Layout */}
                <motion.div 
                  className={`hidden md:grid grid-cols-12 gap-6 md:gap-10 items-center ${
                    index % 2 === 0 ? '' : 'md:text-right'
                  }`}
                  variants={containerVariants}
                >
                  <motion.div 
                    className={`border-2 border-white md:col-span-7 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden rounded-lg group perspective">
                      <motion.div 
                        className="absolute inset-0 bg-primary/20 group-hover:bg-primary/5 transition-all duration-500 z-10 group-hover:opacity-0"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                      />
                      <motion.img
                        src={project.image || '/uploads/placeholder.jpg'}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-lg transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:saturate-150 group-hover:brightness-110 group-hover:shadow-[0_0_30px_rgba(0,229,173,0.3)]"
                        initial={{ scale: 1.2, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className={`md:col-span-5 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}
                    variants={containerVariants}
                  >
                    <motion.p variants={itemVariants} className="text-primary font-mono mb-1">Featured Project</motion.p>
                    <motion.h3 variants={itemVariants} className="text-2xl text-white font-bold mb-4">{project.title}</motion.h3>
                    <motion.div 
                      variants={itemVariants}
                      className={`bg-gray-900/90 p-6  rounded-lg backdrop-blur-sm mb-6 ${
                        index % 2 === 0 ? '' : 'ml-auto'
                      }`}
                    >
                      <p className="text-text-muted">{project.description}</p>
                    </motion.div>
                    <motion.ul 
                      className={`flex flex-wrap gap-3 mb-6 ${
                        index % 2 === 0 ? '' : 'justify-end'
                      }`}
                      variants={containerVariants}
                    >
                      {project.tags.map((tag, i) => (
                        <motion.li 
                          key={i} 
                          variants={tagVariants}
                          className="text-text-muted"
                        >
                          {tag}
                        </motion.li>
                      ))}
                    </motion.ul>
                    <motion.div 
                      className={`flex gap-4 ${
                        index % 2 === 0 ? '' : 'justify-end'
                      }`}
                      variants={containerVariants}
                    >
                      {project.github && (
                        <motion.a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-text-muted hover:text-primary transition-colors"
                          aria-label="GitHub Repository"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FiGithub size={20} />
                        </motion.a>
                      )}
                      {project.external && (
                        <motion.a 
                          href={project.external} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-text-muted hover:text-primary transition-colors"
                          aria-label="External Link"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FiExternalLink size={20} />
                        </motion.a>
                      )}
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 