import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  { question: "How accurate is Kloe, the AI astrologer?", answer: "Kloe uses precise planetary ephemeris data combined with deep learning to interpret your chart accurately based on traditional astrological rules." },
  { question: "What is a birth chart?", answer: "A birth chart, or natal chart, is a snapshot of the sky at the exact moment you were born. It shows the positions of the planets and gives insight into your personality and life path." },
  { question: "Do I need to know my exact birth time?", answer: "Knowing your exact birth time is highly recommended for an accurate Lagna (Ascendant) and house placements. Without it, some specific timeline predictions may be less precise." },
  { question: "How does the subscription work?", answer: "When you sign up, you get 7 free questions. For ₹99/month, you receive 25 new questions every month. You can also watch ads to get an extra 5 questions for free." },
  { question: "Can I cancel my subscription?", answer: "Yes, you can cancel your Premium Star Tier subscription at any time from your account settings." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="min-h-screen py-24 px-6 md:px-12 max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-serif text-gradient mb-4 text-center">Frequently Asked Questions</h1>
      <p className="text-brand-gray text-center mb-12">Find answers to the most common questions about our platform and astrology.</p>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-all duration-300">
            <button 
              className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
              onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
            >
              <h3 className="text-lg font-medium text-brand-light">{item.question}</h3>
              {index === openIndex ? <ChevronUp className="text-brand-primary" /> : <ChevronDown className="text-brand-gray" />}
            </button>
            
            {index === openIndex && (
              <div className="px-6 pb-5">
                <p className="text-brand-gray/80 leading-relaxed">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
