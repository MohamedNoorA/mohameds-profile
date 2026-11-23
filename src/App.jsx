import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'contact'];
    let frameId = null;
    const handleScroll = () => {
      if (frameId !== null) return;

      frameId = window.requestAnimationFrame(() => {
        frameId = null;
        const marker = window.innerHeight * 0.35;
        let currentSection = sections[0];

        sections.forEach((sectionId) => {
          const section = document.getElementById(sectionId);
          if (section && section.getBoundingClientRect().top <= marker) {
            currentSection = sectionId;
          }
        });

        setActiveSection((current) => current === currentSection ? current : currentSection);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, []);

  const navigateTo = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
      element.scrollIntoView({ behavior });
    }
  };

  return (
    <div className="relative min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-background text-primary flex flex-col justify-between selection:bg-accent/20 selection:text-accent">
      {/* Background Image: One image as atmospheric background image */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
        <picture>
          <source srcSet="/images/laptop-hero.avif" type="image/avif" />
          <img
            src="/images/laptop-hero.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center opacity-[0.09] dark:opacity-[0.13] filter grayscale-[80%]"
          />
        </picture>
        <div className="absolute inset-0 bg-background/90" />
      </div>

      {/* Fixed navigation stays visible while scrolling through every section */}
      <Navbar navigateTo={navigateTo} activeSection={activeSection} />

      {/* Continuous Smooth Scroll Across All Sections */}
      <main className="relative z-10 flex-grow w-full overflow-x-hidden pt-20">
        <Hero navigateTo={navigateTo} />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* Clean Footer without bottom hr line */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

export default App;
