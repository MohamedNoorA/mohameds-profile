import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronRight } from 'react-icons/fa';

const ProjectSlider = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 0 for initial, 1 for next

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

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 500 : -500, // Reduced slide distance
      opacity: 0,
      y: 20, // Subtle vertical movement
    }),
    center: {
      x: 0,
      opacity: 1,
      y: 0,
    },
    exit: (direction) => ({
      x: direction < 0 ? 500 : -500, // Reduced slide distance
      opacity: 0,
      y: -20, // Subtle vertical movement
    }),
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="projects"
      className="bg-background flex flex-col items-center justify-center py-20"
      ref={sectionRef}
      variants={sectionVariants}
      initial="hidden"
      animate={controls}
    >
      <div>
        <h2 className="text-3xl font-bold text-center text-text-color mb-12 w-full">My Projects</h2>

        <div className="relative w-full max-w-2xl mx-auto bg-project-card-bg dark:bg-gray-700 rounded-lg shadow-lg p-6 md:p-8 overflow-hidden"> {/* Reduced max-w and added overflow-hidden */}
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ x: { type: "spring", stiffness: 200, damping: 25 }, opacity: { duration: 0.4 }, y: { type: "spring", stiffness: 200, damping: 25 } }} // Adjusted transition
              className="w-full flex flex-col items-center text-center"
            >
              <h3 className="text-2xl font-bold text-center text-text-color mb-2">{projects[currentIndex].title}</h3>
              <p className="text-center text-text-color mb-4 leading-relaxed">{projects[currentIndex].description}</p>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {projects[currentIndex].technologies.map((tech) => (
                  <span key={tech} className="bg-primary-green text-white text-sm px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-center space-x-4">
                <a href={projects[currentIndex].github} target="_blank" rel="noopener noreferrer" className="bg-accent-blue text-white font-bold py-2 px-4 rounded-full hover:bg-accent-blue-dark transition duration-300 flex items-center">
                  <FaGithub className="mr-2" /> GitHub
                </a>
                {projects[currentIndex].live && (
                  <a href={projects[currentIndex].live} target="_blank" rel="noopener noreferrer" className="bg-primary-green text-white font-bold py-2 px-4 rounded-full hover:bg-dark-green transition duration-300 flex items-center">
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full focus:outline-none hover:bg-opacity-75 transition duration-300 z-10 md:right-0" // Adjusted position and added responsiveness
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectSlider;
