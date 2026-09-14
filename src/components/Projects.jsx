import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const projects = [
  {
    id: 'medichatai',
    number: '01',
    title: 'MediChatAI',
    tagline: 'AI Mental Health Companion',
    description:
      'Empathetic conversational AI providing a confidential, 24/7 safe space for mental wellness support, sentiment tracking, and coping strategies.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'AI/NLP'],
    github: 'https://github.com/MohamedNoorA/medichat-ai.git',
    live: 'https://medichatai.vercel.app/',
    image: '/medichat-ai.png',
  },
  {
    id: 'lexai',
    number: '02',
    title: 'LexAI Resume Builder',
    tagline: 'Career Document Generator',
    description:
      'AI resume generator producing ATS-optimized resumes with targeted keyword suggestions, structured layouts, and real-time custom templates.',
    technologies: ['React', 'Tailwind CSS', 'Firebase', 'OpenAI API'],
    github: 'https://github.com/LexResumeAi/frontend.git',
    live: null,
    customPreview: 'lexai',
  },
  {
    id: 'mathgame',
    number: '03',
    title: 'Math Game for Kids',
    tagline: 'Foundational Numeracy Game',
    description:
      'Interactive web-based arithmetic platform teaching elementary operations through rapid feedback loops and progressive difficulty stages.',
    technologies: ['JavaScript', 'HTML5 Canvas', 'CSS3', 'Web Audio'],
    github: 'https://github.com/MohamedNoorA/math-game.git',
    live: null,
    customPreview: 'mathgame',
  },
  {
    id: 'lawfirm',
    number: '04',
    title: 'Advocate & Client Hub',
    tagline: 'Legal Practice Intake Portal',
    description:
      'Streamlined legal intake system facilitating encrypted case questionnaire processing, client dispatch, and advocate consultation bookings.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/MohamedNoorA',
    live: null,
    customPreview: 'lawfirm',
    status: 'In Development',
  },
  {
    id: 'racinggame',
    number: '05',
    title: '3D Racing Engine',
    tagline: 'Physics & Coordinate Engine',
    description:
      'Standalone 3D racing simulator exploring real-time vehicle trajectory calculations, terrain collision dynamics, and frame-rate optimization.',
    technologies: ['Python', 'Pygame', '3D Coordinate Physics'],
    github: 'https://github.com/MohamedNoorA/racing-game.git',
    live: null,
    customPreview: 'racing',
  },
];

