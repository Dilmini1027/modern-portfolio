import { ThemeToggle } from "./ThemeToggle";

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 z-50 flex flex-col h-full px-6 py-8 text-white bg-black shadow-lg w-72">

      {/* Header + Theme Toggle Row */}
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-bold">
          <span className="pl-6 text-red-500 ">D</span><span className="text-white">ilmini</span><br/>
        </h1>
        <ThemeToggle />
      </div>

      {/* Navigation Links */}
      <nav className="pl-6 space-y-5 text-lg"><br/>
        <a href="#hero" className="block hover:text-red-400">Home</a>
        <a href="#about" className="block hover:text-red-400">About</a>
        <a href="#skills" className="block hover:text-red-400">Skills</a>
        <a href="#education" className="block hover:text-red-400">Education</a>
        <a href="#projects" className="block hover:text-red-400">Projects</a>
        <a href="#contact" className="block hover:text-red-400">Contact</a>
      </nav>
      
    </aside>
  ); 
};

export default Sidebar;
