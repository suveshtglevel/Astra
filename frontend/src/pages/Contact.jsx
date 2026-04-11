import React from 'react';
import useSEO from '../hooks/useSEO';

export default function Contact() {
  useSEO('Contact');
  return (
    <div className="min-h-[85vh] py-24 px-6 md:px-12 max-w-2xl mx-auto relative z-10 pt-32">
      <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Contact Us</h1>
      <p className="text-[#E7C36A] font-medium tracking-wide mb-8">Have an issue with your account or a billing question? We're here to help.</p>
      
      <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
        <h2 className="text-2xl text-white font-medium mb-4">Get in Touch</h2>
        <form className="space-y-4">
          <input type="email" placeholder="Your Email" className="w-full bg-[#0b0c10] border border-white/10 p-3 rounded-lg text-white outline-none focus:border-[#E7C36A]" />
          <textarea placeholder="How can we help?" rows="4" className="w-full bg-[#0b0c10] border border-white/10 p-3 rounded-lg text-white outline-none focus:border-[#E7C36A]"></textarea>
          <button type="submit" className="bg-[#E7C36A] text-black font-bold py-3 px-6 rounded-lg hover:bg-[#d4b360] transition-colors w-full md:w-auto">Send Message</button>
        </form>
      </div>
    </div>
  );
}
