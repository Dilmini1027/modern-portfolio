import { useState } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { motion, AnimatePresence } from 'framer-motion';

export const Projects = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Web App', 'Art', 'Tool'];

  const projects = [
    {
      title: 'Inventory Management System',
      description: 'A full-stack web app to manage stock, barcodes, delivery, and expiry tracking.',
      link: '#',
      image: '/images/inventory.jpg',
      category: 'Web App',
    },
    {
      title: 'Manipulation Art',
      description: 'Conceptual digital art using Photoshop and storytelling through visuals.',
      link: '#',
      image: '/images/art.png',
      category: 'Art',
    },
    {
      title: 'Calculator',
      description: 'A minimalist Python calculator with clean UI and keyboard support.',
      link: '#',
      image: '/images/calculator.png',
      category: 'Tool',
    },
  ];

  const filteredProjects =
    filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="w-full min-h-screen px-6 pt-10 pb-20 mx-auto text-center md:px-12">
  <h2 className="mb-12 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-blue-500">
  Projects</h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {categories.map(category => (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            key={category}
            onClick={() => setFilter(category)}
            className={`px-5 py-2 rounded-full transition text-sm font-medium shadow 
              ${filter === category ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-red-400 hover:text-white'}`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 md:grid-cols-3">
        <AnimatePresence>
          {filteredProjects.map(project => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};
