import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Sparkles, ShieldCheck, Award, ArrowRight, CheckCircle2, Phone, MapPin, 
  Building2, Home as HomeIcon, Dumbbell, Stethoscope, MessageCircle, Clock, 
  Ruler, PackageCheck, Hammer, Globe, Star, Users, Check
} from 'lucide-react';
import SEO from '../components/SEO';

export default function About({ onOpenQuote }) {
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(path);
  };

  return (
    <div className="font-sans text-[#111111] bg-[#FAFAFA] min-h-screen">
      <SEO 
        title="About Us & Why Choose Interior Design Studio"
        description="Learn about Pakistan's premier interior execution contractor. 7+ years on-site experience, 500+ completed projects, and 100% water & termite proofing guarantee in Karachi."
        keywords="about interior design studio, why choose interior design studio, flooring contractor legacy karachi, 100% water proof guarantee karachi"
      />
      
      {/* ========================================================================= */}
      {/* 1. HERO BANNER */}
      {/* ========================================================================= */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-[#262628] text-white border-b border-[#C19A5B]/30">
        
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2560" 
            alt="Interior Design Studio Pakistan" 
            className="w-full h-full object-cover brightness-90 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#262628]/95 via-[#262628]/85 to-[#262628]/60" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-[#C19A5B]/20 backdrop-blur-md border border-[#C19A5B]/40 px-3.5 sm:px-4 py-1.5 rounded-full shadow-lg max-w-full overflow-hidden">
            <Sparkles className="w-3.5 h-3.5 text-[#C19A5B] shrink-0" />
            <span className="text-[10px] sm:text-xs font-semibold text-[#C19A5B] uppercase tracking-wider whitespace-nowrap">
              Turnkey Contracting Legacy • Est. 2011
            </span>
          </div>

          <h1 className="font-heading font-medium text-4xl sm:text-6xl lg:text-7xl text-white leading-tight">
            Crafting Timeless & <br />
            <span className="italic font-normal text-[#FFF0DC]">Extraordinary Spaces</span>
          </h1>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <span className="font-heading text-3xl font-semibold text-[#C19A5B]">500+</span>
              <span className="text-xs text-gray-300 block mt-1 font-medium">Completed Projects</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <span className="font-heading text-3xl font-semibold text-[#C19A5B]">100%</span>
              <span className="text-xs text-gray-300 block mt-1 font-medium">Water & Termite Protection</span>
            </div>
          </div>

          <p className="text-sm sm:text-lg text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Pakistan's leading turnkey interior design and flooring execution specialist. We supply premium materials and fit bungalows, corporate offices, gyms, and medical centers in Karachi.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); onOpenQuote(); }}
              className="btn-gold px-8 py-3.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center space-x-2 shadow-xl"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>Book Free Site Survey</span>
            </button>

            <a
              href="https://wa.me/923102321899?text=Hi%20Interior%20Design%20Studio!%20I%20want%20to%20inquire%20about%20your%20company."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-7 py-3.5 rounded-xl text-xs sm:text-sm font-semibold border border-white/20 transition-all flex items-center space-x-2"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp Direct (0310 2321899)</span>
            </a>
          </div>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* 2. DEDICATED SECTION: WHY INTERIOR DESIGN STUDIO */}
      {/* ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold text-[#C19A5B] uppercase tracking-widest bg-[#FFF0DC] px-4 py-1.5 rounded-full border border-[#C19A5B]/20">
            Why Choose Us
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-semibold text-[#111111] mt-3">
            Why Interior Design Studio
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-normal">
            6 core reasons why homeowners, corporate directors, and principal architects trust us for site execution in Karachi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FFF0DC] text-[#C19A5B] flex items-center justify-center font-bold text-xl">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-semibold text-2xl text-[#111111]">
              100% Water & Termite Guarantee
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
              Heavy-duty rigid core SPC flooring and PVC wall cladding specially engineered to withstand Karachi's high humidity and coastal moisture with zero swelling.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FFF0DC] text-[#C19A5B] flex items-center justify-center font-bold text-xl">
              <Ruler className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-semibold text-2xl text-[#111111]">
              Laser Precision Site Survey
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
              Digital 3D laser measurement of room parameters and subfloor dampness inspection before material cut, eliminating material shortfall or excess.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FFF0DC] text-[#C19A5B] flex items-center justify-center font-bold text-xl">
              <PackageCheck className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-semibold text-2xl text-[#111111]">
              Doorstep Sample Catalogues
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
              Our senior contracting team visits your home or office with physical texture samples and shade kits so you can test materials under real room lighting.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FFF0DC] text-[#C19A5B] flex items-center justify-center font-bold text-xl">
              <Hammer className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-semibold text-2xl text-[#111111]">
              Clean Dust-Free Fitting
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
              Master craftsmen handle underlayment, subfloor levelling, click-lock jointing, and perimeter wall skirtings with minimal noise and zero dust.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FFF0DC] text-[#C19A5B] flex items-center justify-center font-bold text-xl">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-semibold text-2xl text-[#111111]">
              Karachi Main Showroom
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
              Physical flagship showroom located at Shop No 132, Shamim Sky Tower, Federal B Area Block 9 Yaseenabad, Karachi.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FFF0DC] text-[#C19A5B] flex items-center justify-center font-bold text-xl">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-semibold text-2xl text-[#111111]">
              20-Year Workmanship Warranty
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
              Long-term material stability and fitting warranty backed by prompt local customer support and post-installation inspections.
            </p>
          </div>

        </div>

      </section>

      {/* ========================================================================= */}
      {/* 3. SHOWROOM & DIRECT SURVEY CTA */}
      {/* ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm space-y-8 text-center max-w-4xl mx-auto">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-[#C19A5B] uppercase tracking-widest bg-[#C19A5B]/15 px-3.5 py-1 rounded-full border border-[#C19A5B]/30">
              Our Journey
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-semibold text-[#111111] leading-tight">
              7+ Years of On-Site Execution Standards
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto font-normal">
              Visit our Karachi showroom at Shop No 132, Shamim Sky Tower, Federal B Area Block 9 Yaseenabad, or call us directly at 0310 2321899.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); onOpenQuote(); }}
              className="btn-gold px-8 py-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center space-x-2 shadow-xl"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>Book Free Doorstep Site Survey</span>
            </button>

            <a
              href="https://wa.me/923102321899?text=Hi%20Interior%20Design%20Studio!%20I%20want%20to%20book%20a%20site%20visit."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-7 py-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center space-x-2 shadow-md hover:brightness-105 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat Direct (0310 2321899)</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
