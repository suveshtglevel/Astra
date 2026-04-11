import React from 'react';
import useSEO from '../hooks/useSEO';

export default function PNC() {
  useSEO('Policies & Conditions');

  return (
    <div className="min-h-[85vh] max-w-4xl mx-auto px-6 py-24 relative z-10 pt-32">
      <div className="mb-16">
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Policies & Conditions</h1>
        <p className="text-lg text-[#E7C36A] font-medium tracking-wide">Last updated: April 2026</p>
      </div>
      
      <div className="space-y-8 text-white/70 leading-relaxed">
        <section>
          <h2 className="text-2xl text-white font-serif mb-4">1. Agreement to Terms</h2>
          <p>
            By accessing or using Klue, you agree to be bound by these policies and conditions. Our celestial readings are provided for entertainment and introspection purposes only.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-white font-serif mb-4">2. Intellectual Property Rights</h2>
          <p>
            Unless otherwise indicated, the platform is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the platform are securely retained.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-white font-serif mb-4">3. User Representations</h2>
          <p>
            By using the platform, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information.
          </p>
        </section>
      </div>
    </div>
  );
}
