'use client';

import { useState, useEffect } from 'react';

interface ExperienceItem {
  company: string;
  website?: string;
  position: string;
  period: string;
  details: string[];
  technologies?: string[];
}

export default function Experience() {
  const [mounted, setMounted] = useState(false);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const experiences: ExperienceItem[] = [
    {
      company: 'IIIT Sricity',
      website: 'https://www.iiits.ac.in',
      position: 'Core Member at Gradient Club',
      period: 'Aug 2024 - Present',
      details: [
        'Serving as a Problem Setter for the Gradient Club, the programming club at IIIT Sricity',
        'Successfully organized the ByteSprint contest with the Gradient Team during the Technical Fest',
        'Helping fellow students improve their problem-solving and competitive programming skills',
        'Collaborating with a team to create engaging programming challenges and contests'
      ],
      technologies: ['C++', 'Python', 'Data Structures', 'Algorithms']
    },
    {
      company: 'Abhisarga 2023',
      position: 'Accommodation Team Member',
      period: 'Feb 2024',
      details: [
        'Assisted in organizing accommodation arrangements for students attending Abhisarga (cultural fest)',
        'Helped accommodate students from different colleges attending the cultural festival',
        'Coordinated with team members to ensure smooth logistics for visiting participants',
        'Managed registration and check-in processes for visitors'
      ]
    }
  ];

  if (!mounted) return null;

  return (
    <section id="experience" className="section py-20 min-h-screen bg-background/30">
      <div className="container">
        <div className="flex flex-col">
          <div className="mb-12 flex items-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-primary mr-2">{'>'} 02.</span> Where I've Worked
            </h2>
            <div className="h-px bg-border flex-grow ml-4 mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-3 flex md:flex-col overflow-x-auto scrollbar-hide mb-6 md:mb-0 border-b md:border-b-0 md:border-l border-border">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTabIndex(index)}
                  className={`px-4 py-3 text-left whitespace-nowrap md:whitespace-normal transition-all ${
                    activeTabIndex === index 
                      ? 'text-primary border-primary border-b-2 md:border-b-0 md:border-l-2 bg-primary/5'
                      : 'text-text-muted hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {exp.company}
                </button>
              ))}
            </div>

            <div className="md:col-span-9">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className={`${activeTabIndex === index ? 'block' : 'hidden'}`}
                >
                  <h3 className="text-xl font-bold mb-1 text-foreground">
                    {exp.position}{' '}
                    <span className="text-primary">
                      @{' '}
                      {exp.website ? (
                        <a 
                          href={exp.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {exp.company}
                        </a>
                      ) : (
                        exp.company
                      )}
                    </span>
                  </h3>
                  <p className="text-text-muted mb-4">{exp.period}</p>
                  <ul className="space-y-3 mb-6">
                    {exp.details.map((detail, i) => (
                      <li 
                        key={i} 
                        className="flex"
                      >
                        <span className="text-primary mr-2 mt-1">▹</span>
                        <span className="text-text-muted">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  {exp.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="text-sm text-text-muted py-1 px-3 rounded bg-border/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 