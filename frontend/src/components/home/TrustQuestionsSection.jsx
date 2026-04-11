import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from '../ui/AnimatedText';

export default function TrustQuestionsSection() {
  const options = ['No', 'Yes', 'Big Yes', 'Definitely Yes'];

  return (
    <section className="py-24 px-8 relative z-10 w-full" id="questions">
      <div className="max-w-4xl mx-auto flex flex-col gap-16">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-[#0b0c10]/80 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-[#E7C36A]/30 shadow-[0_0_30px_rgba(231,195,106,0.05)] relative overflow-hidden"
        >
          <h2 className="text-2xl md:text-3xl font-serif text-white/90 mb-10 tracking-widest uppercase">
            <AnimatedText text="Have you ever taken a decision & wondered..." />
          </h2>
          <div className="flex flex-col gap-4">
            {options.map((opt, i) => (
              <motion.button 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.3, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.02, x: 10 }}
                whileTap={{ scale: 0.98 }}
                className="group text-left px-6 py-4 rounded-xl border border-white/10 hover:border-[#E7C36A]/40 hover:bg-[#E7C36A]/5 text-lg flex items-center gap-4 transition-all duration-300 shadow-sm"
              >
                <div className="w-5 h-5 rounded-full border border-[#E7C36A]/50 group-hover:border-[#E7C36A] flex items-center justify-center shrink-0 transition-colors">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    className="w-2.5 h-2.5 bg-[#E7C36A] rounded-full"
                  />
                </div>
                <span className="font-serif text-white/80 group-hover:text-[#E7C36A] transition-colors">{opt}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl text-white/70 font-light italic text-center space-y-8 px-4"
        >
          <p className="transition-all hover:text-white hover:-translate-y-1 block">"Have you ever googled why does this keep happening to me? at 3 am!"</p>
          <p className="text-[#E7C36A]/90 transition-all hover:text-[#E7C36A] hover:-translate-y-1 block">"Have you ever felt like certain people entered and exited your life at exactly right moment?"</p>
          <p className="transition-all hover:text-white hover:-translate-y-1 block">"Have you ever wondered when will your life shift direction?"</p>
        </motion.div>

      </div>
    </section>
  );
}
