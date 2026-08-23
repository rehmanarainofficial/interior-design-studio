import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, Mail, MapPin, ChevronDown, ChevronRight, Menu, X, 
  Layers, Sparkles
} from 'lucide-react';
import { FITTING_CATEGORIES } from '../data/productsData';

export default function Navbar({ onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileCat, setActiveMobileCat] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 w-full font-sans transition-all duration-300">
      
      {/* Top Contact Bar */}
      <div className="bg-[#131010] text-[#FFF0DC] text-xs py-2 px-4 border-b border-[#543A14]/40">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-6 flex-wrap gap-y-1">
            <a href="tel:+923120129016" className="flex items-center space-x-1.5 hover:text-[#F0BB78] transition-colors font-medium">
              <Phone className="w-3.5 h-3.5 text-[#F0BB78]" />
              <span>+92 312 0129016</span>
            </a>
            <a href="mailto:info@interiordesignstudiopk.com" className="hidden sm:flex items-center space-x-1.5 hover:text-[#F0BB78] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#F0BB78]" />
              <span>info@interiordesignstudiopk.com</span>
            </a>
            <div className="hidden md:flex items-center space-x-1.5 text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-[#F0BB78]" />
              <span>Gulshan-e-Shamim, F.B Area, Karachi</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-2 text-[11px] text-[#F0BB78] font-medium">
            <span>interiordesignstudiopk.com</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#131010]/95 backdrop-blur-md shadow-2xl py-3 border-b border-[#F0BB78]/20' 
          : 'bg-[#1C1817] py-4 border-b border-[#543A14]/40'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F0BB78] to-[#543A14] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <Layers className="w-5 h-5 text-[#131010]" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-xl tracking-tight text-[#FFF0DC] group-hover:text-[#F0BB78] transition-colors leading-none">
                INTERIOR DESIGN STUDIO
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#F0BB78] font-bold mt-1">
                interiordesignstudiopk.com
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-7">
            <Link 
              to="/" 
              className={`text-sm font-semibold transition-colors hover:text-[#F0BB78] ${
                location.pathname === '/' ? 'text-[#F0BB78]' : 'text-[#FFF0DC]'
              }`}
            >
              Home
            </Link>

            {/* MEGA DROPDOWN: PRODUCTS & SOLUTIONS */}
            <div className="relative group py-2">
              <button className="flex items-center space-x-1 text-sm font-semibold text-[#FFF0DC] hover:text-[#F0BB78] transition-colors">
                <span>Products & Solutions</span>
                <ChevronDown className="w-4 h-4 text-[#F0BB78] group-hover:rotate-180 transition-transform duration-300" />
              </button>

              <div className="nav-dropdown absolute left-1/2 -translate-x-1/2 top-full w-[1000px] max-w-[95vw] bg-[#1C1817] border border-[#F0BB78]/30 rounded-2xl shadow-2xl p-6 text-[#FFF0DC] grid grid-cols-4 gap-6 backdrop-blur-2xl">
                {FITTING_CATEGORIES.map((cat) => (
                  <div key={cat.id} className="space-y-3">
                    <div className="border-b border-[#543A14] pb-2 flex items-center justify-between">
                      <Link 
                        to={`/category/${cat.id}`}
                        className="font-heading text-xs font-bold text-[#F0BB78] hover:text-white uppercase tracking-wider"
                      >
                        {cat.name}
                      </Link>
                      <ChevronRight className="w-3.5 h-3.5 text-[#F0BB78]" />
                    </div>

                    <div className="space-y-1 max-h-[300px] overflow-y-auto pr-1">
                      {cat.items.map((item) => (
                        <Link
                          key={item.id}
                          to={`/products/${item.id}`}
                          className="block text-xs py-1.5 px-2 rounded-lg hover:bg-[#543A14]/50 hover:text-[#F0BB78] text-gray-300 transition-all font-medium"
                        >
                          • {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Link 
              to="/services" 
              className={`text-sm font-semibold transition-colors hover:text-[#F0BB78] ${
                location.pathname === '/services' ? 'text-[#F0BB78]' : 'text-[#FFF0DC]'
              }`}
            >
              Services
            </Link>

            <Link 
              to="/projects" 
              className={`text-sm font-semibold transition-colors hover:text-[#F0BB78] ${
                location.pathname === '/projects' ? 'text-[#F0BB78]' : 'text-[#FFF0DC]'
              }`}
            >
              Projects
            </Link>

            <Link 
              to="/about" 
              className={`text-sm font-semibold transition-colors hover:text-[#F0BB78] ${
                location.pathname === '/about' ? 'text-[#F0BB78]' : 'text-[#FFF0DC]'
              }`}
            >
              About Us
            </Link>

            <Link 
              to="/contact" 
              className={`text-sm font-semibold transition-colors hover:text-[#F0BB78] ${
                location.pathname === '/contact' ? 'text-[#F0BB78]' : 'text-[#FFF0DC]'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Single Gold CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button 
              onClick={onOpenQuote}
              className="btn-gold px-5 py-2.5 rounded-xl text-xs font-extrabold flex items-center space-x-2 shadow-lg"
            >
              <Sparkles className="w-4 h-4 text-[#131010]" />
              <span>Book Free Site Survey</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#543A14]/60 text-[#F0BB78] border border-[#F0BB78]/30"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[100px] bg-[#131010]/98 z-40 overflow-y-auto p-6 text-[#FFF0DC] border-t border-[#F0BB78]/20 animate-fade-in shadow-2xl">
          <div className="space-y-4">
            <Link to="/" className="block py-2 text-base font-bold text-[#F0BB78] border-b border-[#543A14]">
              Home
            </Link>

            <div className="border-b border-[#543A14] pb-3">
              <div className="flex justify-between items-center py-2 font-bold text-[#FFF0DC]">
                <span>Products & Solutions</span>
                <span className="text-xs text-[#F0BB78]">Tap to expand</span>
              </div>
              <div className="space-y-2.5 mt-2">
                {FITTING_CATEGORIES.map((cat) => (
                  <div key={cat.id} className="bg-[#1C1817] p-3 rounded-xl border border-[#F0BB78]/20">
                    <button 
                      onClick={() => setActiveMobileCat(activeMobileCat === cat.id ? null : cat.id)}
                      className="w-full flex items-center justify-between text-xs font-bold text-[#F0BB78]"
                    >
                      <span>{cat.name} ({cat.items.length})</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeMobileCat === cat.id ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {activeMobileCat === cat.id && (
                      <div className="mt-2 space-y-1.5 pt-2 border-t border-[#543A14]/50">
                        {cat.items.map((item) => (
                          <Link
                            key={item.id}
                            to={`/products/${item.id}`}
                            className="block text-xs py-1.5 px-2 text-gray-300 font-medium hover:text-[#F0BB78] rounded hover:bg-[#543A14]/30"
                          >
                            • {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <Link to="/services" className="block py-2 text-sm font-medium text-[#FFF0DC] border-b border-[#543A14]">
              Services
            </Link>
            <Link to="/projects" className="block py-2 text-sm font-medium text-[#FFF0DC] border-b border-[#543A14]">
              Executed Projects
            </Link>
            <Link to="/about" className="block py-2 text-sm font-medium text-[#FFF0DC] border-b border-[#543A14]">
              About Us
            </Link>
            <Link to="/contact" className="block py-2 text-sm font-medium text-[#FFF0DC] border-b border-[#543A14]">
              Contact & Showroom
            </Link>

            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenQuote(); }}
              className="w-full btn-gold py-3.5 rounded-xl text-center font-extrabold text-sm shadow-lg mt-4"
            >
              Book Free Site Visit & Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
