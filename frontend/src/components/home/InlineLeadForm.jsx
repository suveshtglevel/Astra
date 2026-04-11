import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CosmicLoader from '../ui/CosmicLoader';

export default function InlineLeadForm() {
  const navigate = useNavigate();
  const [isCalculating, setIsCalculating] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsCalculating(true);
  };

  const handleLoaderComplete = () => {
    setIsCalculating(false);
    navigate('/register');
  };

  return (
    <>
      <CosmicLoader isVisible={isCalculating} onComplete={handleLoaderComplete} />
      <section className="w-full py-12 md:py-16 px-6 md:px-12 flex items-center justify-center relative z-10">
      <div className="max-w-4xl w-full text-center flex flex-col items-center">
        <h3 className="text-white/50 text-xs md:text-sm tracking-[0.2em] uppercase mb-6 font-medium">
          Looking 4 a sign? Cast your chart & get your horoscope by email &gt;
        </h3>
        
        <form onSubmit={handleSubmit} className="w-full">
          <div className="text-xl md:text-3xl text-white font-serif leading-relaxed md:leading-loose">
            I was born in 
            <input 
              type="text" 
              placeholder="a city" 
              className="mx-3 inline-block bg-transparent border-b border-[#E7C36A]/50 border-dotted text-[#E7C36A] placeholder:text-[#E7C36A]/30 focus:outline-none focus:border-[#E7C36A] w-32 md:w-48 text-center"
              required
            />
            on 
            <input 
              type="date" 
              className="mx-3 inline-block bg-transparent border-b border-[#E7C36A]/50 border-dotted text-[#E7C36A] focus:outline-none text-sm md:text-lg focus:border-[#E7C36A] w-36 md:w-48 text-center"
              required
            />
            at 
            <input 
              type="time" 
              className="mx-3 inline-block bg-transparent border-b border-[#E7C36A]/50 border-dotted text-[#E7C36A] focus:outline-none text-sm md:text-lg focus:border-[#E7C36A] w-24 md:w-32 text-center"
              required
            />
            .<br className="hidden md:block" />
            <span className="md:ml-4">My email is</span>
            <input 
              type="email" 
              placeholder="email address" 
              className="mx-3 inline-block bg-transparent border-b border-[#E7C36A]/50 border-dotted text-[#E7C36A] placeholder:text-[#E7C36A]/30 focus:outline-none focus:border-[#E7C36A] w-56 md:w-80 text-center"
              required
            />
            .
          </div>
          
          <div className="mt-8">
            <button 
              type="submit" 
              disabled={isCalculating}
              className="bg-white hover:bg-gray-200 text-black text-xs md:text-sm tracking-[0.15em] font-mono uppercase px-12 py-4 transition-colors disabled:opacity-50"
            >
              {isCalculating ? 'Casting...' : 'Get Ur Chart'}
            </button>
          </div>
        </form>
      </div>
    </section>
    </>
  );
}
