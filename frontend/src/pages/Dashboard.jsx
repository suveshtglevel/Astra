import React, { useState, useRef, useEffect } from 'react';
import { Send, Zap, Heart, Activity, PlayCircle, Lock, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import useSEO from '../hooks/useSEO';
import MagneticCard from '../components/ui/MagneticCard';

// Dummy Scores
const SCORES = [
  { label: 'Productivity', value: 85, icon: Zap, color: '#E7C36A' },
  { label: 'Happiness', value: 92, icon: Heart, color: '#ff7eb3' },
  { label: 'Fitness', value: 78, icon: Activity, color: '#4ade80' }
];

const SUGGESTED_QUESTIONS = [
  "Why does this situation happen to me?",
  "Is this person meant to be in my life?",
  "When will things go my way?"
];

export default function Dashboard() {
  useSEO('Dashboard | Ask Klue');
  
  const [tokens, setTokens] = useState(7);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'klue',
      text: "You are not alone. Everyone who has reached this point had one question they could not ask... Ask Klue."
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showAdModal, setShowAdModal] = useState(false);
  const [adProgress, setAdProgress] = useState(0);
  
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleAsk = (questionText) => {
    if (tokens <= 0) return;
    
    // Add user message
    const newMsg = { id: Date.now(), sender: 'user', text: questionText };
    setMessages(prev => [...prev, newMsg]);
    setInputVal('');
    setTokens(prev => prev - 1);
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      setIsTyping(false);
      const isOracleCard = Math.random() > 0.3; // 70% chance to draw a card
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        sender: 'klue',
        text: isOracleCard 
          ? "The cosmos reveals that patience is currently your greatest alignment. The stars indicate a shift in your 5th house soon." 
          : "I sense a strong blockage in your communication sector. Focus on throat chakra meditations to clear this path.",
        isCard: isOracleCard,
        cardTitle: isOracleCard ? "The Cosmic Wheel" : null
      }]);
    }, 1500);
  };

  const handleSendSubmit = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    handleAsk(inputVal);
  };

  const startAd = () => {
    setShowAdModal(true);
    setAdProgress(0);
    
    // Simulate 3 second ad
    const interval = setInterval(() => {
      setAdProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setShowAdModal(false);
            setTokens(prevTokens => prevTokens + 5);
          }, 500);
          return 100;
        }
        return prev + 5; // 5% every 150ms = 3 seconds total
      });
    }, 150);
  };

  return (
    <div className="min-h-[85vh] py-24 px-4 md:px-8 max-w-5xl mx-auto relative z-10 pt-32 w-full flex flex-col gap-8">
      
      {/* Top Scores Header */}
      <div className="grid grid-cols-3 gap-4 md:gap-8">
        {SCORES.map((score, i) => (
          <MagneticCard key={i} className="bg-[#0b0c10] border border-white/10 rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center text-center shadow-lg transition-colors hover:border-white/20">
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ background: `radial-gradient(circle at center, ${score.color} 0%, transparent 70%)` }} />
            <score.icon className="w-6 h-6 mb-3 z-10" style={{ color: score.color }} />
            <span className="text-3xl font-bold font-serif mb-1 z-10" style={{ color: score.color }}>{score.value}</span>
            <span className="text-xs tracking-widest uppercase text-white/50 z-10">{score.label}</span>
          </MagneticCard>
        ))}
      </div>

      {/* Main Chat Interface */}
      <div className="flex-1 bg-[#0b0c10] border border-white/10 rounded-3xl overflow-hidden flex flex-col shadow-2xl relative min-h-[500px]">
        
        {/* Token Header */}
        <div className="bg-white/5 px-6 py-4 border-b border-white/10 flex justify-between items-center z-10 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="relative w-3 h-3 flex items-center justify-center">
              <motion.div 
                 animate={{ 
                   scale: isTyping ? [1, 1.5, 1] : 1,
                   backgroundColor: isTyping ? ['#b485ff', '#E7C36A', '#b485ff'] : '#4ade80',
                   boxShadow: isTyping 
                     ? ['0 0 15px #b485ff', '0 0 25px #E7C36A', '0 0 15px #b485ff'] 
                     : '0 0 10px #4ade80'
                 }}
                 transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute inset-0 rounded-full"
              />
              <div className="w-1.5 h-1.5 rounded-full bg-white z-10 mix-blend-overlay" />
            </div>
            <span className="font-serif text-white">Klue {isTyping && <span className="text-xs text-white/40 font-sans tracking-widest ml-1 animate-pulse">syncing...</span>}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-3 py-1 rounded-full border border-[#E7C36A]/50 bg-[#E7C36A]/10 text-[#E7C36A] text-xs font-bold tracking-wider">
              {tokens} QUESTIONS LEFT
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map(msg => (
            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.isCard ? (
                <div style={{ perspective: 1000 }} className="mr-8">
                  <motion.div
                    initial={{ rotateY: -90, opacity: 0, scale: 0.8 }}
                    animate={{ rotateY: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                    className="w-[280px] max-w-[80vw] bg-gradient-to-br from-[#1A112B] to-[#0A0710] border border-[#E7C36A]/40 rounded-2xl p-6 shadow-[0_0_30px_rgba(231,195,106,0.15)] flex flex-col items-center text-center relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#E7C36A]/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#b485ff]/10 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2" />
                    
                    <div className="w-20 h-28 border border-dashed border-[#E7C36A]/30 rounded mb-5 flex items-center justify-center relative bg-[#E7C36A]/5">
                       <Star className="w-8 h-8 text-[#E7C36A]/60" />
                       <div className="absolute inset-2 border border-[#E7C36A]/10 rounded-sm"></div>
                    </div>
                    
                    <h4 className="font-serif text-[#E7C36A] text-xl mb-3">{msg.cardTitle}</h4>
                    <p className="text-white/80 text-sm font-sans leading-relaxed">{msg.text}</p>
                  </motion.div>
                </div>
              ) : (
                <div className={`max-w-[80%] rounded-2xl px-6 py-4 ${
                  msg.sender === 'user' 
                    ? 'bg-[#E7C36A] text-black rounded-tr-sm' 
                    : 'bg-white/5 text-white/90 border border-white/10 rounded-tl-sm'
                }`}>
                  <p className="leading-relaxed">{msg.text}</p>
                </div>
              )}
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm px-6 py-4 flex items-center gap-2">
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, delay: 0 }} className="w-2 h-2 bg-[#E7C36A] rounded-full" />
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, delay: 0.2 }} className="w-2 h-2 bg-[#E7C36A] rounded-full" />
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, delay: 0.4 }} className="w-2 h-2 bg-[#E7C36A] rounded-full" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Questions */}
        {tokens > 0 && messages.length <= 2 && (
          <div className="px-6 pb-4 flex flex-wrap gap-2">
            {SUGGESTED_QUESTIONS.map((q, i) => (
              <button 
                key={i}
                onClick={() => handleAsk(q)}
                className="text-xs bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#E7C36A]/50 text-white/70 px-4 py-2 rounded-full transition-colors truncate max-w-full"
              >
                {q}
              </button>
            ))}
          </div>
        )}

        {/* Input Area or Ad Overlay */}
        <div className="p-6 pt-2 bg-[#0b0c10] z-10 relative">
          {tokens > 0 ? (
            <form onSubmit={handleSendSubmit} className="relative flex items-center">
              <input
                type="text"
                value={inputVal}
                onChange={e => setInputVal(e.target.value)}
                placeholder="Ask Klue anything..."
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-6 pr-14 text-white outline-none focus:border-[#E7C36A] transition-colors placeholder:text-white/30"
              />
              <button 
                type="submit" 
                disabled={!inputVal.trim() || isTyping}
                className="absolute right-3 p-2 bg-[#E7C36A] text-black rounded-lg disabled:opacity-50 hover:bg-[#d4b360] transition-colors"
              >
                <Send size={18} />
              </button>
            </form>
          ) : (
            <div className="bg-[#140A2B] border border-[#E7C36A]/30 rounded-xl p-6 text-center shadow-lg">
              <Lock className="w-8 h-8 text-[#E7C36A] mx-auto mb-3" />
              <h3 className="text-xl font-serif text-white mb-2">You've reached your limit</h3>
              <p className="text-white/60 text-sm mb-6">Watch a short ad to unlock 5 more questions, or upgrade to Premium.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button 
                  onClick={startAd}
                  className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl transition-colors font-medium text-sm"
                >
                  <PlayCircle size={18} /> Watch Ad (+5 Questions)
                </button>
                <button className="flex items-center justify-center gap-2 bg-[#E7C36A] hover:bg-[#d4b360] text-black px-6 py-3 rounded-xl transition-colors font-medium text-sm">
                  <Zap size={18} /> Get Premium (₹99/mo)
                </button>
              </div>
            </div>
          )}
        </div>

      </div>

      {/* Ad Modal Simulator */}
      <AnimatePresence>
        {showAdModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          >
            <div className="bg-[#0b0c10] border border-white/10 rounded-2xl p-8 max-w-md w-full text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 h-1 bg-[#E7C36A]" style={{ width: `${adProgress}%`, transition: 'width 0.15s linear' }} />
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/10">
                <span className="text-2xl font-bold font-serif text-white/50">AD</span>
              </div>
              <h3 className="text-xl text-white font-medium mb-2">Google Ads Sponsored Video</h3>
              <p className="text-white/50 text-sm mb-8">Please wait while we unlock your questions...</p>
              
              <div className="text-[#E7C36A] font-mono text-sm">
                Unlocking in {Math.ceil((100 - adProgress) / 33)}s
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
