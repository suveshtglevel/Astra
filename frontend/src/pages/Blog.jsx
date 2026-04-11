import React from 'react';
import useSEO from '../hooks/useSEO';

export default function Blog() {
  useSEO('Blog');
  return (
    <div className="min-h-[85vh] py-24 px-6 md:px-12 max-w-6xl mx-auto relative z-10 pt-32">
      <h1 className="text-4xl md:text-5xl font-serif text-white mb-4 text-center">Cosmic Blog & Insights</h1>
      <p className="text-[#E7C36A] text-center mb-16 font-medium tracking-wide">Explore insights about astrology, tarot, and alignment.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((idx) => (
          <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#E7C36A]/50 transition-colors group cursor-pointer">
            <div className="h-48 bg-[#0b0c10] relative overflow-hidden flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-[#E7C36A]/10 to-[#140A2B]/80 group-hover:scale-105 transition-transform duration-500"></div>
              <span className="absolute text-[#E7C36A] font-serif italic text-2xl font-bold opacity-30">Klue</span>
            </div>
            <div className="p-6">
              <span className="text-[#E7C36A]/80 text-xs uppercase tracking-wider font-bold">Astrology 101</span>
              <h3 className="text-xl font-medium text-white mt-2 mb-3 leading-snug group-hover:text-[#E7C36A] transition-colors">
                Understanding your Moon Sign and emotional intelligence
              </h3>
              <p className="text-white/50 text-sm line-clamp-3">
                While your Sun sign represents your core identity, your Moon sign governs your emotional landscape and how you react to the world subconsciously. Discover what it says about you.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
