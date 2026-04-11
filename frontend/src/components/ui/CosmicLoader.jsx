import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CosmicLoader({ isVisible, onComplete }) {
  const messages = [
    "Aligning planetary coordinates...",
    "Calculating Moon in Scorpio...",
    "Synthesizing cosmic blueprint..."
  ];
  
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    setMsgIndex(0);
    const intervals = [
      setTimeout(() => setMsgIndex(1), 1200),
      setTimeout(() => setMsgIndex(2), 2400),
      setTimeout(() => onComplete(), 3600)
    ];

    return () => intervals.forEach(clearTimeout);
  }, [isVisible, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#05060b]/95 backdrop-blur-md"
        >
          {/* Spinning Wheel */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            className="w-32 h-32 md:w-48 md:h-48 rounded-full border border-[#E7C36A]/20 flex items-center justify-center relative shadow-[0_0_50px_rgba(231,195,106,0.1)]"
          >
            <div className="absolute inset-2 rounded-full border border-dashed border-[#E7C36A]/40" />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              className="absolute inset-6 rounded-full border border-[#E7C36A]/60 flex items-center justify-center"
            >
              <div className="w-12 h-12 bg-[#E7C36A] shadow-[0_0_20px_#E7C36A] rounded-full flex items-center justify-center isolate">
                 <div className="w-8 h-8 rounded-full bg-black/40 blur-[2px]" />
              </div>
            </motion.div>
          </motion.div>

          {/* Text Messages */}
          <div className="h-8 mt-12 overflow-hidden flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={msgIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-[#E7C36A] font-serif tracking-[0.1em] text-lg text-center"
              >
                {messages[msgIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
