import React from 'react';
import ProjectSlider from './ProjectSlider';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'MediChatAI',
    description: 'An AI-powered mental health assistant providing a safe space for users to express their feelings and get support. Built with React and a custom AI model.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'AI/NLP'],
    github: 'https://github.com/MohamedNoorA/medichat-ai.git',
    live: 'https://medichatai.vercel.app/',
    image: '/medichat-ai.png',
  },
  {
    id: 2,
    title: 'LexAI',
    description: 'An AI-powered CV builder that helps users create professional and ATS-friendly resumes in minutes. Features smart suggestions and template customization.',
    technologies: ['React', 'Tailwind CSS', 'Firebase', 'OpenAI API'],
    github: 'https://github.com/LexResumeAi/frontend.git',
    live: '#', // Placeholder for live link if not available
    image: 'https://via.placeholder.com/600x400/FF0000/FFFFFF?text=LexAI', // Placeholder image
  },
  {
    id: 3,
    title: 'Math Game',
    description: 'This is a game for kids that will make the kid be good in math basic Applications.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/MohamedNoorA/math-game.git',
    live: '#',
    image: 'https://via.placeholder.com/600x400/0000FF/FFFFFF?text=Math+Game',
  },
  {
    id: 4,
    title: 'Law Firm Website',
    description: 'Coming Soon: A website that helps clients and advocates for easy communication and appointment.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    github: '#',
    live: null,
    image: 'https://via.placeholder.com/600x400/00FF00/FFFFFF?text=Law+Firm+Website',
  },
  {
    id: 5,
    title: '3D Racing Game',
    description: 'A 3D racing game developed using Python.',
    technologies: ['Python', 'Pygame', '3D Graphics'],
    github: 'https://github.com/MohamedNoorA/racing-game.git',
    live: null,
    image: 'https://via.placeholder.com/600x400/FF0000/FFFFFF?text=Racing+Game',
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="bg-background flex-grow flex items-center justify-center"
    >
      <ProjectSlider projects={projects} />
    </motion.section>
  );
};

export default Projects;