import React from 'react';
import useSEO from '../hooks/useSEO';

export default function Terms() {
  useSEO('Terms & Conditions');
  return (
    <div className="min-h-[85vh] py-24 px-6 md:px-12 max-w-4xl mx-auto relative z-10 pt-32">
      <h1 className="text-4xl md:text-5xl font-serif text-white mb-8">Terms & Conditions</h1>
      
      <div className="bg-white/5 border border-white/10 p-8 rounded-2xl text-white/70 space-y-6">
        <p className="text-sm border-b border-white/10 pb-4 text-[#E7C36A]">Last Updated: April 2026</p>
        
        <div>
          <h2 className="text-xl text-white font-medium mb-2">1. Acceptance of Terms</h2>
          <p className="text-sm leading-relaxed">By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. Our astrological insights are provided for entertainment purposes only.</p>
        </div>

        <div>
          <h2 className="text-xl text-white font-medium mb-2">2. Subscriptions</h2>
          <p className="text-sm leading-relaxed">The Premium Star Tier subscription is billed at ₹99 per month. It includes 25 additional questions per month. Subscriptions renew automatically unless cancelled before the renewal date.</p>
        </div>

        <div>
          <h2 className="text-xl text-white font-medium mb-2">3. User Conduct</h2>
          <p className="text-sm leading-relaxed">Users agree not to exploit the platform, manipulate the ad-watching reward system, or scrape data from the application.</p>
        </div>
      </div>
    </div>
  );
}
