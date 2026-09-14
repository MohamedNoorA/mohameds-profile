import React from 'react';
import { FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 text-xs font-mono text-muted overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span>&copy; {currentYear} Mohamed Noor Adan.</span>
          <span className="hidden md:inline text-border-hover">·</span>
          <span className="hidden md:inline text-secondary">Frontend &amp; Applied AI</span>
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="flex items-center gap-1.5 hover:text-primary transition-colors duration-150 focus:outline-none"
          >
            <span>Back to top</span>
            <FiArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
