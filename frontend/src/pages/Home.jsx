import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Sparkles, User, MapPin, Calendar, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6 relative">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="font-serif text-5xl md:text-7xl font-bold mb-6 text-gradient"
      >
        Your moments are already written in your stars.
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-lg md:text-2xl text-brand-light font-light max-w-2xl mb-12"
      >
        Your birth chart may reveal when the next one arrives.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="flex flex-col items-center gap-4 text-brand-gray absolute bottom-12"
      >
        <span className="text-sm tracking-widest uppercase">Scroll to uncover timeline</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="text-brand-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function TrustQuestionsSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-brand-bg/80 relative">
      <div className="max-w-3xl w-full flex flex-col gap-16">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white/5 p-8 rounded-2xl border border-brand-secondary/30 backdrop-blur-sm"
        >
          <h2 className="text-2xl md:text-3xl font-serif text-gradient mb-8">
            Have you ever taken a decision & wondered...
          </h2>
          <div className="flex flex-col gap-4">
            {['O yes', 'O A big yes', 'O Definitely definitely yes.'].map((opt, i) => (
              <button key={i} className="text-left px-6 py-4 rounded-xl border border-white/10 hover:border-brand-primary hover:bg-brand-primary/10 transition-colors text-brand-light text-lg flex items-center gap-4">
                <span className="w-4 h-4 rounded-full border border-brand-primary"></span>
                {opt}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="text-xl md:text-2xl text-brand-light/90 font-light italic text-center space-y-8">
            <p>"Have you ever googled why does this keep happening to me? at 3 am in night!"</p>
            <p className="text-brand-primary/80">"Have you ever felt like certain people entered and exited your life at exactly right moment?"</p>
            <p>"Have you ever wondered when will your life shift direction?"</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function FormSection({ onComplete }) {
  const [formData, setFormData] = useState({ name: '', place: '', date: '', time: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onComplete(formData);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-xl w-full bg-[#0d0a14] p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary to-brand-secondary"></div>
        <h2 className="text-3xl font-serif text-brand-light mb-2">Tell Kloe who you are</h2>
        <p className="text-brand-gray text-sm mb-8">We need your exact birth details to calculate your planetary alignments.</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 border-b border-white/20 pb-2 focus-within:border-brand-primary transition-colors">
              <User size={20} className="text-brand-gray" />
              <input required type="text" placeholder="I am (Name)" 
                className="bg-transparent border-none outline-none text-brand-light w-full placeholder:text-white/30"
                value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="flex items-center gap-3 border-b border-white/20 pb-2 focus-within:border-brand-primary transition-colors">
              <MapPin size={20} className="text-brand-gray" />
              <input required type="text" placeholder="Born in (Place)" 
                className="bg-transparent border-none outline-none text-brand-light w-full placeholder:text-white/30"
                value={formData.place} onChange={e => setFormData({...formData, place: e.target.value})}
              />
            </div>
            <div className="flex gap-4">
              <div className="flex-1 flex items-center gap-3 border-b border-white/20 pb-2 focus-within:border-brand-primary transition-colors">
                <Calendar size={20} className="text-brand-gray" />
                <input required type="date" 
                  className="bg-transparent border-none outline-none text-brand-light w-full placeholder:text-white/30"
                  value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})}
                />
              </div>
              <div className="flex-1 flex items-center gap-3 border-b border-white/20 pb-2 focus-within:border-brand-primary transition-colors">
                <Clock size={20} className="text-brand-gray" />
                <input required type="time" 
                  className="bg-transparent border-none outline-none text-brand-light w-full placeholder:text-white/30"
                  value={formData.time} onChange={e => setFormData({...formData, time: e.target.value})}
                />
              </div>
            </div>
          </div>

          <div className="text-xs text-brand-gray/60 flex items-start gap-2 mt-6">
            <Sparkles size={14} className="shrink-0 mt-0.5 text-brand-primary" />
            <p>Your data is safe with us. We use this only for astrological analysis and never share this data.</p>
          </div>

          <button type="submit" className="w-full mt-8 bg-brand-primary hover:bg-brand-primary-dark text-[#08060d] font-bold py-4 rounded-xl transition-colors text-lg">
            Read my chart
          </button>
        </form>
      </motion.div>
    </section>
  );
}

function LoadingSection({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [stepText, setStepText] = useState('Calculating your lagna...');

  useEffect(() => {
    const steps = [
      'Calculating your lagna...',
      'Reading mahadasha...',
      'Connecting the dots...',
      'Almost there...'
    ];
    
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 1;
      setProgress(currentProgress);
      
      if (currentProgress === 25) setStepText(steps[1]);
      if (currentProgress === 50) setStepText(steps[2]);
      if (currentProgress === 85) setStepText(steps[3]);

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(onDone, 500);
      }
    }, 40); // 4 seconds total
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
      <div className="max-w-md w-full flex flex-col items-center text-center">
        <Sparkles className="text-brand-secondary h-12 w-12 mb-6 animate-pulse" />
        <h2 className="text-2xl font-serif text-brand-light mb-12">Kloe is reading your chart...</h2>
        
        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-6">
          <div 
            className="h-full bg-gradient-to-r from-brand-primary to-brand-secondary transition-all duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="flex justify-between w-full text-brand-light font-mono text-sm mb-4">
          <span>0%</span>
          <span>{progress}%</span>
          <span>100%</span>
        </div>
        
        <p className="text-brand-gray animate-pulse text-sm">{stepText}</p>
      </div>
    </section>
  );
}

function ResultSection({ userData }) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full bg-[#0d0a14] border border-brand-primary/30 p-8 md:p-12 rounded-3xl"
      >
        <h2 className="text-3xl font-serif text-gradient mb-8">Hi {userData.name || 'Seeker'},</h2>
        <p className="text-lg text-brand-light mb-6">Here are your readings based on your birth alignment:</p>
        
        <div className="space-y-6 mb-10">
          <div className="p-4 bg-white/5 rounded-xl border-l-2 border-brand-secondary">
            <p className="text-brand-gray leading-relaxed text-sm">
              <span className="text-brand-light font-medium block mb-1">1. Your Core Identity</span>
              Your lagna indicates a strong intuitive sense. You often find yourself feeling situations rather than overthinking them.
            </p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl border-l-2 border-brand-primary">
            <p className="text-brand-gray leading-relaxed text-sm">
              <span className="text-brand-light font-medium block mb-1">2. Current Mahadasha</span>
              You are currently entering a phase of transformation. Old habits might feel restrictive.
            </p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl border-l-2 border-brand-secondary relative">
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0d0a14] flex items-end justify-center pb-2">
              <span className="text-brand-primary text-xs font-semibold tracking-wider">Premium Content Hidden</span>
            </div>
            <p className="text-brand-gray leading-relaxed text-sm blur-[2px]">
              <span className="text-brand-light font-medium block mb-1">3. Future Timeline</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center border-t border-white/10 pt-8 mt-4">
          <p className="text-brand-gray mb-4 text-center">To read your complete chart and ask questions, please log in.</p>
          <Link to="/login" className="bg-brand-secondary hover:bg-[#912ee6] text-white px-8 py-3 rounded-full font-bold transition-colors flex items-center gap-2">
            Read More <ChevronRight size={18} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default function Home() {
  const [formState, setFormState] = useState('idle'); // idle, loading, result
  const [userData, setUserData] = useState({});

  const handleFormComplete = (data) => {
    setUserData(data);
    setFormState('loading');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full flex-1 flex flex-col pb-20">
      {formState === 'idle' && (
        <>
          <HeroSection />
          <TrustQuestionsSection />
          <FormSection onComplete={handleFormComplete} />
        </>
      )}
      
      {formState === 'loading' && (
         <LoadingSection onDone={() => setFormState('result')} />
      )}

      {formState === 'result' && (
         <ResultSection userData={userData} />
      )}
    </div>
  );
}
