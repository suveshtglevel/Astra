import React from 'react';
import { Mail, Phone, Lock, Sparkles, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-bg px-6 py-12">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Business Model / Pricing Pitch */}
        <div className="flex flex-col gap-6 order-2 md:order-1">
          <div className="mb-4">
            <Sparkles className="text-brand-primary h-8 w-8 mb-4" />
            <h1 className="text-3xl md:text-4xl font-serif text-brand-light">Unlock Your Destiny</h1>
            <p className="text-brand-gray mt-2 font-light">Join Kloe to get your comprehensive astrological analysis.</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-brand-primary text-brand-bg text-xs font-bold px-3 py-1 rounded-bl-lg">Most Popular</div>
            <h3 className="text-xl font-medium text-brand-light mb-2">Premium Star Tier</h3>
            <div className="text-3xl font-bold text-gradient mb-4">₹ 99 <span className="text-sm font-normal text-brand-gray">/ month</span></div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-sm text-brand-gray">
                <CheckCircle2 size={18} className="text-brand-secondary shrink-0" />
                Readings & Chart Access
              </li>
              <li className="flex items-start gap-3 text-sm text-brand-gray">
                <CheckCircle2 size={18} className="text-brand-secondary shrink-0" />
                7 Questions Free upon Login
              </li>
              <li className="flex items-start gap-3 text-sm text-brand-gray">
                <CheckCircle2 size={18} className="text-brand-secondary shrink-0" />
                25 Free Questions / Month
              </li>
              <li className="flex items-start gap-3 text-sm text-brand-gray">
                <CheckCircle2 size={18} className="text-brand-secondary shrink-0" />
                Watch Ad to unlock 5 extra questions
              </li>
            </ul>
          </div>

        </div>

        {/* Right Side: Login Form (No go back) */}
        <div className="bg-[#0d0a14] border border-brand-primary/20 rounded-3xl p-8 shadow-2xl order-1 md:order-2">
          <h2 className="text-2xl font-serif text-brand-light text-center mb-8">Login / Signup</h2>
          
          <div className="space-y-4">
            <button className="w-full flex items-center justify-center gap-3 bg-white text-black font-medium py-3.5 rounded-xl hover:bg-gray-100 transition-colors">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
              Continue with Google
            </button>
            <button className="w-full flex items-center justify-center gap-3 bg-[#0052cc] text-white font-medium py-3.5 rounded-xl hover:bg-[#0047b3] transition-colors">
              <Phone size={18} />
              Continue with Truecaller
            </button>
            
            <div className="relative flex py-4 items-center">
              <div className="flex-grow border-t border-white/10"></div>
              <span className="flex-shrink-0 mx-4 text-brand-gray text-xs">or using email</span>
              <div className="flex-grow border-t border-white/10"></div>
            </div>

            <form className="space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-brand-gray" />
                </div>
                <input 
                  type="email" 
                  className="bg-white/5 border border-white/10 text-brand-light outline-none rounded-xl block w-full pl-10 p-3.5 focus:border-brand-primary transition-colors" 
                  placeholder="name@email.com" 
                />
              </div>
              <button className="w-full bg-brand-primary hover:bg-brand-primary-dark text-brand-bg font-bold py-3.5 rounded-xl transition-colors flex justify-center items-center gap-2">
                <Lock size={18} /> Secure Login
              </button>
            </form>
          </div>
          
          {/* Note: The user requested "no option to go back". So no "back to home" link is here. */}
        </div>
      </div>
    </div>
  );
}
