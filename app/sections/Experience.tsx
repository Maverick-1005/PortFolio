'use client';

import { motion } from 'framer-motion';

interface Experience {
  company: string;
  logo: string;
  role: string;
  location: string;
  duration: string;
  achievements: string[];
}

export default function Experience() {
  const experiences: Experience[] = [
    {
      company: 'MeetStreamAI',
      logo: '/uploads/companyLogo.jpg',
      role: 'Full Stack Developer Intern',
      location: 'Remote',
      duration: 'July 2025 - Present',
      achievements: [
        'Engineered a fully automated daily reporting Slack bot using AWS EventBridge (CRON) and Slack APIs, delivering real-time, company-wide performance summaries to designated Slack channels precisely at 5:31 AM every day.',
        'Built a comprehensive admin dashboard from scratch using Next.js and TypeScript, featuring user analytics, signup tracking, platform usage monitoring, bot management, and real-time data visualization.',
        'Designed and developed scalable backend APIs using AWS Lambda and DynamoDB, enabling advanced bot retrieval with multi-filter support, cursor-based pagination, and optimized querying through multiple Global Secondary Indexes (GSIs); also implemented high-performance user search with character-by-character lookup by email and user ID.',
        'Optimized authentication flow by resolving the client-side waterfall issue through Server-Side Rendering (SSR), enabling intelligent data prefetching and caching, and significantly improving application load times and overall performance.'
      ]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
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

  const achievementVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 200
      }
    }
  };

  return (
    <section id="experience" className="section bg-gray-900 text-cyan-200 pt-20 pb-12">
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
                <span className="text-primary mr-2">{'>'} 03.</span>
                <span className="text-white">Experience</span> 
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
                <span className="text-primary mr-2">{'>'} 03.</span>
                <span className="text-white">Experience</span> 
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

          {/* Experience List */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative"
                variants={itemVariants}
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                  {/* Left side - Company Logo and Info */}
                  <motion.div 
                    className="md:w-1/3 flex flex-col"
                    variants={itemVariants}
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <motion.img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-12 h-12 md:w-16 md:h-16 rounded-lg object-cover border-2 border-primary/30 flex-shrink-0"
                        whileHover={{ scale: 1.1, borderColor: 'rgb(0, 229, 173)' }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                          {exp.company}
                        </h3>
                        <p className="text-primary text-sm md:text-base font-mono">
                          {exp.duration}
                        </p>
                      </div>
                    </div>
                    <div className="md:ml-0">
                      <p className="text-text-muted text-base md:text-lg font-semibold mb-1">
                        {exp.role}
                      </p>
                      <p className="text-text-muted text-sm md:text-base">
                        {exp.location}
                      </p>
                    </div>
                  </motion.div>

                  {/* Right side - Achievements */}
                  <motion.div 
                    className="md:w-2/3"
                    variants={containerVariants}
                  >
                    <ul className="space-y-4">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-3 text-text-muted"
                          variants={achievementVariants}
                        >
                          <span className="text-primary mt-1.5 flex-shrink-0">▹</span>
                          <span className="text-sm md:text-base leading-relaxed">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Divider line between experiences (if multiple) */}
                {index < experiences.length - 1 && (
                  <motion.div
                    className="mt-12 h-px bg-gray-700"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

