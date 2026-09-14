import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Navbar = ({ navigateTo, activeSection = 'home' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setIsOpen(false);
    if (navigateTo) {
      navigateTo(id);
    }
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 w-full bg-background/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand / Name */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left group flex items-center gap-2 focus:outline-none"
        >
          <span className="font-sans font-semibold text-lg tracking-tight text-primary">
            Mohamed Noor Adan
          </span>
          <span className="hidden sm:inline-block text-xs font-mono text-muted pl-2">
            / Software Engineer
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-3">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-150 ${
                  isActive
                    ? 'text-primary bg-surface-subtle font-semibold shadow-xs'
                    : 'text-secondary hover:text-primary hover:bg-surface-subtle/50'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Theme Toggle & Mobile Menu Trigger */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle light and dark theme"
            className="p-2.5 rounded-lg text-secondary hover:text-primary hover:bg-surface-subtle transition-colors duration-150 focus:outline-none"
          >
            {theme === 'light' ? (
              <FaMoon className="w-4 h-4" />
            ) : (
              <FaSun className="w-4 h-4 text-accent" />
            )}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
            className="md:hidden p-2.5 rounded-lg text-secondary hover:text-primary hover:bg-surface-subtle transition-colors duration-150 focus:outline-none"
          >
            {isOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-surface px-6 py-4 space-y-2 rounded-2xl shadow-xl mx-4 my-2 border border-border">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors duration-150 ${
                  isActive
                    ? 'text-accent bg-accent-subtle font-semibold'
                    : 'text-secondary hover:text-primary'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Navbar;
