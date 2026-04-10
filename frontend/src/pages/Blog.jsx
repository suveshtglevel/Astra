import React from 'react';

export default function Blog() {
  return (
    <div className="min-h-screen py-24 px-6 md:px-12 max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-serif text-gradient mb-4 text-center">Cosmic Blog & SEO</h1>
      <p className="text-brand-gray text-center mb-16">Explore insights about astrology, tarot, and alignment.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((idx) => (
          <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-brand-primary/50 transition-colors group cursor-pointer">
            <div className="h-48 bg-[#0d0a14] relative overflow-hidden flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-brand-secondary/20 to-brand-primary/20 group-hover:scale-105 transition-transform duration-500"></div>
              <span className="absolute text-brand-primary font-serif italic text-2xl font-bold opacity-30">ASTRA</span>
            </div>
            <div className="p-6">
              <span className="text-brand-secondary text-xs uppercase tracking-wider font-bold">Astrology 101</span>
              <h3 className="text-xl font-medium text-brand-light mt-2 mb-3 leading-snug group-hover:text-brand-primary transition-colors">
                Understanding your Moon Sign and emotional intelligence
              </h3>
              <p className="text-brand-gray text-sm line-clamp-3">
                While your Sun sign represents your core identity, your Moon sign governs your emotional landscape and how you react to the world subconsciously. Discover what it says about you.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
