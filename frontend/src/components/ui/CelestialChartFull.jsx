import React from 'react';
import { motion } from 'framer-motion';

export default function CelestialChartFull({ className = '' }) {
  return (
    <div className={`relative w-full max-w-[480px] mx-auto ${className}`}>
      <svg viewBox="0 0 440 440" className="w-full h-full" aria-label="Birth chart wheel" role="img">
        <defs>
          <radialGradient id="bcbgGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#B596FF" stopOpacity="0.06"></stop>
            <stop offset="100%" stopColor="transparent" stopOpacity="0"></stop>
          </radialGradient>
          <radialGradient id="bccoreGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E7C36A" stopOpacity="0.12"></stop>
            <stop offset="100%" stopColor="#140A2B" stopOpacity="0.4"></stop>
          </radialGradient>
          <filter id="bcplanetGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur"></feGaussianBlur>
            <feMerge>
              <feMergeNode in="blur"></feMergeNode>
              <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
          </filter>
        </defs>
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 180, ease: "linear" }}
          style={{ transformOrigin: "220px 220px" }}
        >
          <circle cx="220" cy="220" r="210" fill="url(#bcbgGlow)"></circle>
        <circle cx="220" cy="220" r="190" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5"></circle>
        <circle cx="220" cy="220" r="148" fill="rgba(255,255,255,0.015)" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5"></circle>
        <circle cx="220" cy="220" r="92" fill="url(#bccoreGrad)" stroke="rgba(231,195,106,0.18)" strokeWidth="1"></circle>

        {/* Outer Zodiac lines and symbols */}
        <g><line x1="220" y1="72" x2="220" y2="30" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5"></line><text x="267.88" y="41.3" textAnchor="middle" dominantBaseline="middle" fill="rgba(255,255,255,0.28)" fontSize="12" fontFamily="serif">♈</text></g>
        <g><line x1="294" y1="91.8" x2="315" y2="55.45" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5"></line><text x="350.81" y="89.18" textAnchor="middle" dominantBaseline="middle" fill="rgba(255,255,255,0.28)" fontSize="12" fontFamily="serif">♉</text></g>
        <g><line x1="348.17" y1="146" x2="384.54" y2="125" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5"></line><text x="398.69" y="172.11" textAnchor="middle" dominantBaseline="middle" fill="rgba(255,255,255,0.28)" fontSize="12" fontFamily="serif">♊</text></g>
        <g><line x1="368" y1="220" x2="410" y2="220" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5"></line><text x="398.69" y="267.88" textAnchor="middle" dominantBaseline="middle" fill="rgba(255,255,255,0.28)" fontSize="12" fontFamily="serif">♋</text></g>
        <g><line x1="348.17" y1="294" x2="384.54" y2="315" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5"></line><text x="350.81" y="350.81" textAnchor="middle" dominantBaseline="middle" fill="rgba(255,255,255,0.28)" fontSize="12" fontFamily="serif">♌</text></g>
        <g><line x1="294" y1="348.17" x2="315" y2="384.54" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5"></line><text x="267.88" y="398.69" textAnchor="middle" dominantBaseline="middle" fill="rgba(255,255,255,0.28)" fontSize="12" fontFamily="serif">♍</text></g>
        <g><line x1="220" y1="368" x2="220" y2="410" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5"></line><text x="172.11" y="398.69" textAnchor="middle" dominantBaseline="middle" fill="rgba(255,255,255,0.28)" fontSize="12" fontFamily="serif">♎</text></g>
        <g><line x1="146" y1="348.17" x2="125" y2="384.54" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5"></line><text x="89.18" y="350.81" textAnchor="middle" dominantBaseline="middle" fill="rgba(255,255,255,0.28)" fontSize="12" fontFamily="serif">♏</text></g>
        <g><line x1="91.82" y1="294" x2="55.45" y2="315" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5"></line><text x="41.3" y="267.88" textAnchor="middle" dominantBaseline="middle" fill="rgba(255,255,255,0.28)" fontSize="12" fontFamily="serif">♐</text></g>
        <g><line x1="72" y1="220" x2="30" y2="220" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5"></line><text x="41.3" y="172.11" textAnchor="middle" dominantBaseline="middle" fill="rgba(255,255,255,0.28)" fontSize="12" fontFamily="serif">♑</text></g>
        <g><line x1="91.82" y1="146" x2="55.45" y2="125" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5"></line><text x="89.18" y="89.18" textAnchor="middle" dominantBaseline="middle" fill="rgba(255,255,255,0.28)" fontSize="12" fontFamily="serif">♒</text></g>
        <g><line x1="146" y1="91.82" x2="125" y2="55.45" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5"></line><text x="172.11" y="41.3" textAnchor="middle" dominantBaseline="middle" fill="rgba(255,255,255,0.28)" fontSize="12" fontFamily="serif">♓</text></g>

        {/* Inner Houses Numbers and Lines */}
        <g><line x1="220" y1="72" x2="220" y2="30" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"></line><text x="263.74" y="56.75" textAnchor="middle" dominantBaseline="middle" fill="rgba(255,255,255,0.18)" fontSize="8" fontFamily="'IBM Plex Mono', monospace">1</text></g>
        <g><line x1="294" y1="91.82" x2="315" y2="55.45" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"></line><text x="339.5" y="100.49" textAnchor="middle" dominantBaseline="middle" fill="rgba(255,255,255,0.18)" fontSize="8" fontFamily="'IBM Plex Mono', monospace">2</text></g>
        <g><line x1="348.17" y1="146" x2="384.54" y2="125" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"></line><text x="383.24" y="176.25" textAnchor="middle" dominantBaseline="middle" fill="rgba(255,255,255,0.18)" fontSize="8" fontFamily="'IBM Plex Mono', monospace">3</text></g>
        <g><line x1="368" y1="220" x2="410" y2="220" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"></line><text x="383.24" y="263.74" textAnchor="middle" dominantBaseline="middle" fill="rgba(255,255,255,0.18)" fontSize="8" fontFamily="'IBM Plex Mono', monospace">4</text></g>
        <g><line x1="348.17" y1="294" x2="384.54" y2="315" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"></line><text x="339.5" y="339.5" textAnchor="middle" dominantBaseline="middle" fill="rgba(255,255,255,0.18)" fontSize="8" fontFamily="'IBM Plex Mono', monospace">5</text></g>
        <g><line x1="294" y1="348.17" x2="315" y2="384.54" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"></line><text x="263.74" y="383.24" textAnchor="middle" dominantBaseline="middle" fill="rgba(255,255,255,0.18)" fontSize="8" fontFamily="'IBM Plex Mono', monospace">6</text></g>
        <g><line x1="220" y1="368" x2="220" y2="410" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"></line><text x="176.25" y="383.24" textAnchor="middle" dominantBaseline="middle" fill="rgba(255,255,255,0.18)" fontSize="8" fontFamily="'IBM Plex Mono', monospace">7</text></g>
        <g><line x1="146" y1="348.17" x2="125" y2="384.54" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"></line><text x="100.49" y="339.5" textAnchor="middle" dominantBaseline="middle" fill="rgba(255,255,255,0.18)" fontSize="8" fontFamily="'IBM Plex Mono', monospace">8</text></g>
        <g><line x1="91.82" y1="294" x2="55.45" y2="315" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"></line><text x="56.75" y="263.74" textAnchor="middle" dominantBaseline="middle" fill="rgba(255,255,255,0.18)" fontSize="8" fontFamily="'IBM Plex Mono', monospace">9</text></g>
        <g><line x1="72" y1="220" x2="30" y2="220" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"></line><text x="56.75" y="176.25" textAnchor="middle" dominantBaseline="middle" fill="rgba(255,255,255,0.18)" fontSize="8" fontFamily="'IBM Plex Mono', monospace">10</text></g>
        <g><line x1="91.82" y1="146" x2="55.45" y2="125" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"></line><text x="100.49" y="100.49" textAnchor="middle" dominantBaseline="middle" fill="rgba(255,255,255,0.18)" fontSize="8" fontFamily="'IBM Plex Mono', monospace">11</text></g>
        <g><line x1="146" y1="91.82" x2="125" y2="55.45" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"></line><text x="176.25" y="56.75" textAnchor="middle" dominantBaseline="middle" fill="rgba(255,255,255,0.18)" fontSize="8" fontFamily="'IBM Plex Mono', monospace">12</text></g>

        {/* Crosshair Lines */}
        <line x1="220" y1="128" x2="220" y2="30" stroke="rgba(231,195,106,0.22)" strokeWidth="1"></line>
        <line x1="312" y1="220" x2="410" y2="220" stroke="rgba(231,195,106,0.22)" strokeWidth="1"></line>
        <line x1="220" y1="312" x2="220" y2="410" stroke="rgba(231,195,106,0.22)" strokeWidth="1"></line>
        <line x1="128" y1="220" x2="30" y2="220" stroke="rgba(231,195,106,0.22)" strokeWidth="1"></line>

        {/* Planets */}
        <g style={{ cursor: 'pointer' }}><circle cx="303.44" cy="300.58" r="4" fill="rgba(231,195,106,0.7)" filter="url(#bcplanetGlow)"></circle><line x1="303.44" y1="300.58" x2="220" y2="220" stroke="rgba(231,195,106,0.07)" strokeWidth="0.5" strokeDasharray="2 5"></line><text x="319.26" y="315.86" textAnchor="middle" dominantBaseline="middle" fill="rgba(231,195,106,0.55)" fontSize="9" fontFamily="serif">☉</text></g>
        <g style={{ cursor: 'pointer' }}><circle cx="122.71" cy="283.17" r="4" fill="rgba(231,195,106,0.7)" filter="url(#bcplanetGlow)"></circle><line x1="122.71" y1="283.17" x2="220" y2="220" stroke="rgba(231,195,106,0.07)" strokeWidth="0.5" strokeDasharray="2 5"></line><text x="104.26" y="295.16" textAnchor="middle" dominantBaseline="middle" fill="rgba(231,195,106,0.55)" fontSize="9" fontFamily="serif">☽</text></g>
        <g style={{ cursor: 'pointer' }}><circle cx="272.66" cy="323.35" r="4" fill="rgba(231,195,106,0.7)" filter="url(#bcplanetGlow)"></circle><line x1="272.66" y1="323.35" x2="220" y2="220" stroke="rgba(231,195,106,0.07)" strokeWidth="0.5" strokeDasharray="2 5"></line><text x="282.65" y="342.95" textAnchor="middle" dominantBaseline="middle" fill="rgba(231,195,106,0.55)" fontSize="9" fontFamily="serif">☿</text></g>
        <g style={{ cursor: 'pointer' }}><circle cx="182.23" cy="329.68" r="4" fill="rgba(231,195,106,0.7)" filter="url(#bcplanetGlow)"></circle><line x1="182.23" y1="329.68" x2="220" y2="220" stroke="rgba(231,195,106,0.07)" strokeWidth="0.5" strokeDasharray="2 5"></line><text x="175.07" y="350.48" textAnchor="middle" dominantBaseline="middle" fill="rgba(231,195,106,0.55)" fontSize="9" fontFamily="serif">♀</text></g>
        <g style={{ cursor: 'pointer' }}><circle cx="236.14" cy="105.12" r="4" fill="rgba(231,195,106,0.7)" filter="url(#bcplanetGlow)"></circle><line x1="236.14" y1="105.12" x2="220" y2="220" stroke="rgba(231,195,106,0.07)" strokeWidth="0.5" strokeDasharray="2 5"></line><text x="239.2" y="83.34" textAnchor="middle" dominantBaseline="middle" fill="rgba(231,195,106,0.55)" fontSize="9" fontFamily="serif">♂</text></g>
        <g style={{ cursor: 'pointer' }}><circle cx="104.01" cy="217.97" r="4" fill="rgba(231,195,106,0.7)" filter="url(#bcplanetGlow)"></circle><line x1="104.01" y1="217.97" x2="220" y2="220" stroke="rgba(231,195,106,0.07)" strokeWidth="0.5" strokeDasharray="2 5"></line><text x="82.02" y="217.59" textAnchor="middle" dominantBaseline="middle" fill="rgba(231,195,106,0.55)" fontSize="9" fontFamily="serif">♃</text></g>
        <g style={{ cursor: 'pointer' }}><circle cx="112.44" cy="176.54" r="4" fill="rgba(231,195,106,0.7)" filter="url(#bcplanetGlow)"></circle><line x1="112.44" y1="176.54" x2="220" y2="220" stroke="rgba(231,195,106,0.07)" strokeWidth="0.5" strokeDasharray="2 5"></line><text x="92.04" y="168.3" textAnchor="middle" dominantBaseline="middle" fill="rgba(231,195,106,0.55)" fontSize="9" fontFamily="serif">♄</text></g>

        </motion.g>

        {/* Center Star & Label */}
        <text x="220" y="214" textAnchor="middle" dominantBaseline="middle" fill="rgba(231,195,106,0.35)" fontSize="24" fontFamily="serif">✦</text>
        <text x="220" y="234" textAnchor="middle" dominantBaseline="middle" fill="rgba(255,255,255,0.12)" fontSize="7" fontFamily="'IBM Plex Mono', monospace">LEO 14°</text>
      </svg>
    </div>
  );
}
