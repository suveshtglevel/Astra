import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import ArchetypeSection from '../components/home/ArchetypeSection';
import CosmicWeatherSection from '../components/home/CosmicWeatherSection';
import BlueprintSection from '../components/home/BlueprintSection';
import SynastrySection from '../components/home/SynastrySection';
import Footer from '../components/Footer';

export default function HomeAether() {
  // Ensure the page scrolls from the top upon mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex-1 flex flex-col items-center">
      <div className="w-full max-w-[1440px] mx-auto">
         <HeroSection />
         <ArchetypeSection />
         <CosmicWeatherSection />
         <BlueprintSection />
         <SynastrySection />
         <Footer />
      </div>
    </div>
  );
}
