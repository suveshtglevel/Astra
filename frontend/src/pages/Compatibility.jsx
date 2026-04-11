import React from 'react';
import SynastrySection from '../components/home/SynastrySection';
import useSEO from '../hooks/useSEO';

export default function Compatibility() {
  useSEO('Cosmic Compatibility');
  return (
    <div className="min-h-screen pt-32 pb-12 w-full max-w-[1440px] mx-auto flex flex-col items-center">
      <SynastrySection />
    </div>
  );
}
