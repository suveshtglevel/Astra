import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles, Menu } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  // Hide header completely on login page as requested "(no option to go back)"
  if (isLoginPage) return null;

  return (
    <header className="w-full z-50 p-4 sm:px-8 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2 max-w-fit">
        <Sparkles className="text-brand-secondary h-6 w-6" />
        <span className="font-serif text-xl font-bold tracking-wider text-brand-light">Astra / Klue</span>
      </Link>

      <nav className="hidden md:flex gap-6 items-center text-sm font-medium">
        <Link to="/about" className="hover:text-brand-primary transition-colors text-brand-gray">About</Link>
        <Link to="/faq" className="hover:text-brand-primary transition-colors text-brand-gray">FAQ</Link>
        <Link to="/login" className="bg-brand-primary hover:bg-brand-primary-dark transition-colors text-brand-bg px-5 py-2 rounded-full font-bold">
          Login / Signup
        </Link>
      </nav>
      
      <button className="md:hidden text-brand-light focus:outline-none">
        <Menu className="h-6 w-6" />
      </button>
    </header>
  );
}
