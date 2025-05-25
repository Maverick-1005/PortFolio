import { FiGithub, FiLinkedin, FiYoutube } from 'react-icons/fi';
import { motion } from 'framer-motion';

function Lefty() {
  return (
    <div
      className="fixed left-6 text-white bottom-0 flex flex-col space-y-6 items-center md:flex"
      style={{
        position: 'fixed',
        bottom: 0,
        left: '1.5rem',
        zIndex: 30
      }}
    >
      <motion.a
        href="https://github.com/Maverick-1005"
        target="_blank"
        rel="noopener noreferrer"
        className="text-text-muted hover:text-primary transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FiGithub size={20} />
      </motion.a>

      <motion.a
        href="https://www.linkedin.com/in/ansh-mishra1005/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-text-muted hover:text-primary transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FiLinkedin size={20} />
      </motion.a>

      <motion.a
        href="https://codeforces.com/profile/ansh1005mishra"
        target="_blank"
        rel="noopener noreferrer"
        className="text-text-muted hover:text-primary transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FiYoutube size={20} />
      </motion.a>

      <div className="h-40 border-2 border-gray-400 w-0.5 bg-text-muted"></div>
    </div>
  );
}

export default Lefty;