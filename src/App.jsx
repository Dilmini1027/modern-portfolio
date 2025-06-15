import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <Router>
      <div className="flex">
        {/* Fixed Left Sidebar */}
        <Sidebar />

        {/* Main Content Area (shifted to the right) */}
        <div className="w-full px-4 py-6 ml-60 bg-background text-foreground">
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
