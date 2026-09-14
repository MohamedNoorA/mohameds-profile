import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FiCode, FiServer, FiCpu, FiTool, FiCheckCircle } from 'react-icons/fi';

const skillCategories = [
  {
    title: 'Frontend Engineering',
    icon: FiCode,
    skills: ['React', 'JavaScript (ES6+)', 'Tailwind CSS', 'Framer Motion', 'HTML5 / CSS3', 'Responsive UI/UX'],
  },
  {
    title: 'Backend & APIs',
    icon: FiServer,
    skills: ['Node.js', 'Express', 'MongoDB', 'RESTful APIs', 'Firebase', 'Authentication'],
  },
  {
    title: 'Applied AI & ML',
    icon: FiCpu,
    skills: ['AI/NLP Integration', 'OpenAI API', 'Custom AI Pipelines', 'Prompt Architecture', 'Chatbot Systems'],
  },
  {
    title: 'Tools & Workflow',
    icon: FiTool,
    skills: ['Git & GitHub', 'Vite', 'Postman', 'Vercel', 'VS Code', 'Linux / CLI'],
  },
];

const timeline = [
  {
    period: '2024 — Present',
    role: 'Full-Stack & Applied AI Developer',
    description:
      'Designing and developing end-to-end AI applications including MediChatAI (mental health assistant) and LexAI (automated resume builder). Focused on fast UX, resilient Node.js backends, and responsive design.',
  },
  {
    period: '2023 — 2024',
    role: 'Frontend Software Engineer',
    description:
      'Engineered interactive web applications, client solutions, and educational tools using React and modern JavaScript. Implemented performance optimizations and clean, component-driven architectures.',
  },
  {
    period: 'Foundations',
    role: 'Computer Science & Software Principles',
    description:
      'Rigorous practice in algorithms, data structures, and multi-language development (JavaScript, Python, C-fundamentals). Dedicated to continuous technical refinement.',
  },
];

const About = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 max-w-2xl"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold block mb-2">
            01. Background &amp; Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">
            Engineering with purpose, measured by real-world utility.
          </h2>
        </motion.div>

        {/* Editorial Story + Overview Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-5 text-secondary leading-relaxed text-base sm:text-lg"
          >
            <p>
              I’m a Software Engineer and Full-Stack Developer specializing in building modern web applications and practical AI integrations. My trajectory started with curiosity about how software shapes daily life, which evolved into a disciplined focus on crafting software that is fast, resilient, and human-centered.
            </p>
            <p>
              Rather than treating AI as a buzzword, I specialize in incorporating machine learning models and NLP workflows directly into real product environments — from accessible mental healthcare assistants to intelligent workflow automation.
            </p>
            <p className="text-primary font-medium text-base">
              My engineering philosophy revolves around simplicity, transparent communication, and writing maintainable code that stands the test of production demands.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="surface-card lg:col-span-5 p-4 rounded-xl space-y-3.5"
          >
            <h3 className="text-xs font-mono uppercase tracking-wider text-muted font-semibold pb-1">
              Core Overview
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <FiCheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span><strong className="text-primary">Focus:</strong> React, Node.js, Express &amp; Applied AI</span>
              </li>
              <li className="flex items-start gap-2.5">
                <FiCheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span><strong className="text-primary">Location:</strong> Nairobi, Kenya (Available globally &amp; remote)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <FiCheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span><strong className="text-primary">Philosophy:</strong> Restrained design, clean modular architecture</span>
              </li>
              <li className="flex items-start gap-2.5">
                <FiCheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span><strong className="text-primary">Status:</strong> Open to full-time roles &amp; contract projects</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Skills Grouped by Category */}
        <div className="mb-20">
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-primary">
              Technical Stack &amp; Specializations
            </h3>
            <p className="text-sm text-secondary mt-1">
              Grouped tools and frameworks utilized across production-grade workflows.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {skillCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={cat.title}
                  variants={itemVariants}
                  className="surface-card p-4 rounded-xl hover:border-border-hover transition-colors duration-150"
                >
                  <div className="flex items-center gap-2.5 mb-4 text-primary font-semibold text-sm">
                    <span className="p-1.5 rounded-md bg-accent-subtle text-accent">
                      <Icon className="w-4 h-4" />
                    </span>
                    <span>{cat.title}</span>
                  </div>
                  <ul className="space-y-2">
                    {cat.skills.map((skill) => (
                      <li
                        key={skill}
                        className="text-xs font-mono text-secondary flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-border-hover"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Experience / Journey Timeline */}
        <div>
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-primary">
              Experience &amp; Milestones
            </h3>
            <p className="text-sm text-secondary mt-1">
              Key engineering chapters and hands-on production initiatives.
            </p>
          </div>

          <div className="border-l border-border/80 pl-6 sm:pl-8 space-y-9 relative ml-2">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative"
              >
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-2 h-2 rounded-full bg-surface border-2 border-accent" />
                <span className="text-xs font-mono font-medium text-accent block mb-1">
                  {item.period}
                </span>
                <h4 className="text-base font-semibold text-primary mb-1.5">
                  {item.role}
                </h4>
                <p className="text-sm text-secondary leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
