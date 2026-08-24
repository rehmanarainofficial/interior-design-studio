import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Sparkles, MapPin, ChevronRight, Filter, ExternalLink, ArrowRight, Search, Inbox, MessageCircle
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/productsData';
import SEO from '../components/SEO';

export default function Projects({ onOpenQuote }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  const categories = ['All', 'Residential', 'Commercial', 'Hospitality & Healthcare'];

  const filteredProjects = selectedCategory === 'All' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  const handleNavClick = (path) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(path);
  };

  return (
    <div className="font-sans text-[#111111] bg-[#FAFAFA] min-h-screen">
      <SEO 
        title="Executed Projects & Contracting Portfolio Karachi"
        description="View our portfolio of completed turnkey site projects across bungalows, corporate offices, gyms, and medical centers in Karachi."
        keywords="executed interior projects karachi, flooring portfolio karachi, completed bungalow flooring, corporate office carpet tiles, hospital vinyl fitting"
      />
      
      {/* ========================================================================= */}
      {/* LUXURY HERO BANNER MATCHING REFERENCE IMAGE */}
      {/* ========================================================================= */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-[#262628] text-white border-b border-[#C19A5B]/30">
        
        {/* Background Unsplash Portfolio Photograph */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2560" 
            alt="Portfolio Banner" 
            className="w-full h-full object-cover brightness-90 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#262628]/95 via-[#262628]/85 to-[#262628]/60" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-[#C19A5B]/20 backdrop-blur-md border border-[#C19A5B]/40 px-3.5 sm:px-4 py-1.5 rounded-full shadow-lg max-w-full overflow-hidden">
            <Sparkles className="w-3.5 h-3.5 text-[#C19A5B] shrink-0" />
            <span className="text-[10px] sm:text-xs font-semibold text-[#C19A5B] uppercase tracking-wider whitespace-nowrap">
              Executed Site Showcase • Karachi
            </span>
          </div>

          <h1 className="font-heading font-medium text-4xl sm:text-6xl lg:text-7xl text-white leading-tight">
            Executed Projects & <br />
            <span className="italic font-normal text-[#FFF0DC]">Contracting Portfolio</span>
          </h1>

          <p className="text-sm sm:text-lg text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Explore our completed site installations across bungalows, corporate offices, gyms, and medical centers in Karachi.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); onOpenQuote(); }}
              className="btn-gold px-8 py-3.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center space-x-2 shadow-xl"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>Book Site Visit for Similar Work</span>
            </button>

            <a
              href="https://wa.me/923102321899?text=Hi%20Interior%20Design%20Studio!%20I%20want%20to%20view%20your%20project%20portfolio."
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

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#C19A5B] text-white shadow-md scale-105'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-[#FFF0DC]/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PROJECTS GRID */}
        {filteredProjects.length === 0 ? (
          <div className="p-16 text-center bg-white rounded-3xl border border-gray-200 shadow-sm space-y-4 max-w-xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-[#FFF0DC] text-[#C19A5B] flex items-center justify-center mx-auto text-2xl">
              <Inbox className="w-8 h-8" />
            </div>
            <h3 className="font-heading text-2xl font-semibold text-[#111111]">
              No Projects Found
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 font-normal">
              No executed projects match the selected category filter "{selectedCategory}". Please select another category tab to view completed site installations.
            </p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="btn-gold px-6 py-3 rounded-xl text-xs font-bold inline-flex items-center space-x-2 shadow-md"
            >
              <span>View All Executed Projects ({PROJECTS_DATA.length})</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); onOpenQuote(); }}
                className="relative h-96 rounded-2xl overflow-hidden border border-gray-200 shadow-lg group cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl bg-gray-100"
              >
                <img 
                  src={proj.image} 
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <span className="absolute top-4 left-4 bg-[#262628] text-white text-[10px] font-bold px-3.5 py-1.5 rounded-full shadow-md z-10">
                  {proj.category}
                </span>

                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 z-10 transition-opacity duration-300 group-hover:opacity-0">
                  <h3 className="font-heading font-semibold text-lg text-white truncate">
                    {proj.title}
                  </h3>
                  <span className="text-xs text-[#C19A5B] font-semibold block">{proj.location}</span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/95 via-[#111111]/85 to-[#111111]/30 opacity-0 group-hover:opacity-100 transition-all duration-300 p-8 flex flex-col justify-end text-white z-20 space-y-3">
                  <span className="text-xs font-bold text-[#C19A5B] uppercase tracking-wider">
                    Executed Site • Karachi
                  </span>

                  <h3 className="font-heading font-semibold text-2xl text-white leading-tight">
                    {proj.title}
                  </h3>

                  <p className="text-xs text-[#C19A5B] font-semibold flex items-center space-x-1.5">
                    <MapPin className="w-4 h-4" />
                    <span>{proj.location}</span>
                  </p>

                  <p className="text-xs text-gray-300 line-clamp-3 leading-relaxed font-normal">
                    {proj.scope}
                  </p>

                  <div className="pt-2">
                    <button className="btn-gold w-full py-3 rounded-xl text-xs font-semibold flex items-center justify-center space-x-2 shadow-lg">
                      <span>Book Site Visit for Similar Work</span>
                      <ChevronRight className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
