'use client';

import { motion,  useTransform, useMotionValue} from 'framer-motion';

export default function About() {
  // const [mounted, setMounted] = useState(false);
  
  // Mouse position for profile picture tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  const skills = [
    'JavaScript/TypeScript', 'React.js/Next.js', 'Tailwind CSS', 'Node.js', 
    'C/C++', 'Python', 'MongoDB', 'MySQL', 'Java'
  ];

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Variants for staggered animations
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="section bg-gray-900  text-cyan-200 py-20 min-h-screen">
      <div className="container px-4 sm:px-8 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col">
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Header for larger screens */}
            <div className="hidden sm:flex items-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground whitespace-nowrap">
                <span className="text-primary mr-2">{'>'} 01.</span>
                <span className='text-white'>About Me</span>
              </h2>
              <div className="w-full ml-4 md:ml-10 h-0 border-t-2 border-gray-400"></div>
            </div>

            {/* Header for mobile */}
            <div className="sm:hidden">
              <h2 className="text-2xl font-bold text-foreground">
                <span className="text-primary mr-2">{'>'} 01.</span>
                <span className='text-white'>About Me</span>
              </h2>
              <div className="w-full mt-4 h-0 border-t-2 border-gray-400"></div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <motion.div 
              className="lg:col-span-3"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <motion.p variants={item} className="text-base sm:text-lg text-foreground">
                  Hello! I&apos;m Ansh, currently pursuing my <span className="text-primary">B.Tech in Artificial Intelligence and Data Science</span> at Indian Institute of Information Technology, Sricity. I&apos;m passionate about software development and problem-solving.
                </motion.p>
                
                <motion.p variants={item} className="text-base sm:text-lg text-foreground">
                  I enjoy building applications that solve real-world problems. My academic journey at IIIT Sricity has equipped me with strong fundamentals in <span className="text-primary">AI, Data Science, and Software Engineering</span>. Before that, I completed my schooling at Shree Raghukul Vidyapeeth with 89.6% in CBSE class 12th.
                </motion.p>
                
                <motion.p variants={item} className="text-base sm:text-lg mb-6 text-foreground">
                  I actively participate in competitive programming on platforms like <span className="text-primary">CodeForces (Pupil) and CodeChef (3-star)</span>, and have solved over 500 DSA/CP problems across various platforms. I&apos;m also involved as a Core Member of the Gradient Club (Programming Club of IIITS). Here are some of the technologies I&apos;ve been working with:
                </motion.p>
              </div>
              
              <motion.ul 
                className="grid grid-cols-2 gap-2 text-sm sm:text-base"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {skills.map((skill, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center text-text-muted group cursor-default"
                    variants={item}
                    whileHover={{ x: 10, color: 'rgb(0, 229, 173)' }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-primary mr-2 transition-transform duration-200 group-hover:scale-125">▹</span> {skill}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            
            <div className="lg:col-span-2 flex justify-center mt-8 lg:mt-0">
              <motion.div 
                className="w-full max-w-[280px] sm:max-w-md relative group perspective"
                style={{ 
                  transformStyle: "preserve-3d",
                  rotateX,
                  rotateY
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <motion.img 
                  src="/uploads/profile.jpg" 
                  alt="Ansh Mishra"
                  className="rounded-lg w-full h-auto z-10 relative transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_25px_rgba(0,229,173,0.4)]"
                  whileHover={{ scale: 1.05 }}
                />
                <motion.div 
                  className="absolute top-4 left-4 right-4 bottom-4 border-2 border-primary rounded-lg -z-10"
                  style={{ 
                    transformStyle: "preserve-3d",
                    rotateX,
                    rotateY
                  }}
                  whileHover={{ 
                    translateX: 24,
                    translateY: 24,
                    borderColor: "rgba(0, 229, 173, 0.7)"
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 