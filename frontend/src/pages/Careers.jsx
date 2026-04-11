import React from 'react';
import useSEO from '../hooks/useSEO';

export default function Careers() {
  useSEO('Careers | Join the Cosmos');

  return (
    <div className="min-h-[85vh] max-w-4xl mx-auto px-6 py-24 relative z-10 pt-32">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Careers</h1>
        <p className="text-lg text-[#E7C36A] font-medium tracking-wide">Shape the cosmic future with us</p>
      </div>
      
      <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
        <h2 className="text-2xl text-white font-serif mb-4">Open Roles</h2>
        <p className="text-white/70 leading-relaxed mb-6">
          We are currently a small, aligned team of individuals. If you believe your skills match the vibrations of Klue, check out our listings below.
        </p>
        <div className="space-y-4">
          <div className="p-6 border border-white/10 rounded-xl hover:border-[#E7C36A] transition-colors cursor-pointer group">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg text-white font-medium group-hover:text-[#E7C36A] transition-colors">Senior Frontend Alchemist</h3>
                <p className="text-sm text-white/50 mt-1">Remote • Full-time</p>
              </div>
              <span className="text-[#E7C36A]">Apply →</span>
            </div>
          </div>
          <div className="p-6 border border-white/10 rounded-xl hover:border-[#E7C36A] transition-colors cursor-pointer group">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg text-white font-medium group-hover:text-[#E7C36A] transition-colors">Astrology Engine Data Scientist</h3>
                <p className="text-sm text-white/50 mt-1">Remote • Full-time</p>
              </div>
              <span className="text-[#E7C36A]">Apply →</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
