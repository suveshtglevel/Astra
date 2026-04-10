import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen py-24 px-6 md:px-12 max-w-4xl mx-auto flex flex-col gap-8">
      <h1 className="text-4xl md:text-5xl font-serif text-gradient mb-4">About Astra & Kloe</h1>
      
      <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
        <h2 className="text-2xl text-brand-light font-medium mb-4">Our Mission</h2>
        <p className="text-brand-gray leading-relaxed mb-6">
          Astra is built to connect you with the cosmos using the power of ancient astrology combined with modern artificial intelligence. 
          Kloe, our AI astrologer, analyzes complex planetary alignments to provide you with insights that feel profoundly personal and timely.
        </p>

        <h2 className="text-2xl text-brand-light font-medium mb-4 mt-8">SEO & Content Focus</h2>
        <p className="text-brand-gray leading-relaxed mb-6">
          We believe in democratizing access to self-discovery tools. Our platform provides rich, optimized content for individuals seeking answers to lifelong questions regarding love, career, and personal growth.
        </p>
      </div>
    </div>
  );
}
