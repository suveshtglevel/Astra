import React from 'react';
import { Mail, Lock, Sparkles, CheckCircle2, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import useSEO from '../hooks/useSEO';

export default function Register() {
  useSEO('Register');
  const navigate = useNavigate();

  const handleAuth = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-6 py-20 relative z-10 pt-32">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Business Model / Pricing Pitch */}
        <div className="flex flex-col gap-6 order-2 md:order-1">
          <div className="mb-4">
            <Sparkles className="text-[#E7C36A] h-8 w-8 mb-4" />
            <h1 className="text-3xl md:text-4xl font-serif text-white">Unlock Your Destiny</h1>
            <p className="text-white/60 mt-2 font-light">Join Klue to get your comprehensive astrological analysis.</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#E7C36A] text-black text-xs font-bold px-3 py-1 rounded-bl-lg">Most Popular</div>
            <h3 className="text-xl font-medium text-white mb-2">Premium Star Tier</h3>
            <div className="text-3xl font-bold text-[#E7C36A] mb-4">₹ 99 <span className="text-sm font-normal text-white/50">/ month</span></div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <CheckCircle2 size={18} className="text-[#E7C36A] shrink-0" />
                Readings & Chart Access
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <CheckCircle2 size={18} className="text-[#E7C36A] shrink-0" />
                7 Questions Free upon Login
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <CheckCircle2 size={18} className="text-[#E7C36A] shrink-0" />
                25 Free Questions / Month
              </li>
            </ul>
          </div>

        </div>

        {/* Right Side: Register Form */}
        <div className="bg-[#0b0c10] border border-[#E7C36A]/20 rounded-3xl p-8 shadow-2xl order-1 md:order-2">
          <h2 className="text-2xl font-serif text-white text-center mb-8">Create an Account</h2>
          
          <div className="space-y-4">
            <button type="button" onClick={handleAuth} className="w-full flex items-center justify-center gap-3 bg-white text-black font-medium py-3.5 rounded-xl hover:bg-gray-100 transition-colors">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
              Sign up with Google
            </button>
            
            <div className="relative flex py-4 items-center">
              <div className="flex-grow border-t border-white/10"></div>
              <span className="flex-shrink-0 mx-4 text-white/50 text-xs">or using email</span>
              <div className="flex-grow border-t border-white/10"></div>
            </div>

            <form className="space-y-4" onSubmit={handleAuth}>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-white/50" />
                </div>
                <input 
                  type="text" 
                  className="bg-white/5 border border-white/10 text-white outline-none rounded-xl block w-full pl-10 p-3.5 focus:border-[#E7C36A] transition-colors placeholder:text-white/30" 
                  placeholder="Full Name" 
                />
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-white/50" />
                </div>
                <input 
                  type="email" 
                  className="bg-white/5 border border-white/10 text-white outline-none rounded-xl block w-full pl-10 p-3.5 focus:border-[#E7C36A] transition-colors placeholder:text-white/30" 
                  placeholder="name@email.com" 
                />
              </div>
              <button className="w-full bg-[#E7C36A] hover:bg-[#d4b360] text-black font-bold py-3.5 rounded-xl transition-colors flex justify-center items-center gap-2">
                <Lock size={18} /> Secure Sign Up
              </button>
            </form>
          </div>
          
          <p className="text-center text-sm text-white/50 mt-8">
            Already have an account? <Link to="/login" className="text-[#E7C36A] hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
