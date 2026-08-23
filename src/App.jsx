import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import FloatingContact from './components/FloatingContact';

import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import CategoryPage from './pages/CategoryPage';
import Services from './pages/Services';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import VisualizerPage from './pages/VisualizerPage';
import CalculatorPage from './pages/CalculatorPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#131010] text-[#FFF0DC] font-sans selection:bg-[#F0BB78] selection:text-[#131010] flex flex-col">
        
        {/* Navigation Bar */}
        <Navbar onOpenQuote={() => setQuoteModalOpen(true)} />

        {/* Page Content Routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onOpenQuote={() => setQuoteModalOpen(true)} />} />
            <Route path="/products/:productId" element={<ProductDetail onOpenQuote={() => setQuoteModalOpen(true)} />} />
            <Route path="/category/:categoryId" element={<CategoryPage onOpenQuote={() => setQuoteModalOpen(true)} />} />
            <Route path="/services" element={<Services onOpenQuote={() => setQuoteModalOpen(true)} />} />
            <Route path="/projects" element={<Projects onOpenQuote={() => setQuoteModalOpen(true)} />} />
            <Route path="/about" element={<About onOpenQuote={() => setQuoteModalOpen(true)} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/visualizer" element={<VisualizerPage onOpenQuote={() => setQuoteModalOpen(true)} />} />
            <Route path="/calculator" element={<CalculatorPage onOpenQuote={() => setQuoteModalOpen(true)} />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer onOpenQuote={() => setQuoteModalOpen(true)} />

        {/* Global Quote Request Modal */}
        <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />

        {/* Direct WhatsApp & Phone Floating Actions */}
        <FloatingContact />
      </div>
    </Router>
  );
}