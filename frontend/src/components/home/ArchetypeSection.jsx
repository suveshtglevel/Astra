import React from 'react';

const archetypes = [
  { icon: '♈', name: 'Aries', dates: 'Mar 21–Apr 19' },
  { icon: '♉', name: 'Taurus', dates: 'Apr 20–May 20' },
  { icon: '♊', name: 'Gemini', dates: 'May 21–Jun 20' },
  { icon: '♋', name: 'Cancer', dates: 'Jun 21–Jul 22' },
  { icon: '♌', name: 'Leo', dates: 'Jul 23–Aug 22' },
  { icon: '♍', name: 'Virgo', dates: 'Aug 23–Sep 22' },
  { icon: '♎', name: 'Libra', dates: 'Sep 23–Oct 22' },
  { icon: '♏', name: 'Scorpio', dates: 'Oct 23–Nov 21' },
  { icon: '♐', name: 'Sagittarius', dates: 'Nov 22–Dec 21' },
  { icon: '♑', name: 'Capricorn', dates: 'Dec 22–Jan 19' },
  { icon: '♒', name: 'Aquarius', dates: 'Jan 20–Feb 18' },
  { icon: '♓', name: 'Pisces', dates: 'Feb 19–Mar 20' }
];

export default function ArchetypeSection() {
  return (
    <section id="signs" className="relative z-10 py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-[#E7C36A]/55 uppercase mb-3" style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '11px', letterSpacing: '0.2em' }}>01 — Your Sign</p>
            <h2 className="text-white/92" style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, fontSize: 'clamp(30px, 4vw, 44px)', lineHeight: 1.1 }}>Select Your Archetype</h2>
          </div>
        </div>
        
        <div className="hidden sm:grid grid-cols-6 gap-2.5">
          {archetypes.map((sign, idx) => (
            <button key={idx} className="relative flex flex-col items-center gap-2.5 py-5 px-3 rounded-2xl border transition-all duration-200 group hover:border-white/20" tabIndex="0" style={{ background: 'rgba(255, 255, 255, 0.024)', borderColor: 'rgba(255, 255, 255, 0.07)' }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl" aria-hidden="true" style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.06)', color: 'rgba(255, 255, 255, 0.45)' }}>
                {sign.icon}
              </div>
              <span className="text-white/48 group-hover:text-white/70 transition-colors" style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 400, letterSpacing: '0.06em' }}>{sign.name}</span>
              <span className="text-white/22" style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '8px', letterSpacing: '0.05em' }}>{sign.dates}</span>
            </button>
          ))}
        </div>
        
        <div className="sm:hidden flex gap-3 overflow-x-auto pb-3 -mx-4 px-4 snap-x snap-mandatory" style={{ scrollbarWidth: 'none' }}>
          {archetypes.map((sign, idx) => (
            <button key={idx} className="flex-shrink-0 snap-start flex flex-col items-center gap-2 w-[76px] py-4 rounded-2xl border transition-all duration-200" style={{ background: 'rgba(255, 255, 255, 0.03)', borderColor: 'rgba(255, 255, 255, 0.07)' }}>
              <span className="text-xl" aria-hidden="true" style={{ color: 'rgba(255, 255, 255, 0.42)' }}>{sign.icon}</span>
              <span className="text-white/42" style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: 500 }}>{sign.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
