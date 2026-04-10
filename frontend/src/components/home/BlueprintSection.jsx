import React from 'react';
import CelestialChartFull from '../ui/CelestialChartFull';
import { ArrowUpRight } from 'lucide-react';

export default function BlueprintSection() {
  return (
    <section id="charts" className="relative z-10 py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="relative">
            <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[420px] h-[420px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(181, 150, 255, 0.07) 0%, transparent 65%)', filter: 'blur(40px)' }}></div>
            </div>
            <CelestialChartFull />
            <p className="text-center text-white/22 uppercase mt-4" style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '10px', letterSpacing: '0.12em' }}>Click any planet to inspect</p>
          </div>
          
          <div>
            <p className="text-[#E7C36A]/55 uppercase mb-3" style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '11px', letterSpacing: '0.2em' }}>03 — Your Blueprint</p>
            <h2 className="text-white/92 mb-4" style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, fontSize: 'clamp(30px, 4vw, 44px)', lineHeight: 1.1 }}>Natal Chart<br />Decoded</h2>
            <p className="text-white/36 leading-relaxed mb-8 max-w-md" style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', lineHeight: 1.7 }}>
              A snapshot of the heavens at the moment you were born. Each planet's placement reveals a layer of your psyche, purpose, and potential.
            </p>
            
            <div className="space-y-2">
              {[
                { icon: '☉', planet: 'Sun', house: '1st House', detail: 'Leo 14°' },
                { icon: '☽', planet: 'Moon', house: '4th House', detail: 'Scorpio 27°' },
                { icon: '☿', planet: 'Mercury', house: '2nd House', detail: 'Virgo 3°' },
                { icon: '♀', planet: 'Venus', house: '3rd House', detail: 'Libra 19°' },
                { icon: '♂', planet: 'Mars', house: '10th House', detail: 'Aries 8°' },
                { icon: '♃', planet: 'Jupiter', house: '5th House', detail: 'Sagittarius 1°' },
                { icon: '♄', planet: 'Saturn', house: '6th House', detail: 'Capricorn 22°' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-3.5 rounded-xl border cursor-pointer transition-all duration-180 group" style={{ background: 'rgba(255, 255, 255, 0.02)', borderColor: 'rgba(255, 255, 255, 0.05)' }}>
                  <div className="w-9 h-9 rounded-xl flex-shrink-0 flex items-center justify-center text-lg font-serif" aria-hidden="true" style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.07)', color: 'rgba(255, 255, 255, 0.4)' }}>{item.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-white/50 uppercase" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '0.06em' }}>{item.planet}</span>
                      <span className="text-[#E7C36A]/50" style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '10px' }}>{item.house}</span>
                    </div>
                    <p className="text-white/70 truncate" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 500 }}>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="mt-8 flex items-center gap-2 group transition-colors duration-200" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 500, letterSpacing: '0.05em', color: 'rgba(231, 195, 106, 0.55)' }}>
              <span className="group-hover:text-[#E7C36A] transition-colors">Full Chart Interpretation</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:text-[#E7C36A] transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
