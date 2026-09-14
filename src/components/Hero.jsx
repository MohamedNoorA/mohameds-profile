import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowRight, FaDownload } from 'react-icons/fa';
import { motion, useReducedMotion } from 'framer-motion';
import HeroVisual from './HeroVisual';

const Hero = ({ navigateTo }) => {
  const shouldReduceMotion = useReducedMotion();

  const handleNav = (id) => {
    if (navigateTo) {
      navigateTo(id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.pageYOffset - 24;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="home" className="relative w-full flex-grow flex flex-col justify-center py-12 md:py-20 lg:py-24 min-h-[calc(100svh-5rem)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Intro & Actions (col-span-6) */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Professional Headline */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold block">
                Software Engineer · Applied AI
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-primary leading-[1.12]">
                Mohamed Noor Adan
              </h1>
              <p className="text-lg sm:text-xl font-medium text-secondary">
                Building resilient web applications &amp; intelligent digital systems.
              </p>
            </div>

            {/* Narrative Overview */}
            <p className="text-base sm:text-lg text-secondary leading-relaxed max-w-xl font-normal">
              Specialized in <span className="text-primary font-medium">React</span>,{' '}
              <span className="text-primary font-medium">Node.js</span>, and{' '}
              <span className="text-primary font-medium">applied AI integrations</span>. Focused on
              shipping reliable, user-centered digital products that tackle complex challenges.
            </p>

            {/* Actions & Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={() => handleNav('projects')}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium bg-primary text-background hover:opacity-90 transition-all duration-150 transform hover:-translate-y-0.5 shadow-xs"
              >
                <span>Explore My Work</span>
                <FaArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="/MOHAMED NOOR ADAN-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium bg-surface text-primary border border-border hover:border-border-hover hover:bg-surface-subtle transition-all duration-150 transform hover:-translate-y-0.5 shadow-xs"
              >
                <FaDownload className="w-3.5 h-3.5 text-muted" />
                <span>Download CV</span>
              </a>

              <button
                onClick={() => handleNav('contact')}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-secondary hover:text-primary transition-colors duration-150"
              >
                <span>Let’s Connect</span>
              </button>
            </div>

            {/* Social Connect without harsh divider line */}
            <div className="pt-2 flex items-center space-x-5">
              <span className="text-xs font-mono text-muted uppercase tracking-wider">Connect:</span>
              <a
                href="https://github.com/MohamedNoorA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="text-muted hover:text-primary transition-colors duration-150"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohamednuru"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="text-muted hover:text-primary transition-colors duration-150"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/Moha_Ada_n"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X profile"
                className="text-muted hover:text-primary transition-colors duration-150"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
            <button
              onClick={() => handleNav('about')}
              className="group inline-flex items-center gap-2 pt-3 text-xs font-mono uppercase tracking-[0.18em] text-muted hover:text-primary transition-colors"
            >
              <span className="h-px w-7 bg-current transition-all group-hover:w-11" />
              Scroll to explore
            </button>
          </motion.div>

          {/* Right Column: Code & Images Container (col-span-6) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end w-full">
            <HeroVisual />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
