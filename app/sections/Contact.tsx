'use client';

import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function Contact() {

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

  return (
    <section id="contact" className="section flex justify-center bg-gray-900 text-cyan-200 py-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <motion.div 
        className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-10 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container w-fit max-w-3xl relative z-10">
        <motion.div 
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-primary font-mono mb-4 inline-block"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              color: "#00e5ad",
              transition: { duration: 0.2 }
            }}
          >
            {'>'} 03. What&apos;s Next?
          </motion.h2>
          
          <motion.h3 
            className="text-4xl md:text-5xl font-bold mb-6"
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            Get In Touch
          </motion.h3>
          
          <motion.p 
            className="text-text-muted mb-12 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            I&apos;m currently looking for new opportunities. Whether you have a question, want to work together, or just want to say hi, my inbox is open!
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-8"
          >
            <motion.a 
              href="mailto:ansh1005mishra@gmail.com" 
              className="relative inline-block border-2 border-primary text-primary px-8 py-4 rounded-md hover:bg-primary hover:bg-opacity-10 transition-all font-medium text-lg group overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span 
                className="relative z-10 flex items-center gap-2"
                whileHover={{ x: 5 }}
              >
                Say Hello
                <motion.span
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <FiMail className="inline-block" />
                </motion.span>
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-primary/20 rounded opacity-0 group-hover:opacity-100"
                initial={false}
                animate={{ scale: [0.7, 1], opacity: [0, 1] }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>

            {/* Social Links */}
            <motion.div 
              className="flex gap-6 mt-8"
              variants={containerVariants}
            >
              <motion.a
                href="https://github.com/Maverick-1005"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiGithub size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/ansh-mishra1005/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiLinkedin size={24} />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 