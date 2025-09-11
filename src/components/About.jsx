import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const skills = [
  { name: 'React', level: '90%' },
  { name: 'JavaScript', level: '85%' },
  { name: 'Node.js', level: '75%' },
  { name: 'AI & Machine Learning', level: '80%' },
  { name: 'Tailwind CSS', level: '95%' },
  { name: 'Frontend Development', level: '90%' },
];

const About = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start("visible");
          } else {
            controls.start("hidden");
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="about"
      className="bg-background flex-grow flex items-center"
      ref={sectionRef}
      variants={sectionVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-text-color mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <h3 className="text-2xl font-semibold text-text-color mb-4">My Story</h3>
            <p className="text-text-color leading-relaxed mb-4">
              I’m a Software Engineer and Frontend Developer with expertise in React, Node.js, and modern JavaScript. My journey began with curiosity about how technology solves problems, and today I focus on building scalable web applications and AI-driven solutions that make real impact.
            </p>
            <p className="text-text-color leading-relaxed">
              I’m passionate about merging software engineering with AI innovation to design smarter, more efficient digital products.
            </p>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-text-color mb-4">My Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {skills.map((skill) => (
                <div key={skill.name} className="bg-background p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300">
                  <h4 className="font-semibold text-primary-green mb-2">{skill.name}</h4>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary-green h-2 rounded-full" style={{ width: skill.level }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
