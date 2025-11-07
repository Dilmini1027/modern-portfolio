import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Hero = () => {
  return (
    <section id="hero" className="flex flex-col-reverse items-center justify-between min-h-screen px-6 py-12 transition-colors duration-300 bg-white md:flex-row md:px-16 dark:bg-gray-900">
      
      {/* Left Section */}
      <motion.div
        className="flex-1 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
          Hi, I'm <span className="text-indigo-500">Dilmini Shyawindi</span>
        </h1>

        <h2 className="mb-6 text-2xl text-gray-700 md:text-3xl dark:text-gray-300">
          <TypeAnimation
            sequence={[
              "Frontend Developer 🖥️", 2000,
              "Graphic Designer 🎨", 2000,
              "Web Developer 💻", 2000,
              "Creative Thinker ✨", 2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </h2>

        <p className="max-w-xl mx-auto mb-6 text-lg leading-relaxed text-gray-600 md:mx-0 dark:text-gray-400">
          Hi! I'm R.M. Dilmini Shyawindi Senevirathne, an undergraduate at the Institute of Technology, University of Moratuwa. I'm passionate about creating innovative web solutions and captivating digital art. Welcome to my portfolio showcasing my journey in technology and creativity.
        </p>

        {/* Resume Button */}
        <div className="flex items-center gap-4">
  {/* Download Resume Button */}
  <a
  href="./Dilmini Shyawindi's resume.pdf"
  download
  className="inline-block px-6 py-2 text-red-500 transition duration-300 border border-red-500 rounded-full hover:bg-red-500 hover:text-white"
>
  Download Resume Here
</a>


  {/* Social Media Icons */}
  <div className="flex gap-3">
    <a 
      href="https://github.com/Dilmini1027" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-black"
    >
      <i className="text-2xl fab fa-github"></i>
    </a>
    
    <a 
      href="http://www.linkedin.com/in/dilmini-shyawindi0926" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-blue-600 hover:text-blue-800"
    >
      <i className="text-2xl fab fa-linkedin"></i>
    </a>
    
    <a 
      href="https://www.facebook.com/dilmini.shyawindi" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-blue-500 hover:text-blue-700"
    >
      <i className="text-2xl fab fa-facebook"></i>
    </a>
  </div>
</div>
      </motion.div>

      {/* Right Section - Profile Image */}
      <motion.div
        className="flex justify-center flex-1 mb-10 md:mb-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/WhatsApp Image 2025-04-22 at 09.21.42_1fcb8aee.jpg"
          alt="Dilmini Senevirathne Profile"
          className="object-cover h-full transition-transform duration-300 shadow-lg w-80 border-blue-800-4 hover:scale-150"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
