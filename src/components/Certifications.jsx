import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaMedal, FaAward, FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa';

const Certifications = () => {
  const certifications = [
    {
      title: " Java Programming",
      issuer: "Great Learning Academy",
      date: "2025",
      type: "certification",
      icon: <FaCertificate className="text-blue-500" />,
      description: "Comprehensive certification covering Java fundamentals, object-oriented programming, and modern development practices.",
    
      skills: ["Java", "OOP", "Programming"]
    },
    {
      title: "PHP OOP with MySQL",
      issuer: "Udemy",
      date: "2025",
      type: "certification",
      icon: <FaCertificate className="text-yellow-500" />,
      description: " In-depth course on PHP object-oriented programming and MySQL database integration for web development.",
      skills: ["PHP", "MySQL", "Web Development"]
    },
    {
      title: "PHPGit, GitLab, GitHub Fundamentals for Software Developerst",
      issuer: "Udemy",
      date: "2025",
      type: "certification",
      icon: <FaCertificate className="text-purple-500" />,
      description: "Comprehensive course on version control systems using Git, GitLab, and GitHub.",
      skills: ["Version Control", "Collaboration", "Software Development"]
    },
    {
      title: " MERNExpert-DEV Diplomatic Certification (Pending)",
      issuer: "IDET — Institute of Digital Engineering Technology",
      date: "2025",
      type: "certification",
      icon: <FaCertificate className="text-green-500" />,
      description: " ",
      
      skills: ["MongoDB", "Express.js", "React.js", "Node.js with real world projects"]
    },
    {
      title: "Poster Design Competition-University Category",
      issuer: " EcoNexus Green Club – Gampaha Wickramarachchi University of Indigenous Medicine",
      date: "2025",
      type: "award",
      icon: <FaAward className="text-pink-500" />,
      description: "2nd Place in the University Category of the World Environment Day Poster Competition.",
      skills: ["Painting", "Creative Thinking"]
    },
    {
      title: "Poseter Design Competition",
      issuer: "Green Pulse Society, University of Ruhuna.",
      date: "2025",
      type: "medal",
      icon: <FaMedal className="text-orange-500" />,
      description: "Most Popular Poster Award at WIOSEC 2025 – Video and Poster Competition.",
      
      skills: ["Poster Design", "Creativity"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="certifications" className="w-full px-6 py-16 mx-auto md:px-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <h2 className="mb-12 text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-red-500">
          Certifications & Awards
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative overflow-hidden bg-white rounded-xl dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              {/* Certificate Type Badge */}
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                  cert.type === 'certification' 
                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' 
                    : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                }`}>
                  {cert.type === 'certification' ? 'Certificate' : 'Award'}
                </span>
              </div>

              <div className="p-6">
                {/* Icon and Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl">
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 mb-3 text-sm text-gray-500 dark:text-gray-400">
                  <FaCalendarAlt className="text-xs" />
                  <span>{cert.date}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills Tags */}
                {cert.skills && cert.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                
              </div>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50 dark:to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Continuously learning and growing in the field of technology
          </p>
          <a
            href="https://www.linkedin.com/in/dilmini-shyawindi0926"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
          >
            <FaExternalLinkAlt />
            View All Credentials on LinkedIn
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Certifications;