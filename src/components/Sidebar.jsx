import { ThemeToggle } from "./ThemeToggle";
import { useContext } from 'react';
import { PageContext } from '../contexts/PageContext';

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 z-50 flex-col h-full px-6 py-8 text-foreground bg-panel shadow-lg w-72 overflow-y-auto hidden md:flex">

      {/* Header + Theme Toggle Row */}
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-bold">
          <span className="pl-6 text-red-500">R</span><span className="text-foreground"> M </span><span className="text-red-500">D</span>
        </h1>
        <ThemeToggle />
      </div>

      {/* Navigation Links (use context to switch visible section without scrolling) */}
      <nav className="pl-6 space-y-4 text-lg"><br/>
        <NavItem name="Home" id="hero" />
        <NavItem name="About" id="about" />
        <NavItem name="Achievements" id="achievements" />
        <NavItem name="Skills" id="skills" />
        <NavItem name="Education" id="education" />
        <NavItem name="Certifications" id="certifications" />
        <NavItem name="Projects" id="projects" />
        <NavItem name="Contact" id="contact" />
      </nav>
      
    </aside>
  ); 
};

export default Sidebar;

function NavItem({ name, id }) {
  const { setCurrent, current } = useContext(PageContext);
  const active = current === id;
  return (
    <button
      onClick={() => setCurrent(id)}
      className={`block text-left w-full ${active ? 'text-red-400' : ''} hover:text-red-400 transition-colors py-1`}
    >
      {name}
    </button>
  );
}
