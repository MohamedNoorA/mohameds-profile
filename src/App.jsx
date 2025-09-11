import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home'); // State to track active section

  useEffect(() => {
    // Disable body scrolling
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset'; // Re-enable on unmount
    };
  }, []);

  const navigateTo = (sectionId) => {
    setActiveSection(sectionId);
  };

  // Conditionally render sections based on activeSection
  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Hero navigateTo={navigateTo} />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero navigateTo={navigateTo} />; // Default to home
    }
  };

  return (
    <div className="bg-background h-screen flex flex-col">
      <Navbar navigateTo={navigateTo} />
      <div className="flex-grow pt-24">
        {renderSection()}
      </div>
    </div>
  );
}

export default App;