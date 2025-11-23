import { useState } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { motion, AnimatePresence } from 'framer-motion';

export const Projects = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Web App', 'Art', 'Tool'];

  const projects = [
    {
      title: 'Land Acquisition Management System',
      description: 'A full-stack web app to manage land acquisition processes.',
      link: 'https://github.com/sashith06/Land_Aquisition_Management_System.git',
      image: './WhatsApp Image 2025-11-24 at 00.45.29_77e09563.jpg',
      category: 'Web App',
    },
    {
      title: 'BBQ restaurant webapp',
      description: 'A frontend web app to track orders and manage menu items.',
      link: 'https://bbq-restaurant-app-49ta.vercel.app/',
      image: './Screenshot 2025-11-23 231622.png',
      category: 'Web App',
    },

    {
      title: 'Blood Donation Platform',
      description: 'A full-stack web app to manage blood donation processes.',
      link: 'https://github.com/Dilmini1027/Blood-Donation-Platform.git',
      image: '../WhatsApp Image 2025-06-14 at 21.18.15_c4db2e7d.jpg',
      category: 'Web App',
    },

    {
      title: 'E-commerce Food Market',
      description: 'A full-stack web app to manage stock, barcodes, delivery, and expiry tracking.',
      link: 'https://github.com/Dilmini1027/Online-shop.git',
      image: '../WhatsApp Image 2025-06-14 at 21.18.15_c4db2e7d.jpg',
      category: 'Web App',
    },

    {
      title: 'Inventory Management System',
      description: 'A full-stack web app to manage stock, barcodes, delivery, and expiry tracking.',
      link: 'https://github.com/Dilmini1027/inventory-management-food-market.git',
      image: '../WhatsApp Image 2025-06-14 at 21.18.15_c4db2e7d.jpg',
      category: 'Web App',
    },
    {
      title: 'Manipulation Art',
      description: 'Conceptual digital art using Photoshop and storytelling through visuals.',
      link: 'https://github.com/Dilmini1027/photoshop.git',
      image: '../22it0531- 03. Photo Manipulation & Editing(3).png',
      category: 'Art',
    },
    {
      title: 'Calculator',
      description: 'A minimalist Python calculator with clean UI and keyboard support.',
      link: 'https://github.com/Dilmini1027/calculator.git',
      image: '../Capture1.png',
      category: 'Tool',
    },
    {
      title: 'Modern ToDo App',
      description: 'A featured- full project to handle tasks with motivated background music.',
      link: 'https://github.com/Dilmini1027/My-to-do-app.git',
      image: '../WhatsApp Image 2025-06-16 at 22.01.27_fe6e223f.jpg',
      category: 'Tool',
    },
    

    {
      title: 'BMI Calculator',
      description: 'A full-stack web app to calculate Body Mass Index (BMI) and provide health recommendations.',
      link: 'https://github.com/Dilmini1027/BMI-calculator.git',
      image: '../WhatsApp Image 2025-06-16 at 22.01.27_fe6e223f.jpg',
      category: 'Tool',
    },

     {
      title: 'Portrait Art',
      description: 'Coverting photos into artistic portraits. 100% handwork',
      link: 'https://www.facebook.com/profile.php?id=61554414223518',
      image: '../475849489_122185541186147140_2312287385030872675_n.jpg',
      category: 'Art',
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