import { useState } from 'react';
import { ThemeToggle } from "./ThemeToggle";
import { FaBars, FaTimes } from 'react-icons/fa';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#achievements", label: "Achievements" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#certifications", label: "Certifications" },
    { href: "#projects", label: "Projects" },
    { href: "#blog", label: "Blog" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 text-foreground bg-panel shadow-lg md:hidden">
        <h1 className="text-2xl font-bold">
          <span className="text-red-500">D</span><span className="text-foreground">ilmini</span>
        </h1>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className="p-2 text-foreground hover:text-red-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div 
            className="absolute inset-0 bg-black/40"
            onClick={toggleMenu}
          />
          
          {/* Mobile Menu */}
          <nav className="absolute top-0 right-0 h-full w-64 bg-panel text-foreground shadow-lg transform transition-transform duration-300 ease-in-out">
            <div className="p-6 pt-20">
              <div className="space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={toggleMenu}
                    className="block text-lg hover:text-red-400 transition-colors py-2"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}

      {/* Spacer for mobile header */}
      <div className="h-16 md:hidden" />
    </>
  );
};

export default MobileNav;