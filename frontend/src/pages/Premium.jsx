import React from 'react';
import { Check, Star, Lock, Zap } from 'lucide-react';
import useSEO from '../hooks/useSEO';
import MagneticCard from '../components/ui/MagneticCard';

export default function Premium() {
  useSEO('Premium');
  return (
    <div className="min-h-[85vh] py-24 px-6 md:px-12 max-w-4xl mx-auto relative z-10 pt-32 text-center">
      <Star className="w-12 h-12 text-[#E7C36A] mx-auto mb-6" />
      <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Klue Premium</h1>
      <p className="text-[#E7C36A] text-lg max-w-2xl mx-auto mb-16">Unlock the full capacity of your cosmic blueprint and speak directly with the stars.</p>
      
      <div className="grid md:grid-cols-1 gap-8 max-w-md mx-auto mb-20">
        <MagneticCard className="bg-[#0b0c10] border border-[#E7C36A]/30 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden text-left">
          <div className="absolute top-0 right-0 bg-[#E7C36A] text-black text-xs font-bold px-3 py-1 rounded-bl-lg tracking-wider">STAR TIER</div>
          <div className="text-4xl font-bold text-[#E7C36A] mb-8 mt-4">₹ 99 <span className="text-lg font-normal text-white/50">/ month</span></div>
          <ul className="space-y-4 mb-10">
            <li className="flex items-start gap-3 text-white/80">
              <Check size={20} className="text-[#E7C36A] shrink-0" />
              25 Free Questions / Month
            </li>
            <li className="flex items-start gap-3 text-white/80">
              <Check size={20} className="text-[#E7C36A] shrink-0" />
              Full Birth Chart Blueprint Access
            </li>
            <li className="flex items-start gap-3 text-white/80">
              <Check size={20} className="text-[#E7C36A] shrink-0" />
              Priority Ask Klue Responses
            </li>
            <li className="flex items-start gap-3 text-white/80">
              <Check size={20} className="text-[#E7C36A] shrink-0" />
              Ad-free Experience
            </li>
          </ul>
          <button className="w-full py-4 rounded-xl bg-[#E7C36A] text-black font-bold font-mono uppercase tracking-widest text-sm hover:bg-[#d4b360] transition-colors mt-auto shadow-[0_0_20px_rgba(231,195,106,0.3)]">
            Upgrade Now
          </button>
        </MagneticCard>
      </div>
    </div>
  );
}
