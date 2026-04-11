import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AppBootLoader({ onComplete }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // 0: Initial
    // 1: Eclipse Starts Translating
    // 2: Totality Flash & Klue Logo
    // 3: Dissolve everything
    const timers = [
      setTimeout(() => setPhase(1), 200),
      setTimeout(() => setPhase(2), 1600),
      setTimeout(() => setPhase(3), 2600),
      setTimeout(() => onComplete(), 3300),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 3 && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] bg-[#05060b] flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="relative flex items-center justify-center w-full h-full">
            {/* Outer Sun ring */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: phase > 0 ? 1 : 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute border-[1.5px] border-[#E7C36A] rounded-full w-48 h-48 sm:w-64 sm:h-64 shadow-[0_0_80px_rgba(231,195,106,0.2)]"
            />
            
            {/* Black Moon traversing */}
            <motion.div
              initial={{ x: -250 }}
              animate={{ x: phase >= 1 ? 0 : -250 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              className="absolute rounded-full w-[12.5rem] h-[12.5rem] sm:w-[16.5rem] sm:h-[16.5rem] bg-[#05060b]"
            />

            {/* Totality Flash & Text */}
            <AnimatePresence>
              {phase === 2 && (
                <>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(231,195,106,0.1)_0%,transparent_40%)] pointer-events-none"
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 15, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    className="absolute z-10 flex flex-col items-center"
                  >
                    <h1 className="text-white font-serif text-3xl tracking-[0.4em] uppercase mb-2">
                      Klue
                    </h1>
                    <div className="h-[1px] w-12 bg-[#E7C36A] mx-auto shadow-[0_0_10px_#E7C36A]" />
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
