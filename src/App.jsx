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
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-background text-primary flex flex-col justify-between selection:bg-indigo-500/20 selection:text-indigo-400">
      {/* Background Image: One image as atmospheric background image */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
        <picture>
          <source srcSet="/images/bgimage.avif" type="image/avif" />
          <img
            src="/images/bgimage.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center opacity-[0.14] dark:opacity-[0.16] filter grayscale-[55%]"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-background/78 via-background/90 to-background/96" />
      </div>

      {/* Persistent Navigation Bar: Sticky & interactive across all pages */}
      <Navbar navigateTo={navigateTo} activeSection={activeSection} />

      {/* Continuous Smooth Scroll Across All Sections */}
      <main className="relative z-10 flex-grow w-full overflow-x-hidden">
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
