import React from 'react';
import { Download } from 'lucide-react';
import BlueprintSection from '../components/home/BlueprintSection';
import useSEO from '../hooks/useSEO';

export default function Charts() {
  useSEO('Birth Chart');
  return (
    <div className="min-h-screen pt-32 pb-12 w-full max-w-[1440px] mx-auto flex flex-col items-center">
      <BlueprintSection />

      {/* Shareable Graphic Section */}
      <div className="w-full max-w-4xl mx-auto mt-24 px-8 pb-32 flex flex-col items-center">
        <h3 className="text-3xl font-serif text-white mb-3">Share Your Blueprint</h3>
        <p className="text-white/50 mb-16 text-center max-w-lg leading-relaxed">
          The cosmos is meant to be shared. Save your cosmic signature graphic formatted perfectly for Instagram Stories.
        </p>

        {/* The Graphic (9:16 aspect ratio) */}
        <div id="share-graphic" className="relative w-full max-w-[340px] aspect-[9/16] bg-[#0A0710] border border-[#E7C36A]/30 rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(231,195,106,0.15)] flex flex-col p-8 z-10 box-border">
          <div className="absolute inset-0 z-0 pointer-events-none">
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#E7C36A]/15 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#b485ff]/15 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />
             {/* Subtle star overlay */}
             <div className="absolute inset-0 opacity-30 mix-blend-screen" style={{ backgroundImage: 'radial-gradient(1px 1px at 20px 30px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 50px 70px, rgba(231,195,106,0.8), rgba(0,0,0,0))', backgroundSize: '100px 100px' }}></div>
          </div>
          
          <div className="relative z-10 flex flex-col h-full w-full">
            <div className="text-center mb-auto mt-4">
              <h4 className="text-[#E7C36A] tracking-[0.4em] text-[10px] uppercase font-mono mb-4 border border-[#E7C36A]/20 rounded-full inline-block px-3 py-1 bg-[#E7C36A]/5">Klue</h4>
              <h2 className="text-4xl font-serif text-white leading-tight">My Cosmic<br/>Signature</h2>
            </div>
            
            <div className="flex flex-col gap-6 w-full mt-10">
              <div className="flex items-center gap-5 border-b border-white/5 pb-4">
                <div className="w-12 h-12 rounded-full border border-[#E7C36A]/50 bg-[#E7C36A]/10 flex items-center justify-center text-xl text-[#E7C36A] shadow-[0_0_15px_rgba(231,195,106,0.2)]">☉</div>
                <div>
                   <div className="text-[10px] uppercase tracking-widest text-[#E7C36A]/80 font-mono mb-1">Sun</div>
                   <div className="text-2xl font-serif text-white">Scorpio</div>
                </div>
              </div>

              <div className="flex items-center gap-5 border-b border-white/5 pb-4">
                <div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-xl text-white/80">☽</div>
                <div>
                   <div className="text-[10px] uppercase tracking-widest text-[#E7C36A]/80 font-mono mb-1">Moon</div>
                   <div className="text-2xl font-serif text-white">Aquarius</div>
                </div>
              </div>

              <div className="flex items-center gap-5 border-b border-white/5 pb-4">
                <div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-xl text-white/80">↑</div>
                <div>
                   <div className="text-[10px] uppercase tracking-widest text-[#E7C36A]/80 font-mono mb-1">Rising</div>
                   <div className="text-2xl font-serif text-white">Taurus</div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-auto mb-2 text-white/40 text-[10px] tracking-[0.2em] uppercase font-sans">
              Discover yours at Klue.app
            </div>
          </div>
        </div>

        <button className="mt-12 flex items-center gap-3 bg-[#E7C36A] hover:bg-[#d4b360] text-black px-8 py-4 rounded-xl transition-colors font-bold tracking-wide uppercase text-sm shadow-[0_0_20px_rgba(231,195,106,0.3)]">
          <Download size={18} /> Save Graphic
        </button>
      </div>

    </div>
  );
}