// Clean visual preview cards
const CardVisual = ({ project }) => {
  if (project.image) {
    return (
      <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden border border-border/30 bg-surface/50">
        <img
          src={project.image}
          alt={`${project.title} interface preview`}
          loading="lazy"
          className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
        />
      </div>
    );
  }

  if (project.customPreview === 'lexai') {
    return (
      <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden border border-border/30 bg-surface/60 p-3.5 flex flex-col justify-between">
        <div className="flex items-center justify-between text-[11px] font-mono text-muted">
          <span className="font-semibold text-primary">LexAI Studio</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            ATS Score 96%
          </span>
        </div>
        <div className="space-y-1.5 py-1">
          <div className="p-2 rounded bg-surface-subtle/80 border border-border/40 text-[11px] font-sans text-secondary leading-snug">
            Automated keyword indexing &amp; ATS-compliant typography format.
          </div>
        </div>
        <div className="text-[10px] font-mono text-muted flex items-center justify-between">
          <span>React · OpenAI</span>
          <span className="text-emerald-400 font-medium">Export Ready</span>
        </div>
      </div>
    );
  }

  if (project.customPreview === 'mathgame') {
    return (
      <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden border border-border/30 bg-surface/60 p-3.5 flex flex-col justify-between text-center">
        <div className="flex items-center justify-between text-[11px] font-mono text-muted">
          <span className="font-semibold text-primary">Math Engine</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">
            Kids Game
          </span>
        </div>
        <div className="my-auto py-1">
          <div className="text-2xl font-mono font-bold text-primary">
            24 × 7 = <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">168</span>
          </div>
          <p className="text-[10px] text-muted font-mono mt-0.5">Visual arithmetic feedback</p>
        </div>
        <div className="text-[10px] font-mono text-muted flex items-center justify-between">
          <span>JavaScript Canvas</span>
          <span>Web Audio</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden border border-border/30 bg-surface/60 p-3.5 flex flex-col justify-between">
      <div className="flex items-center justify-between text-[11px] font-mono text-muted">
        <span className="font-semibold text-primary">{project.title}</span>
        <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
          {project.status || 'Active'}
        </span>
      </div>
      <div className="my-auto py-1 text-left space-y-1">
        <p className="text-[10px] text-muted font-mono">// Architecture</p>
        <p className="text-xs text-secondary font-medium line-clamp-1">{project.tagline}</p>
      </div>
      <div className="text-[10px] font-mono text-muted flex items-center justify-between">
        <span>Clean Code Design</span>
        <span className="text-primary font-medium">Modular</span>
      </div>
    </div>
  );
};

const Projects = () => {
  // Page 0: projects 0, 1, 2 (3 projects display at once)
  // Page 1: projects 3, 4 (then the others)
  const [page, setPage] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const PAGE_SIZE = 3;
  const totalPages = Math.ceil(projects.length / PAGE_SIZE);

  const visibleProjects = projects.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  const handleNext = () => {
    setPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="projects" className="py-14 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Compact Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 block mb-1">
              PROJECTS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">
              Selected Work
            </h2>
            <p className="text-xs sm:text-sm text-secondary mt-0.5">
              Displaying 3 projects at once · Explore the full portfolio
            </p>
          </div>

          {/* Navigation Controls: Switch between Set 1 (3 projects) and Set 2 (the others) */}
          <div className="flex items-center gap-2">
            <div className="flex items-center p-1 rounded-lg border border-border/30 bg-surface/80 text-xs font-mono">
              <button
                onClick={() => setPage(0)}
                className={`px-3 py-1 rounded-md transition-all duration-150 ${
                  page === 0
                    ? 'bg-gradient-to-r from-blue-500/15 via-indigo-500/15 to-purple-500/15 text-primary font-semibold border border-indigo-500/30'
                    : 'text-muted hover:text-primary'
                }`}
              >
                01 — 03
              </button>
              <button
                onClick={() => setPage(1)}
                className={`px-3 py-1 rounded-md transition-all duration-150 ${
                  page === 1
                    ? 'bg-gradient-to-r from-blue-500/15 via-indigo-500/15 to-purple-500/15 text-primary font-semibold border border-indigo-500/30'
                    : 'text-muted hover:text-primary'
                }`}
              >
                04 — 05
              </button>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handlePrev}
                aria-label="Previous set of projects"
                className="p-1.5 rounded-lg border border-border/30 bg-surface/80 text-secondary hover:text-primary hover:border-border/60 transition-colors"
              >
                <FiChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next set of projects"
                className="p-1.5 rounded-lg border border-border/30 bg-surface/80 text-secondary hover:text-primary hover:border-border/60 transition-colors"
              >
                <FiChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 3 Projects Displayed At Once in a Compact Container Grid */}
        <div className="relative min-h-[410px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {visibleProjects.map((project) => (
                <div
                  key={project.id}
                  className="surface-card group rounded-xl backdrop-blur-xs p-3.5 sm:p-4 flex flex-col justify-between hover:border-indigo-500/30 hover:-translate-y-1 transition-all duration-200"
                >
                    <div className="space-y-2.5">
                    {/* Visual Screenshot / Preview */}
                    <CardVisual project={project} />

                    {/* Project Header */}
                    <div className="pt-1">
                      <div className="flex items-center justify-between text-xs font-mono mb-1">
                        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                          {project.number}
                        </span>
                        {project.status && (
                          <span className="text-[10px] text-muted italic font-mono">
                            {project.status}
                          </span>
                        )}
                      </div>
                      <h3 className="text-base font-bold tracking-tight text-primary group-hover:text-indigo-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-medium text-secondary line-clamp-1">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Concise 2-3 Line Description */}
                    <p className="text-xs text-secondary leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Compact Technology Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-surface-subtle/90 border border-border/40 text-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-muted">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions & Buttons */}
                  <div className="pt-3 mt-2 flex items-center gap-2">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-xs transform hover:-translate-y-0.5 transition-all duration-150"
                      >
                        <span>Live Demo</span>
                        <FaExternalLinkAlt className="w-2.5 h-2.5" />
                      </a>
                    )}

                    {project.github && project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-surface-subtle/80 border border-border/40 hover:border-indigo-500/40 text-primary hover:bg-surface-subtle transform hover:-translate-y-0.5 transition-all duration-150"
                      >
                        <FaGithub className="w-3 h-3" />
                        <span>Source</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Subtle Pagination Indicators */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Go to project page ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-200 ${
                i === page
                  ? 'w-6 bg-gradient-to-r from-blue-500 to-purple-600'
                  : 'w-1.5 bg-border-hover/60 hover:bg-muted'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
