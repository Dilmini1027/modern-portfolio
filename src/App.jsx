import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import MobileNav from './components/MobileNav';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        {/* Desktop Sidebar */}
        <Sidebar />
        
        {/* Mobile Navigation */}
        <MobileNav />

        {/* Main Content Area */}
        <div className="flex-1 ml-0 md:ml-72 bg-background text-foreground">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
