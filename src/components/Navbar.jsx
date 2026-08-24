import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Phone, Mail, MapPin, ChevronDown, ChevronRight, Menu, X, 
  Sparkles, ArrowRight, MessageCircle
} from 'lucide-react';
import { FITTING_CATEGORIES } from '../data/productsData';

export default function Navbar({ onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(FITTING_CATEGORIES[0]?.id || 'flooring');
  const [activeMobileCat, setActiveMobileCat] = useState(null);
  
  const location = useLocation();
  const navigate = useNavigate();

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

  // Lock body scroll when full screen mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = (path) => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(path);
  };

  const selectedCategoryObj = FITTING_CATEGORIES.find(c => c.id === activeCategory) || FITTING_CATEGORIES[0];

  return (
    <header className="sticky top-0 z-50 w-full font-sans transition-all duration-300">
      
      {/* Top Contact Bar */}
      <div className="bg-[#262628] text-white text-xs sm:text-sm 2xl:text-base py-2.5 px-4 sm:px-6 border-b border-[#C19A5B]/40">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
          <div className="flex items-center space-x-6 flex-wrap gap-y-1 font-semibold">
            <a href="tel:03102321899" className="flex items-center space-x-2 hover:text-[#C19A5B] transition-colors">
              <Phone className="w-4 h-4 text-[#C19A5B]" />
              <span>0310 2321899</span>
            </a>
            <a href="mailto:info@interiordesignstudiopk.com" className="hidden sm:flex items-center space-x-2 hover:text-[#C19A5B] transition-colors">
              <Mail className="w-4 h-4 text-[#C19A5B]" />
              <span>info@interiordesignstudiopk.com</span>
            </a>
            <div className="hidden md:flex items-center space-x-2 text-gray-300">
              <MapPin className="w-4 h-4 text-[#C19A5B]" />
              <span>Shop No 132, Shamim Sky Tower, Block 9 Yaseenabad, F.B Area, Karachi</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-2 text-xs sm:text-sm font-bold text-[#C19A5B]">
            <span>interiordesignstudiopk.com</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/98 backdrop-blur-md shadow-lg py-2.5 border-b border-gray-200' 
          : 'bg-white py-3.5 border-b border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Image */}
          <button 
            onClick={() => handleNavClick('/')}
            className="flex items-center text-left group focus:outline-none"
          >
            <img 
              src="/full logo.png" 
              alt="Interior Design Studio Pakistan" 
              className="h-14 sm:h-16 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => handleNavClick('/')}
              className={`text-base font-bold transition-colors hover:text-[#C19A5B] ${
                location.pathname === '/' ? 'text-[#C19A5B]' : 'text-[#111111]'
              }`}
            >
              Home
            </button>

            {/* MEGA DROPDOWN: SOLUTIONS */}
            <div className="relative group py-2">
              <button 
                onClick={() => handleNavClick('/category/flooring')}
                className="flex items-center space-x-1.5 text-base font-bold text-[#111111] hover:text-[#C19A5B] transition-colors"
              >
                <span>Solutions</span>
                <ChevronDown className="w-4 h-4 text-[#C19A5B] group-hover:rotate-180 transition-transform duration-300" />
              </button>

              <div className="nav-dropdown absolute left-1/2 -translate-x-1/2 top-full w-[1100px] max-w-[95vw] bg-white border border-gray-200 rounded-2xl shadow-2xl p-6 text-[#111111] backdrop-blur-2xl grid grid-cols-12 gap-6">
                <div className="col-span-4 border-r border-gray-100 pr-4 space-y-1.5">
                  <span className="text-xs uppercase font-bold text-gray-400 tracking-wider block mb-2 px-3">
                    Categories
                  </span>
                  {FITTING_CATEGORIES.map((cat) => {
                    const isActive = activeCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onMouseEnter={() => setActiveCategory(cat.id)}
                        onClick={() => handleNavClick(`/category/${cat.id}`)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all text-left whitespace-nowrap ${
                          isActive 
                            ? 'bg-[#C19A5B] text-white shadow-md' 
                            : 'text-gray-800 hover:bg-gray-50 hover:text-[#C19A5B]'
                        }`}
                      >
                        <span className="whitespace-nowrap">{cat.name}</span>
                        <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-white translate-x-1' : 'text-gray-400'}`} />
                      </button>
                    );
                  })}
                </div>

                <div className="col-span-8 pl-2 space-y-3">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                    <div>
                      <h4 className="font-heading font-extrabold text-sm sm:text-base text-[#C19A5B]">
                        {selectedCategoryObj.name} Solutions
                      </h4>
                      <p className="text-xs text-gray-500 font-normal">
                        {selectedCategoryObj.tagline}
                      </p>
                    </div>
                    <button 
                      onClick={() => handleNavClick(`/category/${selectedCategoryObj.id}`)}
                      className="text-xs text-[#C19A5B] font-bold hover:underline whitespace-nowrap"
                    >
                      View All ({selectedCategoryObj.items.length}) →
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 max-h-[340px] overflow-y-auto pr-2 custom-scrollbar">
                    {selectedCategoryObj.items.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleNavClick(`/products/${item.id}`)}
                        className="flex items-center space-x-2 text-left text-xs sm:text-sm py-2 px-3 rounded-lg hover:bg-gray-50 text-gray-800 hover:text-[#C19A5B] font-semibold transition-all group/item whitespace-nowrap overflow-hidden"
                      >
                        <span className="text-[#C19A5B] font-bold text-sm leading-none">•</span>
                        <span className="whitespace-nowrap truncate">{item.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <button 
              onClick={() => handleNavClick('/services')}
              className={`text-base font-bold transition-colors hover:text-[#C19A5B] ${
                location.pathname === '/services' ? 'text-[#C19A5B]' : 'text-[#111111]'
              }`}
            >
              Services
            </button>

            <button 
              onClick={() => handleNavClick('/projects')}
              className={`text-base font-bold transition-colors hover:text-[#C19A5B] ${
                location.pathname === '/projects' ? 'text-[#C19A5B]' : 'text-[#111111]'
              }`}
            >
              Projects
            </button>

            <button 
              onClick={() => handleNavClick('/about')}
              className={`text-base font-bold transition-colors hover:text-[#C19A5B] ${
                location.pathname === '/about' ? 'text-[#C19A5B]' : 'text-[#111111]'
              }`}
            >
              About Us
            </button>

            <button 
              onClick={() => handleNavClick('/contact')}
              className={`text-base font-bold transition-colors hover:text-[#C19A5B] ${
                location.pathname === '/contact' ? 'text-[#C19A5B]' : 'text-[#111111]'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button 
              onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); onOpenQuote(); }}
              className="btn-gold px-6 py-3 rounded-xl text-xs sm:text-sm font-extrabold flex items-center space-x-2 shadow-md"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>Book Free Site Survey</span>
            </button>
          </div>

          {/* Mobile Hamburger Trigger Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-3 rounded-2xl bg-[#262628] text-white border border-[#C19A5B]/30 shadow-md active:scale-95 transition-transform"
              aria-label="Open Fullscreen Navigation"
            >
              <Menu className="w-7 h-7 text-[#C19A5B]" />
            </button>
          </div>
        </div>
      </nav>

      {/* ========================================================================= */}
      {/* BOLD FULL SCREEN MOBILE HAMBURGER NAVIGATION OVERLAY */}
      {/* ========================================================================= */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#262628] text-white flex flex-col justify-between p-6 overflow-y-auto animate-fade-in font-sans">
          
          {/* Header Bar: Logo & Close Button */}
          <div className="flex justify-between items-center border-b border-gray-800 pb-5">
            <button onClick={() => handleNavClick('/')} className="focus:outline-none">
              <img 
                src="/full logo.png" 
                alt="Interior Design Studio Pakistan" 
                className="h-14 invert w-auto object-contain"
              />
            </button>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-12 h-12 rounded-full bg-[#C19A5B] text-white flex items-center justify-center shadow-2xl active:scale-90 transition-transform"
              aria-label="Close Mobile Menu"
            >
              <X className="w-7 h-7 stroke-[3]" />
            </button>
          </div>

          {/* Navigation Links Stack (Bold & Prominent) */}
          <div className="py-8 space-y-6 my-auto">
            
            <button 
              onClick={() => handleNavClick('/')}
              className="block w-full text-left font-heading text-3xl font-semibold text-white hover:text-[#C19A5B] transition-colors"
            >
              Home
            </button>

            {/* SOLUTIONS ACCORDION IN FULL SCREEN MENU */}
            <div className="border-t border-b border-gray-800/80 py-4 space-y-3">
              <button 
                onClick={() => setActiveMobileCat(activeMobileCat === 'all' ? null : 'all')}
                className="w-full flex justify-between items-center text-left font-heading text-3xl font-semibold text-[#C19A5B]"
              >
                <span>Solutions</span>
                <ChevronDown className={`w-7 h-7 text-[#C19A5B] transition-transform duration-300 ${activeMobileCat === 'all' ? 'rotate-180' : ''}`} />
              </button>

              {activeMobileCat === 'all' && (
                <div className="space-y-4 pt-3 pl-2 border-l-2 border-[#C19A5B]/40 animate-fade-in">
                  {FITTING_CATEGORIES.map((cat) => (
                    <div key={cat.id} className="space-y-2">
                      <button
                        onClick={() => handleNavClick(`/category/${cat.id}`)}
                        className="block text-lg font-bold text-white hover:text-[#C19A5B] flex items-center space-x-2"
                      >
                        <span className="text-[#C19A5B]">•</span>
                        <span>{cat.name} ({cat.items.length})</span>
                      </button>
                      <div className="grid grid-cols-1 gap-1.5 pl-4">
                        {cat.items.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => handleNavClick(`/products/${item.id}`)}
                            className="text-xs text-gray-300 hover:text-white font-medium text-left truncate"
                          >
                            – {item.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button 
              onClick={() => handleNavClick('/services')}
              className="block w-full text-left font-heading text-3xl font-semibold text-white hover:text-[#C19A5B] transition-colors"
            >
              Services
            </button>

            <button 
              onClick={() => handleNavClick('/projects')}
              className="block w-full text-left font-heading text-3xl font-semibold text-white hover:text-[#C19A5B] transition-colors"
            >
              Executed Projects
            </button>

            <button 
              onClick={() => handleNavClick('/about')}
              className="block w-full text-left font-heading text-3xl font-semibold text-white hover:text-[#C19A5B] transition-colors"
            >
              About Us
            </button>

            <button 
              onClick={() => handleNavClick('/contact')}
              className="block w-full text-left font-heading text-3xl font-semibold text-white hover:text-[#C19A5B] transition-colors"
            >
              Contact & Showroom
            </button>

          </div>

          {/* Bottom Action Footer inside Mobile Overlay */}
          <div className="pt-6 border-t border-gray-800 space-y-3">
            <div className="flex items-center space-x-3 text-xs text-gray-300">
              <MapPin className="w-4 h-4 text-[#C19A5B] shrink-0" />
              <span>Shop No 132, Shamim Sky Tower, Block 9 Yaseenabad, Karachi</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button 
                onClick={() => { setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); onOpenQuote(); }}
                className="btn-gold py-4 rounded-xl text-center font-bold text-sm shadow-xl flex items-center justify-center space-x-2"
              >
                <Sparkles className="w-4 h-4 text-white" />
                <span>Book Free Site Survey</span>
              </button>

              <a
                href="https://wa.me/923102321899?text=Hi%20Interior%20Design%20Studio!%20I%20want%20to%20inquire%20about%20site%20fitting."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white py-4 rounded-xl text-center font-bold text-sm shadow-lg flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp (0310 2321899)</span>
              </a>
            </div>
          </div>

        </div>
      )}
    </header>
  );
}
