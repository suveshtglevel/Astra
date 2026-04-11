import React, { useState, useEffect } from 'react';
import { Star, Menu, Volume2, VolumeX } from 'lucide-react';
import { Link } from 'react-router-dom';
import useAmbientAudio from '../hooks/useAmbientAudio';

export default function AetherHeader() {
  const { isPlaying, toggleAudio } = useAmbientAudio();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500" 
         style={{ 
           height: '72px', 
           background: isScrolled ? 'rgba(5, 6, 11, 0.85)' : 'transparent', 
           backdropFilter: isScrolled ? 'blur(16px)' : 'none', 
           WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
           borderBottom: isScrolled ? '1px solid rgba(231,195,106,0.15)' : '1px solid transparent',
           boxShadow: isScrolled ? '0 4px 30px rgba(0, 0, 0, 0.5)' : 'none'
         }}>
      <div className="max-w-7xl mx-auto px-8 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group" aria-label="Klue — go to homepage">
          <div className="relative w-7 h-7 flex items-center justify-center">
            <Star className="w-5 h-5 text-[#E7C36A]" strokeWidth={1.5} />
            <span className="absolute inset-0 rounded-full bg-[#E7C36A]/20 blur-lg group-hover:bg-[#E7C36A]/40 transition-all duration-300" aria-hidden="true"></span>
          </div>
          <span className="text-[#E7C36A] uppercase tracking-widest font-serif font-bold text-lg drop-shadow-[0_0_8px_rgba(231,195,106,0.3)]">Klue</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="relative group py-1 text-xs uppercase tracking-widest">
            <span className="text-white/48 group-hover:text-white/90 transition-colors duration-200">Home</span>
            <span aria-hidden="true" className="absolute bottom-0 left-0 h-[1.5px] w-0 group-hover:w-full transition-all duration-300 ease-out rounded-full" style={{ background: 'linear-gradient(90deg, rgb(231, 195, 106), rgba(231, 195, 106, 0))', boxShadow: 'rgba(231, 195, 106, 0.5) 0px 0px 8px' }}></span>
          </Link>
          <Link to="/dashboard" className="relative group py-1 text-xs uppercase tracking-widest">
            <span className="text-white/48 group-hover:text-white/90 transition-colors duration-200">Dashboard</span>
            <span aria-hidden="true" className="absolute bottom-0 left-0 h-[1.5px] w-0 group-hover:w-full transition-all duration-300 ease-out rounded-full" style={{ background: 'linear-gradient(90deg, rgb(231, 195, 106), rgba(231, 195, 106, 0))', boxShadow: 'rgba(231, 195, 106, 0.5) 0px 0px 8px' }}></span>
          </Link>
          <Link to="/charts" className="relative group py-1 text-xs uppercase tracking-widest">
            <span className="text-white/48 group-hover:text-white/90 transition-colors duration-200">Charts</span>
            <span aria-hidden="true" className="absolute bottom-0 left-0 h-[1.5px] w-0 group-hover:w-full transition-all duration-300 ease-out rounded-full" style={{ background: 'linear-gradient(90deg, rgb(231, 195, 106), rgba(231, 195, 106, 0))', boxShadow: 'rgba(231, 195, 106, 0.5) 0px 0px 8px' }}></span>
          </Link>
          <Link to="/compatibility" className="relative group py-1 text-xs uppercase tracking-widest">
            <span className="text-white/48 group-hover:text-white/90 transition-colors duration-200">Compatibility</span>
            <span aria-hidden="true" className="absolute bottom-0 left-0 h-[1.5px] w-0 group-hover:w-full transition-all duration-300 ease-out rounded-full" style={{ background: 'linear-gradient(90deg, rgb(231, 195, 106), rgba(231, 195, 106, 0))', boxShadow: 'rgba(231, 195, 106, 0.5) 0px 0px 8px' }}></span>
          </Link>
          <Link to="/premium" className="relative group py-1 text-xs uppercase tracking-widest">
            <span className="text-white/48 group-hover:text-white/90 transition-colors duration-200">Premium</span>
            <span aria-hidden="true" className="absolute bottom-0 left-0 h-[1.5px] w-0 group-hover:w-full transition-all duration-300 ease-out rounded-full" style={{ background: 'linear-gradient(90deg, rgb(231, 195, 106), rgba(231, 195, 106, 0))', boxShadow: 'rgba(231, 195, 106, 0.5) 0px 0px 8px' }}></span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-3">
          <button 
            onClick={toggleAudio}
            className="p-2 text-white/40 hover:text-[#E7C36A] transition-colors duration-200"
            aria-label="Toggle ambient audio"
            title="Toggle Ambient Audio"
          >
            {isPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
          <Link to="/login" className="text-white/40 hover:text-white/80 transition-colors duration-200 px-3 py-2 text-xs uppercase tracking-widest">Sign In</Link>
          <Link to="/register" className="px-5 py-2.5 rounded-xl border text-[#E7C36A] transition-all duration-180 text-xs uppercase tracking-widest" tabIndex="0" style={{ background: 'rgba(231, 195, 106, 0.07)', borderColor: 'rgba(231, 195, 106, 0.25)' }}>Get Started</Link>
        </div>
        
        <button className="md:hidden p-2 text-white/60 hover:text-white transition-colors" aria-label="Toggle navigation menu">
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
}
