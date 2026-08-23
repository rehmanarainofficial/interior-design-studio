import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, ShieldCheck, Award, ArrowRight, Check, Eye, Calculator, 
  Layers, Star, ChevronRight, CheckCircle2, Phone, MapPin, Building2, 
  Home as HomeIcon, Dumbbell, Stethoscope, Send, MessageCircle
} from 'lucide-react';
import { FITTING_CATEGORIES, SOLUTIONS_DATA, PROJECTS_DATA, TESTIMONIALS_DATA } from '../data/productsData';

export default function Home({ onOpenQuote }) {
  const [activeTab, setActiveTab] = useState('residential-fitting');
  const [showBefore, setShowBefore] = useState(false);

  const selectedCategory = FITTING_CATEGORIES.find(c => c.id === activeTab) || FITTING_CATEGORIES[0];

  return (
    <div className="font-sans text-gray-900 bg-[#FAFAFA] min-h-screen">
      
      {/* --- LUXURY RICH HERO SECTION (NO WHITE WASH-OUT / NO GLARE) --- */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-24 px-4 sm:px-6 lg:px-8 border-b border-[#543A14]/30 bg-[#131010]">
        
        {/* Crisp Luxury Indoor Interior Photograph */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2560" 
            alt="Interior Design Studio Pakistan"
            className="w-full h-full object-cover scale-105 transition-transform duration-1000 brightness-90 contrast-110"
          />
          {/* Rich Dark Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#131010]/95 via-[#131010]/80 to-[#131010]/40 md:to-[#131010]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#131010] via-transparent to-[#131010]/60" />
        </div>

        {/* Hero Text Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-left space-y-8">
          
          <div className="inline-flex items-center space-x-2 bg-[#543A14]/80 backdrop-blur-md border border-[#F0BB78]/40 px-4 py-2 rounded-full shadow-lg">
            <Sparkles className="w-4 h-4 text-[#F0BB78]" />
            <span className="text-xs font-bold text-[#F0BB78] uppercase tracking-wider">
              Turnkey Supply & Site Installation Contractors
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl text-[#FFF0DC] leading-[1.1] tracking-tight">
            Luxury Flooring & <br />
            <span className="shimmer-text">Interior Execution</span>
          </h1>

          <p className="text-base sm:text-xl text-gray-200 leading-relaxed font-normal max-w-3xl">
            We supply materials and execute complete on-site fitting for <strong className="text-[#F0BB78]">Houses, Offices, Shops, Gyms & Hospitals</strong> across Karachi, Lahore & Islamabad. From waterproof SPC flooring to 3D WPC media wall panels and motorized blinds.
          </p>

          {/* Quick Property Badges */}
          <div className="flex flex-wrap gap-3 pt-1">
            <div className="flex items-center space-x-2 bg-[#1C1817]/90 backdrop-blur-md px-4 py-2 rounded-xl border border-[#F0BB78]/30 text-xs font-bold text-[#FFF0DC] shadow-md">
              <HomeIcon className="w-4 h-4 text-[#F0BB78]" />
              <span>Houses & Villas</span>
            </div>
            <div className="flex items-center space-x-2 bg-[#1C1817]/90 backdrop-blur-md px-4 py-2 rounded-xl border border-[#F0BB78]/30 text-xs font-bold text-[#FFF0DC] shadow-md">
              <Building2 className="w-4 h-4 text-[#F0BB78]" />
              <span>Offices & Shops</span>
            </div>
            <div className="flex items-center space-x-2 bg-[#1C1817]/90 backdrop-blur-md px-4 py-2 rounded-xl border border-[#F0BB78]/30 text-xs font-bold text-[#FFF0DC] shadow-md">
              <Dumbbell className="w-4 h-4 text-[#F0BB78]" />
              <span>Gyms & Fitness</span>
            </div>
            <div className="flex items-center space-x-2 bg-[#1C1817]/90 backdrop-blur-md px-4 py-2 rounded-xl border border-[#F0BB78]/30 text-xs font-bold text-[#FFF0DC] shadow-md">
              <Stethoscope className="w-4 h-4 text-[#F0BB78]" />
              <span>Hospitals & Labs</span>
            </div>
          </div>

          {/* Call To Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button 
              onClick={onOpenQuote}
              className="btn-gold px-8 py-4 rounded-xl text-sm font-extrabold flex items-center space-x-3 shadow-2xl"
            >
              <Sparkles className="w-4 h-4 text-[#131010]" />
              <span>Book Free Site Survey & Measurement</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/923120129016?text=Hi%20Interior%20Design%20Studio!%20I%20want%20to%20book%20a%20free%20site%20measurement."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-7 py-4 rounded-xl text-sm font-bold flex items-center space-x-2 shadow-xl transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Direct Inquiry</span>
            </a>
          </div>

          {/* Stats Bar */}
          <div className="pt-8 grid grid-cols-3 gap-6 border-t border-[#543A14]/60 text-xs max-w-3xl">
            <div>
              <span className="font-heading font-extrabold text-2xl sm:text-3xl text-[#F0BB78] block">15+ Yrs</span>
              <span className="text-gray-300 font-medium">Site Fitting Experience</span>
            </div>
            <div>
              <span className="font-heading font-extrabold text-2xl sm:text-3xl text-[#F0BB78] block">2,500+</span>
              <span className="text-gray-300 font-medium">Completed Projects</span>
            </div>
            <div>
              <span className="font-heading font-extrabold text-2xl sm:text-3xl text-[#F0BB78] block">20-Yr</span>
              <span className="text-gray-300 font-medium">Material Warranty</span>
            </div>
          </div>

        </div>
      </section>

      {/* --- OUR SOLUTIONS --- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold text-[#543A14] uppercase tracking-widest bg-[#FFF0DC] px-4 py-1.5 rounded-full border border-[#543A14]/15">
            Turnkey Services
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#131010]">
            Our Solutions & Execution Services
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            We supply materials and execute complete on-site installation for every property type.
          </p>

          {/* Space Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 pt-6">
            {FITTING_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === cat.id
                    ? 'bg-[#543A14] text-[#FFF0DC] shadow-md scale-105'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-[#FFF0DC]/40'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Clean Borderless Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {selectedCategory.items.map((item) => {
            const detail = SOLUTIONS_DATA[item.id] || {};
            return (
              <div 
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-60 overflow-hidden bg-gray-100">
                    <img 
                      src={detail.image || 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800'}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {item.badge && (
                      <span className="absolute top-4 right-4 text-[10px] font-extrabold bg-[#F0BB78] text-[#131010] px-3 py-1 rounded-full shadow-sm">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="font-heading font-extrabold text-xl text-[#131010] group-hover:text-[#543A14] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                      {detail.subtitle || detail.description || 'Complete material supply + turnkey installation service across Pakistan.'}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link 
                    to={`/products/${item.id}`}
                    className="w-full btn-gold py-3 rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5"
                  >
                    <span>View Execution Details</span>
                    <ChevronRight className="w-4 h-4 text-[#131010]" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* --- BEFORE & AFTER INSTALLATION TRANSFORMATION (STABLE VERIFIED IMAGE URLS) --- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm space-y-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <span className="text-xs font-bold text-[#543A14] uppercase tracking-widest bg-[#FFF0DC] px-3.5 py-1.5 rounded-full border border-[#543A14]/15">
                Real Site Results
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#131010] mt-3">
                Installation Transformation
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Toggle below to see raw concrete sites vs. finished luxury installed spaces.
              </p>
            </div>

            <div className="flex items-center space-x-2 bg-gray-100 p-1.5 rounded-xl border border-gray-200">
              <button
                onClick={() => setShowBefore(true)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  showBefore ? 'bg-[#543A14] text-[#FFF0DC] shadow-sm' : 'text-gray-700 hover:text-black'
                }`}
              >
                Raw Site (Before)
              </button>
              <button
                onClick={() => setShowBefore(false)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  !showBefore ? 'bg-[#543A14] text-[#FFF0DC] shadow-sm' : 'text-gray-700 hover:text-black'
                }`}
              >
                Finished Work (After)
              </button>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden h-[380px] sm:h-[480px] border border-gray-200 shadow-md bg-gray-100">
            <img 
              src={
                showBefore
                  ? 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1600'
                  : 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600'
              } 
              alt="Installation Transformation"
              className="w-full h-full object-cover transition-all duration-500"
            />
            
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl border border-gray-200 shadow-md text-xs font-bold text-[#131010]">
              {showBefore ? '🔴 BEFORE: Raw Concrete Site' : '🟢 AFTER: Installed SPC Wood Flooring & WPC Wall'}
            </div>
          </div>

        </div>
      </section>

      {/* --- EXECUTED PROJECTS GALLERY --- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <span className="text-xs font-bold text-[#543A14] uppercase tracking-widest bg-[#FFF0DC] px-3.5 py-1.5 rounded-full border border-[#543A14]/15">
                Contractor Portfolio
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#131010] mt-3">
                Executed Projects Showcase
              </h2>
            </div>
            <Link 
              to="/projects"
              className="btn-outline-gold px-6 py-3 rounded-xl text-xs font-bold flex items-center space-x-2"
            >
              <span>View All Executed Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROJECTS_DATA.map((proj) => (
              <div 
                key={proj.id}
                className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="relative h-60 overflow-hidden bg-gray-200">
                  <img 
                    src={proj.image} 
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#543A14] text-[#FFF0DC] text-[10px] font-bold px-3 py-1 rounded-full shadow-sm">
                    {proj.category}
                  </span>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-heading font-bold text-base text-[#131010] line-clamp-1">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-[#543A14] font-semibold flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{proj.location}</span>
                  </p>
                  <p className="text-[11px] text-gray-500 line-clamp-1">
                    {proj.scope}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CLIENT TESTIMONIALS --- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold text-[#543A14] uppercase tracking-widest bg-[#FFF0DC] px-3.5 py-1.5 rounded-full border border-[#543A14]/15">
            Verified Reviews
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#131010]">
            Trusted by Homeowners & Architects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <div 
              key={idx}
              className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex text-[#F0BB78] space-x-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-gray-700 italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <h4 className="font-heading text-sm font-bold text-[#543A14]">{t.name}</h4>
                <p className="text-xs text-gray-500 font-medium">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FINAL CALL TO ACTION BANNER --- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FFF0DC] border-t border-[#543A14]/20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#131010]">
            Need Materials Supplied & Fitted On-Site?
          </h2>
          <p className="text-sm sm:text-base text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Book a free site measurement in Karachi, Lahore, or Islamabad. Our senior contractor will visit with physical sample catalogues.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button
              onClick={onOpenQuote}
              className="btn-gold px-8 py-4 rounded-xl text-sm font-extrabold flex items-center space-x-2 shadow-xl"
            >
              <Sparkles className="w-4 h-4 text-[#F0BB78]" />
              <span>Book Free Site Visit & Consultation</span>
            </button>
            <a
              href="tel:+923120129016"
              className="btn-outline-gold bg-white px-7 py-4 rounded-xl text-sm font-bold flex items-center space-x-2 shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#543A14]" />
              <span>Call Senior Contractor: 0312 0129016</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
