import React, { useState, useRef, useEffect } from 'react';
import { Send, Zap, Heart, Activity, PlayCircle, Lock, Star, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import useSEO from '../hooks/useSEO';
import MagneticCard from '../components/ui/MagneticCard';
import { api } from '../services/api';
import { useAuth } from '../AuthContext';

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
  const { user } = useAuth();
  
  const [tokens, setTokens] = useState(7);
  const [messages, setMessages] = useState([]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isLoadingHistory, setIsLoadingHistory] = useState(true);
  const [showAdModal, setShowAdModal] = useState(false);
  const [adProgress, setAdProgress] = useState(0);
  
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Load history on mount
    const fetchHistory = async () => {
      try {
        const history = await api.getHistory();
        if (history && history.length > 0) {
          const formattedHistory = history.map((msg, index) => ({
            id: index,
            sender: msg.role === 'user' ? 'user' : 'klue',
            text: msg.text
          }));
          setMessages(formattedHistory);
        } else {
          // Welcome message if no history
          setMessages([
            {
              id: 'welcome',
              sender: 'klue',
              text: `Namaste ${user?.name || ''}. You are not alone. Everyone who has reached this point had one question they could not ask... Ask Klue.`
            }
          ]);
        }
      } catch (err) {
        console.error('Failed to fetch history', err);
      } finally {
        setIsLoadingHistory(false);
      }
    };

    fetchHistory();
  }, [user]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleAsk = async (questionText) => {
    if (tokens <= 0) return;
    
    // Add user message locally first
    const userMsgId = Date.now();
    const newMsg = { id: userMsgId, sender: 'user', text: questionText };
    setMessages(prev => [...prev, newMsg]);
    setInputVal('');
    setTokens(prev => prev - 1);
    setIsTyping(true);

    try {
      // Call backend
      const response = await api.sendMessage(questionText);
      
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        sender: 'klue',
        text: response.reply
      }]);
    } catch (err) {
      console.error('AI Error:', err);
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        sender: 'klue',
        text: "The stars are a bit cloudy right now. Please try asking again in a moment."
      }]);
    }
  };

  const handleSendSubmit = (e) => {
    e.preventDefault();
    if (!inputVal.trim() || isTyping) return;
    handleAsk(inputVal);
  };

  const startAd = () => {
    setShowAdModal(true);
    setAdProgress(0);
    
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
        return prev + 5;
      });
    }, 150);
  };

  return (
    <div className="min-h-[85vh] py-24 px-4 md:px-8 max-w-5xl mx-auto relative z-10 pt-32 w-full flex flex-col gap-8">
      
      {/* Top Section: Stats & Tokens */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-serif">Your Cosmic Alignment</h2>
            <div className="px-3 py-1 bg-[#E7C36A]/20 border border-[#E7C36A]/30 rounded-full text-[#E7C36A] text-xs font-bold uppercase tracking-wider">
              Updated Today
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {SCORES.map((score, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="50%" cy="50%" r="45%" className="stroke-white/10 fill-none" strokeWidth="4" />
                    <motion.circle 
                      cx="50%" cy="50%" r="45%" 
                      className="fill-none" 
                      stroke={score.color} 
                      strokeWidth="4" 
                      strokeDasharray="283" 
                      initial={{ strokeDashoffset: 283 }}
                      animate={{ strokeDashoffset: 283 - (283 * score.value) / 100 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                  </svg>
                  <score.icon className="absolute text-white/80" size={20} />
                </div>
                <span className="text-[10px] md:text-xs text-white/50 font-medium uppercase tracking-widest">{score.label}</span>
                <span className="text-sm font-bold text-[#E7C36A]">{score.value}%</span>
              </div>
            ))}
          </div>
        </div>

        <MagneticCard className="bg-[#E7C36A] text-black rounded-3xl p-6 flex flex-col justify-between overflow-hidden relative group">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-1">
              <Star size={16} fill="black" />
              <span className="text-[10px] font-black uppercase tracking-widest">Question Tokens</span>
            </div>
            <h3 className="text-5xl font-black">{tokens}</h3>
            <p className="text-[10px] mt-2 font-medium leading-relaxed opacity-70">Remaining questions for today's reading.</p>
          </div>
          
          <button 
            onClick={startAd}
            className="mt-4 relative z-10 w-full py-3 bg-black text-[#E7C36A] rounded-xl text-xs font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform active:scale-95"
          >
            <PlayCircle size={14} /> Get 5 Free Tokens
          </button>

          <Star className="absolute -bottom-8 -right-8 opacity-10 group-hover:scale-110 transition-transform" size={150} />
        </MagneticCard>
      </div>

      {/* Main Chat Interface */}
      <div className="flex-grow flex flex-col bg-[#0b0c10]/80 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl backdrop-blur-xl h-[600px]">
        {/* Chat Header */}
        <div className="px-8 py-4 border-bottom border-white/5 flex items-center justify-between bg-white/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#E7C36A] to-[#ff7eb3] flex items-center justify-center font-serif text-black font-bold">K</div>
            <div>
              <h3 className="text-sm font-bold tracking-tight">Klue AI</h3>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] text-white/40 font-medium uppercase tracking-widest">Online Alignment</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="p-2 hover:bg-white/5 rounded-lg transition-colors cursor-pointer text-white/30">
              <Activity size={18} />
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-grow overflow-y-auto p-6 md:p-8 space-y-6 scrollbar-hide">
          {isLoadingHistory ? (
            <div className="h-full flex items-center justify-center">
              <Loader2 className="animate-spin text-[#E7C36A]" size={32} />
            </div>
          ) : (
            <AnimatePresence initial={false}>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[85%] md:max-w-[70%] p-4 md:p-5 rounded-3xl text-sm leading-relaxed shadow-lg ${
                      msg.sender === 'user' 
                        ? 'bg-[#E7C36A] text-black rounded-tr-none font-medium' 
                        : 'bg-white/5 border border-white/10 text-white/90 rounded-tl-none backdrop-blur-sm'
                    }`}
                  >
                    {msg.text}
                    
                    {msg.isCard && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mt-4 p-6 bg-gradient-to-b from-white/10 to-transparent border border-white/20 rounded-2xl text-center flex flex-col items-center gap-3"
                      >
                        <div className="w-12 h-20 border-2 border-[#E7C36A] rounded-lg flex items-center justify-center">
                          <Star className="text-[#E7C36A] animate-pulse" size={24} />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#E7C36A]">{msg.cardTitle}</span>
                        <p className="text-[11px] text-white/40 italic">A rare drawing from the Great Arcana</p>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/5 border border-white/10 p-4 rounded-3xl rounded-tl-none flex gap-1.5 items-center">
                    <span className="w-1.5 h-1.5 bg-[#E7C36A] rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 bg-[#E7C36A] rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 bg-[#E7C36A] rounded-full animate-bounce" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-6 md:p-8 bg-white/5 border-t border-white/5 backdrop-blur-md">
          {messages.length === 1 && !isLoadingHistory && (
            <div className="flex flex-wrap gap-2 mb-6 justify-center">
              {SUGGESTED_QUESTIONS.map((q, i) => (
                <button 
                  key={i} 
                  onClick={() => handleAsk(q)}
                  className="px-4 py-2 bg-white/5 hover:bg-[#E7C36A]/10 border border-white/10 hover:border-[#E7C36A]/30 rounded-full text-[11px] text-white/50 hover:text-[#E7C36A] transition-all active:scale-95"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          <form onSubmit={handleSendSubmit} className="relative flex items-center gap-3">
            <div className="relative flex-grow group">
              <input 
                type="text" 
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder={tokens > 0 ? "Whisper your query to the cosmos..." : "No tokens left..."}
                disabled={tokens <= 0 || isTyping}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-6 pr-14 text-sm outline-none focus:border-[#E7C36A]/50 focus:bg-white/10 transition-all placeholder:text-white/20 disabled:opacity-50"
              />
              <button 
                type="submit"
                disabled={!inputVal.trim() || tokens <= 0 || isTyping}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#E7C36A] hover:bg-[#d4b360] disabled:bg-white/5 disabled:text-white/20 text-black rounded-xl flex items-center justify-center transition-all active:scale-90"
              >
                {isTyping ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
              </button>
            </div>
          </form>
          <p className="text-center text-[10px] text-white/20 mt-4 uppercase tracking-[0.2em] font-medium">Your data is secured by celestial encryption</p>
        </div>
      </div>

      {/* Ad Modal */}
      <AnimatePresence>
        {showAdModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-2xl bg-black/80"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-[#0b0c10] border border-[#E7C36A]/30 rounded-[3rem] p-12 max-w-md w-full text-center relative overflow-hidden shadow-[0_0_100px_rgba(231,195,106,0.1)]"
            >
              <div className="relative z-10">
                <div className="w-20 h-20 bg-[#E7C36A]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <PlayCircle className="text-[#E7C36A]" size={40} />
                </div>
                <h3 className="text-2xl font-serif mb-2">Aligning with the Stars</h3>
                <p className="text-white/40 text-sm mb-8 leading-relaxed">Please wait while we recalibrate your cosmic frequency...</p>
                
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden mb-2">
                  <motion.div 
                    className="h-full bg-[#E7C36A]" 
                    initial={{ width: 0 }}
                    animate={{ width: `${adProgress}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-white/20 font-black uppercase tracking-widest">
                  <span>Recalibrating</span>
                  <span>{adProgress}%</span>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#E7C36A]/5 to-transparent pointer-events-none" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
