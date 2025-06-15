import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import { About } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Education } from "./Education";
import { Contact } from "../components/Contact";

export const Home = () => {
  return (
    <div className="relative flex min-h-screen text-gray-900 transition-colors bg-white dark:bg-slate-900 dark:text-white">
      
      {/* 🌠 Animated stars background (only in dark mode) */}
      <div className="hidden stars-effect dark:block">
        {Array.from({ length: 40 }).map((_, i) => {
          const size = Math.random() * 10 + 6; // 3px–7px
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

      {/* Sidebar */}
      <Sidebar />

      {/* Main content shifted to right (ml-60 = sidebar width) */}
      <div className="relative z-10 w-full ml-60">
        <main className="px-6 pt-8 space-y-24 md:px-12">
          <section id="hero"><Hero /></section>
          <section id="about"><About /></section>
          <section id="skills"><Skills /></section>
          <section id="education"><Education /></section>
          <section id="projects"><Projects /></section>
          <section id="contact"><Contact /></section>
        </main>

        {/* Footer */}
        <footer className="py-6 text-sm text-center text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} R.M.D.S. Senevirathne. All rights reserved.
        </footer>
      </div>
    </div>
  );
};
