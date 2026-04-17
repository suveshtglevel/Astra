import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Sparkles, Menu, LogOut } from 'lucide-react';
import { useAuth } from '../AuthContext';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const isLoginPage = location.pathname === '/login';
  const isRegisterPage = location.pathname === '/register';

  // Hide header completely on login/register page as requested
  if (isLoginPage || isRegisterPage) return null;

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (err) {
      console.error('Logout failed', err);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 p-4 sm:px-8 flex items-center justify-between bg-black/20 backdrop-blur-md border-b border-white/5">
      <Link to="/" className="flex items-center gap-2 max-w-fit">
        <Sparkles className="text-[#E7C36A] h-6 w-6" />
        <span className="font-serif text-xl font-bold tracking-wider text-white">Astra / Klue</span>
      </Link>

      <nav className="hidden md:flex gap-6 items-center text-sm font-medium">
        <Link to="/about" className="hover:text-[#E7C36A] transition-colors text-white/60">About</Link>
        <Link to="/faq" className="hover:text-[#E7C36A] transition-colors text-white/60">FAQ</Link>
        
        {user ? (
          <>
            <Link to="/dashboard" className="text-[#E7C36A] hover:underline">Dashboard</Link>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-5 py-2 rounded-full transition-colors border border-white/10"
            >
              <LogOut size={16} /> Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="bg-[#E7C36A] hover:bg-[#d4b360] transition-colors text-black px-6 py-2 rounded-full font-bold">
            Login / Signup
          </Link>
        )}
      </nav>
      
      <button className="md:hidden text-white focus:outline-none">
        <Menu className="h-6 w-6" />
      </button>
    </header>
  );
}
