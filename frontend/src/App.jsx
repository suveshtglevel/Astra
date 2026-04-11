import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AetherHeader from './components/AetherHeader';
import Footer from './components/Footer';

// Pages
import HomeAether from './pages/HomeAether';
import Dashboard from './pages/Dashboard';
import Charts from './pages/Charts';
import Compatibility from './pages/Compatibility';
import Premium from './pages/Premium';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Careers from './pages/Careers';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import PNC from './pages/PNC';
import Blog from './pages/Blog';

// UI Upgrades
import CanvasStarfield from './components/ui/CanvasStarfield';
import CustomCursor from './components/ui/CustomCursor';
import PageTransition from './components/ui/PageTransition';

import AppBootLoader from './components/ui/AppBootLoader';

function AppContent() {
  const location = useLocation();

  return (
    <div className="relative w-full min-h-screen text-white overflow-x-hidden flex flex-col">
      <CanvasStarfield />
      <CustomCursor />
      <AetherHeader />
      
      <main className="relative z-10 w-full flex-grow flex flex-col">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><HomeAether /></PageTransition>} />
            <Route path="/dashboard" element={<PageTransition><Dashboard /></PageTransition>} />
            <Route path="/charts" element={<PageTransition><Charts /></PageTransition>} />
            <Route path="/compatibility" element={<PageTransition><Compatibility /></PageTransition>} />
            <Route path="/premium" element={<PageTransition><Premium /></PageTransition>} />
            <Route path="/login" element={<PageTransition><Login /></PageTransition>} />
            <Route path="/register" element={<PageTransition><Register /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/careers" element={<PageTransition><Careers /></PageTransition>} />
            <Route path="/faq" element={<PageTransition><FAQ /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="/terms" element={<PageTransition><Terms /></PageTransition>} />
            <Route path="/privacy" element={<PageTransition><Privacy /></PageTransition>} />
            <Route path="/pnc" element={<PageTransition><PNC /></PageTransition>} />
            <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

function App() {
  const [hasBooted, setHasBooted] = React.useState(false);

  return (
    <Router>
      {!hasBooted && <AppBootLoader onComplete={() => setHasBooted(true)} />}
      <AppContent />
    </Router>
  );
}

export default App;
