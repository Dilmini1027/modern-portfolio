import Hero from "../components/Hero";
import { About } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Education } from "./Education";
import { Contact } from "../components/Contact";
import Achievements from "../components/Achievements";

import Certifications from "../components/Certifications";

import { FadeInOnScroll, FloatingElements } from "../components/ScrollAnimations";

export const Home = () => {
  return (
    <div className="relative min-h-screen text-gray-900 transition-colors bg-white dark:bg-slate-900 dark:text-white">
      
      {/* 🌠 Animated stars background (only in dark mode) */}
      <div className="fixed inset-0 hidden stars-effect dark:block pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => {
          const size = Math.random() * 10 + 6; // 6px–16px
          const left = Math.random() * 100; // % from left
          const delay = Math.random() * 10; // seconds
          const duration = 12 + Math.random() * 20; // seconds

          return (
            <span
              key={i}
              style={{
                left: `${left}%`,
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
                width: `${size}px`,
                height: `${size}px`,
              }}
            ></span>
          );
        })}
      </div>

      {/* Floating Elements */}
      <FloatingElements />

      {/* Main content */}
      <div className="relative z-10 w-full">
        <main className="px-6 pt-8 space-y-24 md:px-12">
          <FadeInOnScroll direction="up">
            <section id="hero"><Hero /></section>
          </FadeInOnScroll>
          
          <FadeInOnScroll direction="left" delay={0.2}>
            <section id="about"><About /></section>
          </FadeInOnScroll>
          
          <FadeInOnScroll direction="up" delay={0.1}>
            <section id="achievements"><Achievements /></section>
          </FadeInOnScroll>
          
          <FadeInOnScroll direction="right" delay={0.2}>
            <section id="skills"><Skills /></section>
          </FadeInOnScroll>
          
          <FadeInOnScroll direction="up" delay={0.1}>
            <section id="education"><Education /></section>
          </FadeInOnScroll>
          
          <FadeInOnScroll direction="left" delay={0.2}>
            <section id="certifications"><Certifications /></section>
          </FadeInOnScroll>
          
          <FadeInOnScroll direction="up" delay={0.1}>
            <section id="projects"><Projects /></section>
          </FadeInOnScroll>
          
          
          <FadeInOnScroll direction="up" delay={0.2}>
            <section id="contact"><Contact /></section>
          </FadeInOnScroll>
        </main>

        {/* Footer */}
        <footer className="py-6 text-sm text-center text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} R.M.D.S. Senevirathne. All rights reserved.
        </footer>
      </div>
    </div>
  );
};
