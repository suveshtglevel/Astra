import React from 'react';

export default function Footer() {
  return (
    <footer className="relative z-10 pt-16 pb-10 px-8 border-t" style={{ background: 'rgba(5, 6, 11, 0.8)', borderColor: 'rgba(255, 255, 255, 0.05)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-sm">
            <a href="#" className="flex items-center gap-2.5 group mb-6" aria-label="Aether — go to homepage">
              <div className="relative w-7 h-7 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E7C36A]" style={{ color: 'rgba(231,195,106,0.5)' }}>
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <span className="text-white/90 uppercase tracking-widest" style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, fontSize: '15px', letterSpacing: '0.12em' }}>Aether</span>
            </a>
            <p className="text-white/40 leading-relaxed mb-8" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px' }}>
              Decoding the cosmic currents to help you navigate your earthly experience with absolute clarity.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center border hover:border-white/20 transition-colors group" style={{ background: 'rgba(255, 255, 255, 0.03)', borderColor: 'rgba(255, 255, 255, 0.07)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60 group-hover:text-white transition-colors">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center border hover:border-white/20 transition-colors group" style={{ background: 'rgba(255, 255, 255, 0.03)', borderColor: 'rgba(255, 255, 255, 0.07)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60 group-hover:text-white transition-colors">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center border hover:border-white/20 transition-colors group" style={{ background: 'rgba(255, 255, 255, 0.03)', borderColor: 'rgba(255, 255, 255, 0.07)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60 group-hover:text-white transition-colors">
                  <rect width="20" height="16" x="2" y="4" rx="2" ry="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="flex gap-16 md:gap-24">
            <div>
              <h4 className="text-white/22 uppercase mb-6" style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '10px', letterSpacing: '0.15em' }}>Platform</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-white/50 hover:text-white transition-colors text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>Horoscopes</a></li>
                <li><a href="#" className="text-white/50 hover:text-white transition-colors text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>Birth Charts</a></li>
                <li><a href="#" className="text-white/50 hover:text-white transition-colors text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>Synastry</a></li>
                <li><a href="#" className="text-white/50 hover:text-white transition-colors text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>Premium Tier</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white/22 uppercase mb-6" style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '10px', letterSpacing: '0.15em' }}>Company</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-white/50 hover:text-white transition-colors text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>About Us</a></li>
                <li><a href="#" className="text-white/50 hover:text-white transition-colors text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>Waitlist</a></li>
                <li><a href="#" className="text-white/50 hover:text-white transition-colors text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>Privacy Policy</a></li>
                <li><a href="#" className="text-white/50 hover:text-white transition-colors text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: 'rgba(255, 255, 255, 0.05)' }}>
          <p className="text-white/30 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>© 2026 Aether. All rights reserved.</p>
          <div className="flex items-center gap-2">
             <span className="w-1.5 h-1.5 rounded-full bg-[#E7C36A]/50"></span>
             <span className="text-white/30 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>Built with Celestial AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
