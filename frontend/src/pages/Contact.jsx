import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen py-24 px-6 md:px-12 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-serif text-gradient mb-8">Contact & Careers</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
          <h2 className="text-2xl text-brand-light font-medium mb-4">Get in Touch</h2>
          <p className="text-brand-gray mb-6 text-sm">Have an issue with your account or a billing question? We're here to help.</p>
          <form className="space-y-4">
            <input type="email" placeholder="Your Email" className="w-full bg-[#0d0a14] border border-white/10 p-3 rounded-lg text-brand-light outline-none focus:border-brand-primary" />
            <textarea placeholder="How can we help?" rows="4" className="w-full bg-[#0d0a14] border border-white/10 p-3 rounded-lg text-brand-light outline-none focus:border-brand-primary"></textarea>
            <button type="submit" className="bg-brand-primary text-black font-bold py-3 px-6 rounded-lg hover:bg-brand-primary-dark transition-colors">Send Message</button>
          </form>
        </div>

        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
          <h2 className="text-2xl text-brand-light font-medium mb-4">Careers</h2>
          <p className="text-brand-gray mb-6 text-sm">We're always looking for talented developers, astrologers, and writers to join our team.</p>
          <div className="space-y-4">
            <div className="border border-white/10 p-4 rounded-lg hover:border-brand-secondary transition-colors cursor-pointer">
              <h3 className="text-brand-light font-medium">Senior Prompt Engineer</h3>
              <p className="text-brand-gray text-xs mt-1">Remote • Full-time</p>
            </div>
            <div className="border border-white/10 p-4 rounded-lg hover:border-brand-secondary transition-colors cursor-pointer">
              <h3 className="text-brand-light font-medium">Vedic Astrologer (Consultant)</h3>
              <p className="text-brand-gray text-xs mt-1">Remote • Contract</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
