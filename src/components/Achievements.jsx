import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaGraduationCap, FaProjectDiagram, FaCertificate } from 'react-icons/fa';

const Achievements = () => {
  const achievements = [
    {
      icon: <FaCode className="text-3xl text-blue-500" />,
      number: "5+",
      label: "Projects Completed",
      description: "Full-stack applications and creative solutions"
    },
    {
      icon: <FaGraduationCap className="text-3xl text-green-500" />,
      number: "5+",
      label: "Certifications Earned",
      description: " React.js Certification, PHP OOP with MySQL"
    },
    {
      icon: <FaProjectDiagram className="text-3xl text-purple-500" />,
      number: "5+",
      label: "Technologies Mastered",
      description: "React, Node.js, MySQL, Java, Python"
    },
    {
      icon: <FaCertificate className="text-3xl text-orange-500" />,
      number: "100%",
      label: "Client Satisfaction",
      description: "Delivered all projects on time"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="achievements" className="w-full px-6 py-16 mx-auto md:px-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <h2 className="mb-12 text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500">
          Achievements & Metrics
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 text-center transition-all duration-300 rounded-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-lg hover:shadow-2xl hover:scale-105"
            >
              <div className="flex justify-center mb-4">
                {achievement.icon}
              </div>
              <motion.h3
                className="mb-2 text-3xl font-bold text-gray-800 dark:text-white"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              >
                {achievement.number}
              </motion.h3>
              <h4 className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
                {achievement.label}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Achievements;