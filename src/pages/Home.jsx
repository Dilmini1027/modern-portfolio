import Hero from "../components/Hero";
import { About } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Education } from "./Education";
import { Contact } from "../components/Contact";
import Achievements from "../components/Achievements";

import Certifications from "../components/Certifications";

import { FloatingElements } from "../components/ScrollAnimations";
import { useContext } from 'react';
import { PageContext } from '../contexts/PageContext';

export const Home = () => {
  const { current } = useContext(PageContext);

  const sectionMap = {
    hero: <Hero />, 
    about: <About />, 
    achievements: <Achievements />, 
    skills: <Skills />, 
    education: <Education />, 
    certifications: <Certifications />, 
    projects: <Projects />, 
    contact: <Contact />
  };

  return (
    <div className="relative min-h-screen text-foreground transition-colors bg-app">
      <FloatingElements />
      <div className="relative z-10 w-full min-h-screen">
        <div className="w-full">
          <div className="w-full overflow-auto max-h-screen p-6 md:p-12">
            {/* Render only the current section; this container scrolls when content overflows */}
            <div className="w-full">
              {sectionMap[current]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
