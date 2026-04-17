import React, { useState } from 'react';
import { Mail, Lock, Sparkles, CheckCircle2, User, Loader2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import useSEO from '../hooks/useSEO';
import { useAuth } from '../AuthContext';

export default function Register() {
  useSEO('Register');
  const navigate = useNavigate();
  const { register, login } = useAuth();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    rashi: '',
    planet: '',
    element: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const { name, email, password, rashi, planet, element } = formData;
      await register({
        name,
        email,
        password,
        astrologyData: { rashi, planet, element }
      });
      
      // Automatically login after registration
      await login({ email, password });
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Registration failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-6 py-20 relative z-10 pt-32">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Pitch */}
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
            </ul>
          </div>
        </div>

        {/* Right Side: Register Form */}
        <div className="bg-[#0b0c10] border border-[#E7C36A]/20 rounded-3xl p-8 shadow-2xl order-1 md:order-2">
          <h2 className="text-2xl font-serif text-white text-center mb-8">Create an Account</h2>
          
          <div className="space-y-4">
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-500 text-sm p-3 rounded-xl text-center">
                {error}
              </div>
            )}

            <form className="space-y-4" onSubmit={handleAuth}>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-white/50" />
                </div>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white/5 border border-white/10 text-white outline-none rounded-xl block w-full pl-10 p-3.5 focus:border-[#E7C36A] transition-colors placeholder:text-white/30" 
                  placeholder="Full Name" 
                  required
                />
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-white/50" />
                </div>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white/5 border border-white/10 text-white outline-none rounded-xl block w-full pl-10 p-3.5 focus:border-[#E7C36A] transition-colors placeholder:text-white/30" 
                  placeholder="name@email.com" 
                  required
                />
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-white/50" />
                </div>
                <input 
                  type="password" 
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="bg-white/5 border border-white/10 text-white outline-none rounded-xl block w-full pl-10 p-3.5 focus:border-[#E7C36A] transition-colors placeholder:text-white/30" 
                  placeholder="Password (min 6 chars)" 
                  required
                  minLength={6}
                />
              </div>

              <div className="grid grid-cols-3 gap-2">
                <input 
                  type="text" 
                  name="rashi"
                  value={formData.rashi}
                  onChange={handleChange}
                  className="bg-white/5 border border-white/10 text-white text-xs outline-none rounded-xl p-3 focus:border-[#E7C36A] transition-colors placeholder:text-white/30" 
                  placeholder="Rashi" 
                />
                <input 
                  type="text" 
                  name="planet"
                  value={formData.planet}
                  onChange={handleChange}
                  className="bg-white/5 border border-white/10 text-white text-xs outline-none rounded-xl p-3 focus:border-[#E7C36A] transition-colors placeholder:text-white/30" 
                  placeholder="Planet" 
                />
                <input 
                  type="text" 
                  name="element"
                  value={formData.element}
                  onChange={handleChange}
                  className="bg-white/5 border border-white/10 text-white text-xs outline-none rounded-xl p-3 focus:border-[#E7C36A] transition-colors placeholder:text-white/30" 
                  placeholder="Element" 
                />
              </div>

              <button 
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#E7C36A] hover:bg-[#d4b360] text-black font-bold py-3.5 rounded-xl transition-colors flex justify-center items-center gap-2 disabled:opacity-50"
              >
                {isLoading ? <Loader2 className="animate-spin" size={18} /> : <Sparkles size={18} />} 
                {isLoading ? 'Creating Account...' : 'Secure Sign Up'}
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
