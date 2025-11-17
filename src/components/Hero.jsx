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
        <h1 className="mb-4 text-4xl font-extrabold display-font md:text-5xl">
          Hi, I'm <span className="text-[var(--accent)]">Dilmini Shyawindi</span>
        </h1>

        <h2 className="mb-6 text-2xl ui-font font-semibold text-gray-300 md:text-3xl">
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

        <p className="max-w-xl mx-auto mb-6 text-lg ui-font leading-relaxed text-[var(--muted)] md:mx-0">
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
      className="text-gray-300 dark:text-gray-300 hover:text-black dark:hover:text-white"
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
        className="flex justify-center flex-1 mb-10 md:mb-0 relative"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* decorative top-right corner (rotated placement) */}
        <div className="hidden md:block absolute -top-12 -left-12 w-16 h-16 border-t-4 border-l-4 border-pink-600"></div>

        {/* decorative bottom-left corner (rotated placement) */}
        <div className="hidden md:block absolute -bottom-12 -right-12 w-16 h-16 border-b-4 border-r-4 border-pink-600"></div>

        <img
          src="/WhatsApp Image 2025-11-16 at 16.15.41_df640875.jpg"
          alt="Dilmini Senevirathne Profile"
          className="object-cover w-64 h-64 md:w-[420px] md:h-[420px] rounded-full border-[10px] border-pink-600 ring-4 ring-white shadow-[0_60px_120px_rgba(220,38,87,0.25)] transition-transform duration-300 hover:scale-105"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
