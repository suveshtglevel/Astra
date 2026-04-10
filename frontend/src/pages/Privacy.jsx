import React from 'react';

export default function Privacy() {
  return (
    <div className="min-h-screen py-24 px-6 md:px-12 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-serif text-gradient mb-8">Privacy Policy</h1>
      
      <div className="bg-white/5 border border-white/10 p-8 rounded-2xl text-brand-gray space-y-6">
        <p className="text-sm border-b border-white/10 pb-4">Last Updated: March 2026</p>
        
        <div>
          <h2 className="text-xl text-brand-light font-medium mb-2">1. Information We Collect</h2>
          <p className="text-sm leading-relaxed">We collect your name, birth date, exact birth time, and birth location to calculate precise astrological charts. We also collect authentication details via Google, Truecaller, or your email.</p>
        </div>

        <div>
          <h2 className="text-xl text-brand-light font-medium mb-2">2. How We Use Your Data</h2>
          <p className="text-sm leading-relaxed">Your birth details are used exclusively for calculating planetary alignments, Mahadasha, and personalized tarot/astrology readings. We do not sell your personal data to third parties.</p>
        </div>

        <div>
          <h2 className="text-xl text-brand-light font-medium mb-2">3. Data Security</h2>
          <p className="text-sm leading-relaxed">All data is encrypted in transit and at rest. We adhere to industry best standards to keep your information secure.</p>
        </div>
      </div>
    </div>
  );
}
