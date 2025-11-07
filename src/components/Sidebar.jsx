import { ThemeToggle } from "./ThemeToggle";

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 z-50 flex-col h-full px-6 py-8 text-white bg-black shadow-lg w-72 overflow-y-auto hidden md:flex">

      {/* Header + Theme Toggle Row */}
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-bold">
          <span className="pl-6 text-red-500 ">D</span><span className="text-white">ilmini</span><br/>
        </h1>
        <ThemeToggle />
      </div>

      {/* Navigation Links */}
      <nav className="pl-6 space-y-4 text-lg"><br/>
        <a href="#hero" className="block hover:text-red-400 transition-colors">Home</a>
        <a href="#about" className="block hover:text-red-400 transition-colors">About</a>
        <a href="#achievements" className="block hover:text-red-400 transition-colors">Achievements</a>
        <a href="#skills" className="block hover:text-red-400 transition-colors">Skills</a>
        <a href="#education" className="block hover:text-red-400 transition-colors">Education</a>
        <a href="#certifications" className="block hover:text-red-400 transition-colors">Certifications</a>
        <a href="#projects" className="block hover:text-red-400 transition-colors">Projects</a>
         <a href="#contact" className="block hover:text-red-400 transition-colors">Contact</a>
      </nav>
      
    </aside>
  ); 
};

export default Sidebar;
