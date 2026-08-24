import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import CategoryPage from './pages/CategoryPage';
import Services from './pages/Services';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import QuoteModal from './components/QuoteModal';
import FloatingContact from './components/FloatingContact';
import { ChevronUp } from 'lucide-react';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col font-sans selection:bg-[#C19A5B] selection:text-white">
      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home onOpenQuote={() => setIsQuoteOpen(true)} />} />
          <Route path="/products/:productId" element={<ProductDetail onOpenQuote={() => setIsQuoteOpen(true)} />} />
          <Route path="/category/:categoryId" element={<CategoryPage onOpenQuote={() => setIsQuoteOpen(true)} />} />
          <Route path="/services" element={<Services onOpenQuote={() => setIsQuoteOpen(true)} />} />
          <Route path="/projects" element={<Projects onOpenQuote={() => setIsQuoteOpen(true)} />} />
          <Route path="/about" element={<About onOpenQuote={() => setIsQuoteOpen(true)} />} />
          <Route path="/contact" element={<Contact onOpenQuote={() => setIsQuoteOpen(true)} />} />
        </Routes>
      </main>

      <Footer onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Floating WhatsApp Direct Contact (Bottom Left) */}
      <FloatingContact />

      {/* Floating Scroll To Top Button (Bottom Right) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-[#262628] text-[#C19A5B] border border-[#C19A5B]/40 shadow-2xl hover:bg-[#C19A5B] hover:text-white transition-all duration-300 transform hover:scale-110 active:scale-95"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5 stroke-[2.5]" />
        </button>
      )}

      {/* Site Survey Inquiry Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}