import React from 'react';
import useSEO from '../hooks/useSEO';

export default function About() {
  useSEO('About Us');
  return (
    <div className="min-h-[85vh] py-24 px-6 md:px-12 max-w-4xl mx-auto flex flex-col gap-8 relative z-10 pt-32">
      <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">About Klue</h1>
      
      <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
        <h2 className="text-2xl text-[#E7C36A] font-medium mb-4">Our Mission</h2>
        <p className="text-white/70 leading-relaxed mb-6">
          Klue is built to connect you with the cosmos using the power of ancient astrology combined with modern artificial intelligence. 
          Klue, our AI astrologer, analyzes complex planetary alignments to provide you with insights that feel profoundly personal and timely.
        </p>

        <h2 className="text-2xl text-[#E7C36A] font-medium mb-4 mt-8">Focus</h2>
        <p className="text-white/70 leading-relaxed mb-6">
          We believe in democratizing access to self-discovery tools. Our platform provides rich, optimized content for individuals seeking answers to lifelong questions regarding love, career, and personal growth.
        </p>
      </div>
    </div>
  );
}
