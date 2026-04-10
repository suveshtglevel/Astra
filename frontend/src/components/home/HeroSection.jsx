import React from 'react';
import CelestialChartFull from '../ui/CelestialChartFull';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center z-10 overflow-hidden px-8">
      <div aria-hidden="true" className="pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-60" style={{ background: 'radial-gradient(rgba(20, 10, 43, 0.8) 0%, transparent 70%)', filter: 'blur(60px)' }}></div>
        <div className="absolute top-1/4 left-[8%] w-[320px] h-[320px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(181, 150, 255, 0.07) 0%, transparent 70%)', filter: 'blur(50px)' }}></div>
        <div className="absolute top-[30%] right-[6%] w-[280px] h-[280px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(231, 195, 106, 0.05) 0%, transparent 70%)', filter: 'blur(45px)' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto w-full pt-28 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        <div>
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full mb-10 border" style={{ background: 'rgba(231, 195, 106, 0.05)', borderColor: 'rgba(231, 195, 106, 0.18)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E7C36A] animate-pulse" aria-hidden="true"></span>
            <span className="text-[#E7C36A]/70 uppercase" style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '10px', letterSpacing: '0.16em' }}>Moon in Scorpio · Friday, April 10</span>
          </div>
          
          <h1 className="mb-6" style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, lineHeight: 1.05 }}>
            <span className="block text-[clamp(40px,6.5vw,72px)] text-white/90">Hello,</span>
            <span className="block text-[clamp(40px,6.5vw,72px)]" style={{ background: 'linear-gradient(110deg, rgb(181, 150, 255) 0%, rgb(139, 124, 248) 40%, rgb(231, 195, 106) 90%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Celestial Soul.</span>
          </h1>
          
          <p className="mb-3 text-[clamp(20px,2.6vw,28px)] text-white/55" style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 500 }}>Tonight's sky is loud. Stay soft.</p>
          <p className="text-[16px] text-white/38 leading-[1.7] max-w-md mb-12" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>Your birth chart is a map of the sky at the exact moment you arrived. Aether decodes it — daily, in real time.</p>
          
          <div className="flex flex-wrap gap-3">
            <button className="flex items-center gap-2.5 px-8 py-3.5 rounded-xl text-[#05060B] font-semibold" tabIndex="0" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '0.04em', background: 'rgb(231, 195, 106)' }}>
              <span>View My Chart</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2.5 px-8 py-3.5 rounded-xl border text-white/65 hover:text-white/90 transition-colors duration-200" tabIndex="0" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 500, letterSpacing: '0.04em', borderColor: 'rgba(255, 255, 255, 0.1)', background: 'rgba(255, 255, 255, 0.03)' }}>
              <span>Explore Horoscopes</span>
            </button>
          </div>
        </div>
        
        <div className="relative hidden lg:flex items-center justify-center">
          <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
            <div className="w-[480px] h-[480px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(181, 150, 255, 0.08) 0%, transparent 65%)', filter: 'blur(40px)' }}></div>
          </div>
          <div className="relative w-[460px] h-[460px]">
            <CelestialChartFull />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/18 uppercase" style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '9px', letterSpacing: '0.25em' }}>Scroll</span>
        <ChevronDown className="w-4 h-4 text-white/18" />
      </div>
    </section>
  );
}
