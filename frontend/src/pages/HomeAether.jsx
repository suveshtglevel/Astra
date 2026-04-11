import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import TrustQuestionsSection from '../components/home/TrustQuestionsSection';
import ArchetypeSection from '../components/home/ArchetypeSection';
import CosmicWeatherSection from '../components/home/CosmicWeatherSection';
import InlineLeadForm from '../components/home/InlineLeadForm';
import AnimatedText from '../components/ui/AnimatedText';
import useSEO from '../hooks/useSEO';

export default function HomeAether() {
  useSEO('Home');

  // Ensure the page scrolls from the top upon mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex-1 flex flex-col items-center">
      <div className="w-full max-w-[1440px] mx-auto">
         <HeroSection />
         <TrustQuestionsSection />
         <ArchetypeSection />
         <CosmicWeatherSection />
         <InlineLeadForm />
      </div>
    </div>
  );
}
