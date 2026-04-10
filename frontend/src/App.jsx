import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AetherHeader from './components/AetherHeader';
import Footer from './components/Footer';

// Pages
import HomeAether from './pages/HomeAether';
import Login from './pages/Login';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <div className="relative w-full min-h-screen text-white overflow-x-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
        <canvas aria-hidden="true" className="fixed inset-0 pointer-events-none z-0 w-full h-full" style={{ background: 'radial-gradient(at 50% 0%, rgb(27, 11, 59) 0%, rgb(7, 11, 28) 45%, rgb(5, 6, 11) 100%)' }}></canvas>
        <AetherHeader />
        
        <main className="relative z-10 w-full flex flex-col">
          <Routes>
            <Route path="/" element={<HomeAether />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
