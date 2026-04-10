import React from 'react';
import { Star, Menu } from 'lucide-react';

export default function AetherHeader() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500" style={{ height: '72px', background: 'transparent', backdropFilter: 'none', borderBottom: '1px solid transparent' }}>
      <div className="max-w-7xl mx-auto px-8 h-full flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group" aria-label="Aether — go to homepage">
          <div className="relative w-7 h-7 flex items-center justify-center">
            <Star className="w-5 h-5 text-[#E7C36A]" style={{ color: 'rgba(231,195,106,0.15)' }} />
            <span className="absolute inset-0 rounded-full bg-[#E7C36A]/8 blur-lg group-hover:bg-[#E7C36A]/16 transition-all duration-300" aria-hidden="true"></span>
          </div>
          <span className="text-white/90 uppercase tracking-widest" style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, fontSize: '15px', letterSpacing: '0.12em' }}>Aether</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#horoscope" className="relative group py-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 500, letterSpacing: '0.04em' }}>
            <span className="text-white/48 group-hover:text-white/90 transition-colors duration-200">Horoscope</span>
            <span aria-hidden="true" className="absolute bottom-0 left-0 h-[1.5px] w-0 group-hover:w-full transition-all duration-300 ease-out rounded-full" style={{ background: 'linear-gradient(90deg, rgb(231, 195, 106), rgba(231, 195, 106, 0))', boxShadow: 'rgba(231, 195, 106, 0.5) 0px 0px 8px' }}></span>
          </a>
          <a href="#charts" className="relative group py-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 500, letterSpacing: '0.04em' }}>
            <span className="text-white/48 group-hover:text-white/90 transition-colors duration-200">Charts</span>
            <span aria-hidden="true" className="absolute bottom-0 left-0 h-[1.5px] w-0 group-hover:w-full transition-all duration-300 ease-out rounded-full" style={{ background: 'linear-gradient(90deg, rgb(231, 195, 106), rgba(231, 195, 106, 0))', boxShadow: 'rgba(231, 195, 106, 0.5) 0px 0px 8px' }}></span>
          </a>
          <a href="#compatibility" className="relative group py-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 500, letterSpacing: '0.04em' }}>
            <span className="text-white/48 group-hover:text-white/90 transition-colors duration-200">Compatibility</span>
            <span aria-hidden="true" className="absolute bottom-0 left-0 h-[1.5px] w-0 group-hover:w-full transition-all duration-300 ease-out rounded-full" style={{ background: 'linear-gradient(90deg, rgb(231, 195, 106), rgba(231, 195, 106, 0))', boxShadow: 'rgba(231, 195, 106, 0.5) 0px 0px 8px' }}></span>
          </a>
          <a href="#premium" className="relative group py-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 500, letterSpacing: '0.04em' }}>
            <span className="text-white/48 group-hover:text-white/90 transition-colors duration-200">Premium</span>
            <span aria-hidden="true" className="absolute bottom-0 left-0 h-[1.5px] w-0 group-hover:w-full transition-all duration-300 ease-out rounded-full" style={{ background: 'linear-gradient(90deg, rgb(231, 195, 106), rgba(231, 195, 106, 0))', boxShadow: 'rgba(231, 195, 106, 0.5) 0px 0px 8px' }}></span>
          </a>
        </div>
        
        <div className="hidden md:flex items-center gap-3">
          <button className="text-white/40 hover:text-white/80 transition-colors duration-200 px-3 py-2" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 500, letterSpacing: '0.05em' }}>Sign In</button>
          <button className="px-5 py-2.5 rounded-xl border text-[#E7C36A] transition-all duration-180" tabIndex="0" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '0.06em', background: 'rgba(231, 195, 106, 0.07)', borderColor: 'rgba(231, 195, 106, 0.25)' }}>Get Started</button>
        </div>
        
        <button className="md:hidden p-2 text-white/60 hover:text-white transition-colors" aria-label="Toggle navigation menu">
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
}
