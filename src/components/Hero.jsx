import React, { useEffect, useRef, useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Typewriter from './Typewriter'; // Import the Typewriter component
import { motion, useAnimation } from 'framer-motion'; // Import motion and useAnimation

const Hero = ({ navigateTo }) => {
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
      id="home"
      className="bg-background flex-grow flex items-center"
      ref={sectionRef}
      variants={sectionVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-text-color leading-tight mb-4">
          Hello, I'm{' '}
          <Typewriter text="Mohamed Noor Adan" delay={100} infinite={false} />
        </h1>
        <h2 className="text-2xl md:text-4xl text-primary-green font-semibold mb-8">Software Engineer | AI Innovator | Problem Solver</h2>
        <p className="text-lg text-text-color max-w-3xl mx-auto mb-12">As a Software Engineer and AI Innovator, I leverage expertise in React, Node.js, and AI integration to build impactful, user-friendly, and efficient digital products that solve complex problems.</p>
        <div className="flex justify-center space-x-4 mb-12">
          <a href="/MOHAMED NOOR ADAN-cv.pdf" target="_blank" rel="noopener noreferrer" className="bg-primary-green text-white font-bold py-3 px-6 rounded-full hover:bg-dark-green transition duration-300">Download CV</a>
          <button onClick={() => navigateTo('projects')} className="bg-primary-green text-white font-bold py-3 px-6 rounded-full hover:bg-dark-green transition duration-300">Explore My Work</button>
          <button onClick={() => navigateTo('contact')} className="bg-background text-text-color font-bold py-3 px-6 rounded-full shadow-md hover:bg-gray-200 transition duration-300">Let’s Connect</button>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/MohamedNoorA" target="_blank" rel="noopener noreferrer" className="text-text-color hover:text-primary-green"><FaGithub size={32} /></a>
          <a href="https://www.linkedin.com/in/mohamednuru" target="_blank" rel="noopener noreferrer" className="text-text-color hover:text-primary-green"><FaLinkedin size={32} /></a>
          <a href="https://x.com/Moha_Ada_n" target="_blank" rel="noopener noreferrer" className="text-text-color hover:text-primary-green"><FaTwitter size={32} /></a>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
