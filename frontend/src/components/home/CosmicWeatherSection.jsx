import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function CosmicWeatherSection() {
  return (
    <section id="horoscope" className="relative z-10 py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="text-[#E7C36A]/55 uppercase mb-3" style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '11px', letterSpacing: '0.2em' }}>02 — Today's Reading</p>
            <h2 className="text-white/92" style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, fontSize: 'clamp(30px, 4vw, 44px)', lineHeight: 1.1 }}>Cosmic Weather</h2>
          </div>
          
          <div className="flex items-center gap-1.5 p-1 rounded-xl border" style={{ background: 'rgba(255, 255, 255, 0.024)', borderColor: 'rgba(255, 255, 255, 0.07)' }}>
            <button className="px-5 py-2 rounded-lg transition-all duration-180" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 500, background: 'rgba(231, 195, 106, 0.12)', color: 'rgb(231, 195, 106)', border: '1px solid rgba(231, 195, 106, 0.28)' }}>Daily</button>
            <button className="px-5 py-2 rounded-lg transition-all duration-180" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 500, background: 'transparent', color: 'rgba(255, 255, 255, 0.38)', border: '1px solid transparent' }}>Weekly</button>
            <button className="px-5 py-2 rounded-lg transition-all duration-180" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 500, background: 'transparent', color: 'rgba(255, 255, 255, 0.38)', border: '1px solid transparent' }}>Monthly</button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1 */}
          <div className="group relative flex flex-col p-6 rounded-2xl border cursor-pointer transition-all duration-200" style={{ background: 'rgba(255, 255, 255, 0.055)', borderColor: 'rgba(231, 195, 106, 0.22)', boxShadow: 'rgba(231, 195, 106, 0.12) 0px 0px 40px -8px' }}>
            <div aria-hidden="true" className="absolute top-0 left-4 right-4 h-px rounded-full" style={{ background: 'linear-gradient(90deg, rgb(231, 195, 106), rgba(231, 195, 106, 0))' }}></div>
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-base" aria-hidden="true" style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.07)', color: 'rgba(231, 195, 106, 0.65)' }}>♀</div>
                <div>
                  <p className="text-white/28 uppercase mb-0.5" style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '9px', letterSpacing: '0.15em' }}>Daily</p>
                  <p className="text-[#E7C36A]/65" style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 500 }}>Venus</p>
                </div>
              </div>
              <span className="w-2 h-2 rounded-full bg-[#E7C36A]" aria-hidden="true" style={{ opacity: 0.7 }}></span>
            </div>
            <h3 className="mb-3 text-white/88 leading-snug" style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600, fontSize: '17px', lineHeight: 1.35 }}>A small choice changes the week's tone.</h3>
            <p className="text-white/40 leading-relaxed mb-5 flex-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', lineHeight: 1.65 }}>Trust the quiet yes. Venus trines your natal Moon — emotional receptivity peaks. This window closes in 48 hours.</p>
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="px-2.5 py-1 rounded-lg" style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '9px', letterSpacing: '0.1em', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.07)', color: 'rgba(255, 255, 255, 0.32)' }}>LOVE</span>
              <span className="px-2.5 py-1 rounded-lg" style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '9px', letterSpacing: '0.1em', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.07)', color: 'rgba(255, 255, 255, 0.32)' }}>INTUITION</span>
            </div>
            <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.05em', color: 'rgb(231, 195, 106)' }}>Read Full Reading</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#E7C36A]" />
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="group relative flex flex-col p-6 rounded-2xl border cursor-pointer transition-all duration-200" style={{ background: 'rgba(255, 255, 255, 0.03)', borderColor: 'rgba(255, 255, 255, 0.07)' }}>
            <div aria-hidden="true" className="absolute top-0 left-4 right-4 h-px rounded-full" style={{ background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.06), transparent)' }}></div>
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-base" aria-hidden="true" style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.07)', color: 'rgba(231, 195, 106, 0.65)' }}>♄</div>
                <div>
                  <p className="text-white/28 uppercase mb-0.5" style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '9px', letterSpacing: '0.15em' }}>Weekly</p>
                  <p className="text-[#E7C36A]/65" style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 500 }}>Saturn</p>
                </div>
              </div>
              <span className="w-2 h-2 rounded-full bg-[#B596FF]" aria-hidden="true" style={{ opacity: 0.7 }}></span>
            </div>
            <h3 className="mb-3 text-white/88 leading-snug" style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600, fontSize: '17px', lineHeight: 1.35 }}>You're building momentum — protect your focus.</h3>
            <p className="text-white/40 leading-relaxed mb-5 flex-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', lineHeight: 1.65 }}>Saturn demands patience in professional matters. What feels like obstruction is actually refinement.</p>
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="px-2.5 py-1 rounded-lg" style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '9px', letterSpacing: '0.1em', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.07)', color: 'rgba(255, 255, 255, 0.32)' }}>CAREER</span>
              <span className="px-2.5 py-1 rounded-lg" style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '9px', letterSpacing: '0.1em', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.07)', color: 'rgba(255, 255, 255, 0.32)' }}>DISCIPLINE</span>
            </div>
            <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.05em', color: 'rgb(231, 195, 106)' }}>Read Full Reading</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#E7C36A]" />
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="group relative flex flex-col p-6 rounded-2xl border cursor-pointer transition-all duration-200" style={{ background: 'rgba(255, 255, 255, 0.03)', borderColor: 'rgba(255, 255, 255, 0.07)' }}>
            <div aria-hidden="true" className="absolute top-0 left-4 right-4 h-px rounded-full" style={{ background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.06), transparent)' }}></div>
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-base" aria-hidden="true" style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.07)', color: 'rgba(231, 195, 106, 0.65)' }}>♆</div>
                <div>
                  <p className="text-white/28 uppercase mb-0.5" style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '9px', letterSpacing: '0.15em' }}>Monthly</p>
                  <p className="text-[#E7C36A]/65" style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 500 }}>Neptune</p>
                </div>
              </div>
              <span className="w-2 h-2 rounded-full bg-[#B596FF]" aria-hidden="true" style={{ opacity: 0.7 }}></span>
            </div>
            <h3 className="mb-3 text-white/88 leading-snug" style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600, fontSize: '17px', lineHeight: 1.35 }}>A recalibration month. Let boundaries be beautiful.</h3>
            <p className="text-white/40 leading-relaxed mb-5 flex-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', lineHeight: 1.65 }}>Neptune conjunct your 12th House. The veil thins. Pay attention to dreams — they carry significant truths.</p>
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="px-2.5 py-1 rounded-lg" style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '9px', letterSpacing: '0.1em', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.07)', color: 'rgba(255, 255, 255, 0.32)' }}>SPIRIT</span>
              <span className="px-2.5 py-1 rounded-lg" style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '9px', letterSpacing: '0.1em', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.07)', color: 'rgba(255, 255, 255, 0.32)' }}>CLARITY</span>
              <span className="px-2.5 py-1 rounded-lg" style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '9px', letterSpacing: '0.1em', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.07)', color: 'rgba(255, 255, 255, 0.32)' }}>RENEWAL</span>
            </div>
            <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.05em', color: 'rgb(231, 195, 106)' }}>Read Full Reading</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#E7C36A]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
