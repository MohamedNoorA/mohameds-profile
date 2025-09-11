import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaSun, FaMoon } from 'react-icons/fa'; // Import sun/moon icons
import { useTheme } from '../context/ThemeContext'; // Import useTheme hook

const Navbar = ({ navigateTo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme(); // Use the theme hook

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-background shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-text-color"><span style={{ animation: 'shine-colors 12s infinite alternate' }}>Mohamed</span> Noor Adan</div>
        <div className="hidden md:flex space-x-8">
          <button onClick={() => navigateTo('home')} className="text-text-color hover:text-primary-green dark:hover:text-primary-green">Home</button>
          <button onClick={() => navigateTo('about')} className="text-text-color hover:text-primary-green dark:hover:text-primary-green">About</button>
          <button onClick={() => navigateTo('projects')} className="text-text-color hover:text-primary-green dark:hover:text-primary-green">Projects</button>
          <button onClick={() => navigateTo('contact')} className="text-text-color hover:text-primary-green dark:hover:text-primary-green">Contact</button>
        </div>
        <div className="flex items-center"> {/* Wrap menu button and theme toggle */}
          <button onClick={toggleTheme} className="text-text-color focus:outline-none mr-4">
            {theme === 'light' ? <FaMoon size={24} /> : <FaSun size={24} />}
          </button>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-text-color focus:outline-none">
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-background">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => { navigateTo('home'); toggleMenu(); }} className="block px-3 py-2 rounded-md text-base font-medium text-text-color hover:text-primary-green dark:hover:text-primary-green hover:bg-background-light dark:hover:bg-background-dark">Home</button>
            <button onClick={() => { navigateTo('about'); toggleMenu(); }} className="block px-3 py-2 rounded-md text-base font-medium text-text-color hover:text-primary-green dark:hover:text-primary-green hover:bg-background-light dark:hover:bg-background-dark">About</button>
            <button onClick={() => { navigateTo('projects'); toggleMenu(); }} className="block px-3 py-2 rounded-md text-base font-medium text-text-color hover:text-primary-green dark:hover:text-primary-green hover:bg-background-light dark:hover:bg-background-dark">Projects</button>
            <button onClick={() => { navigateTo('contact'); toggleMenu(); }} className="block px-3 py-2 rounded-md text-base font-medium text-text-color hover:text-primary-green dark:hover:text-primary-green hover:bg-background-light dark:hover:bg-background-dark">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;