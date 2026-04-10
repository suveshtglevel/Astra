import React from 'react';

const planets = [
  { symbol: '☉', angle: 45, radius: 0.6, name: 'Sun' },
  { symbol: '☽', angle: 120, radius: 0.8, name: 'Moon' },
  { symbol: '☿', angle: 210, radius: 0.5, name: 'Mercury' },
  { symbol: '♀', angle: 300, radius: 0.7, name: 'Venus' },
  { symbol: '♂', angle: 70, radius: 0.9, name: 'Mars' },
  { symbol: '♃', angle: 180, radius: 0.4, name: 'Jupiter' },
  { symbol: '♄', angle: 270, radius: 0.8, name: 'Saturn' },
  { symbol: '♅', angle: 330, radius: 0.6, name: 'Uranus' }
];

const zodiacs = ['♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓'];

export default function CelestialChart({ className = "", size = 400 }) {
  const center = size / 2;

  return (
    <div 
      className={`relative rounded-full flex items-center justify-center opacity-90 ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Outer Glowing Glow */}
      <div className="absolute inset-0 rounded-full bg-[#f2cf76]/5 blur-3xl" />
      
      {/* Central Star */}
      <div className="absolute flex flex-col items-center justify-center text-[#f2cf76]">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
        </svg>
        <span className="text-[10px] mt-2 text-white/50 tracking-wider">LEO 14°</span>
      </div>

      {/* Rings */}
      <div className="absolute w-[90%] h-[90%] rounded-full border border-white/10" />
      <div className="absolute w-[60%] h-[60%] rounded-full border border-white/10" />
      <div className="absolute w-[40%] h-[40%] rounded-full border border-white/5 bg-gradient-to-tr from-[#9b82ff]/10 to-[#f2cf76]/10" />
      
      {/* Crosshairs */}
      <div className="absolute w-full h-[1px] bg-white/5" />
      <div className="absolute h-full w-[1px] bg-white/5" />

      {/* Planet Dots */}
      {planets.map((p, i) => {
        // Calculate X and Y coordinates mapping radius scale (0-1) to pixel distance from center
        const r = (size / 2) * p.radius;
        const x = center + r * Math.cos((p.angle * Math.PI) / 180);
        const y = center + r * Math.sin((p.angle * Math.PI) / 180);
        
        return (
          <div key={i} className="absolute flex flex-col items-center" style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}>
             <div className="w-2.5 h-2.5 rounded-full bg-[#f2cf76] shadow-[0_0_10px_#f2cf76]" />
             <span className="text-[#f2cf76] text-sm mt-1">{p.symbol}</span>
          </div>
        );
      })}

      {/* Zodiac Outer Edge */}
      {zodiacs.map((z, i) => {
        const r = (size / 2) * 0.95;
        const angle = i * 30; // 360 / 12 = 30 degrees per zodiac
        const x = center + r * Math.cos((angle * Math.PI) / 180);
        const y = center + r * Math.sin((angle * Math.PI) / 180);
        
        return (
          <div key={i} className="absolute w-6 h-6 flex items-center justify-center bg-[#1d1633] text-[#9b82ff] border border-white/10 rounded-sm text-xs font-bold" style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}>
            {z}
          </div>
        );
      })}

    </div>
  );
}
