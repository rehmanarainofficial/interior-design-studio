import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Sparkles, CheckCircle2, ShieldCheck, ArrowRight, Phone, Award, MessageCircle
} from 'lucide-react';
import { FITTING_CATEGORIES } from '../data/productsData';
import SEO from '../components/SEO';

export default function Services({ onOpenQuote }) {
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(path);
  };

  return (
    <div className="font-sans text-[#111111] bg-[#FAFAFA] min-h-screen">
      <SEO 
        title="Turnkey Fitting Services & Installation Protocols"
        description="Explore our complete interior fitting & installation services in Karachi. Master craftsmen executing SPC flooring, vinyl sheets, wall panels, roller blinds, and false ceilings."
        keywords="turnkey fitting services karachi, spc flooring installation near me, vinyl sheet fitting, roller blinds installation karachi, false ceiling contractor"
      />
      
      {/* ========================================================================= */}
      {/* LUXURY HERO BANNER MATCHING REFERENCE IMAGE */}
      {/* ========================================================================= */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-[#262628] text-white border-b border-[#C19A5B]/30">
        
        {/* Background Unsplash Architectural Photograph */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2560" 
            alt="Services Banner" 
            className="w-full h-full object-cover brightness-90 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#262628]/95 via-[#262628]/85 to-[#262628]/60" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-[#C19A5B]/20 backdrop-blur-md border border-[#C19A5B]/40 px-3.5 sm:px-4 py-1.5 rounded-full shadow-lg max-w-full overflow-hidden">
            <Sparkles className="w-3.5 h-3.5 text-[#C19A5B] shrink-0" />
            <span className="text-[10px] sm:text-xs font-semibold text-[#C19A5B] uppercase tracking-wider whitespace-nowrap">
              Turnkey Execution Services
            </span>
          </div>

          <h1 className="font-heading font-medium text-4xl sm:text-6xl lg:text-7xl text-white leading-tight">
            Master Execution & <br />
            <span className="italic font-normal text-[#FFF0DC]">Fitting Services</span>
          </h1>

          <p className="text-sm sm:text-lg text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed">
            From initial laser site survey to final perimeter wall skirting handover, our master craftsmen deliver 100% waterproof, precision interior fitting across Karachi.
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
              href="https://wa.me/923102321899?text=Hi%20Interior%20Design%20Studio!%20I%20want%20to%20inquire%20about%20your%20fitting%20services."
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

      {/* Services List Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {FITTING_CATEGORIES.map((cat, index) => (
            <div 
              key={cat.id}
              className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all space-y-5"
            >
              <div className="flex items-center space-x-4 border-b border-gray-100 pb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FFF0DC] text-[#C19A5B] flex items-center justify-center font-bold text-lg">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-2xl text-[#111111]">{cat.name}</h3>
                  <p className="text-xs text-gray-500 font-medium">{cat.tagline}</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                {cat.description}
              </p>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-[#C19A5B] uppercase tracking-wider block">
                  Available Solution Fitting:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-gray-800">
                  {cat.items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C19A5B] shrink-0" />
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => handleNavClick(`/category/${cat.id}`)}
                  className="btn-gold w-full py-3 rounded-xl text-xs font-semibold flex items-center justify-center space-x-2 shadow-md"
                >
                  <span>Explore {cat.name} Solutions</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
