import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PasswordProtection from './components/PasswordProtection';
import Home from './pages/Home';
import WhatIsVibeCoding from './pages/WhatIsVibeCoding';
import Examples from './pages/Examples';
import GettingStarted from './pages/GettingStarted';
import Library from './pages/Library';
import Evolution from './pages/Evolution';

function App() {
  return (
    <Router basename="/vibe-coding-101">
      <PasswordProtection>
        <div className="min-h-screen bg-neon-dark">
          <main className="pt-16">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/what-is-vibe-coding" element={<WhatIsVibeCoding />} />
                <Route path="/examples" element={<Examples />} />
                <Route path="/getting-started" element={<GettingStarted />} />
                <Route path="/library" element={<Library />} />
                <Route path="/evolution" element={<Evolution />} />
              </Routes>
            </AnimatePresence>
          </main>
        </div>
      </PasswordProtection>
    </Router>
  );
}

export default App;
