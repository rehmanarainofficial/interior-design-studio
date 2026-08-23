import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/productsData';
import { MapPin, Calendar, Sparkles } from 'lucide-react';

export default function Projects({ onOpenQuote }) {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Residential', 'Commercial', 'Gym & Sports'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === filter);

  return (
    <div className="font-sans text-gray-900 bg-[#FAFAFA] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-[#543A14] uppercase tracking-widest bg-[#FFF0DC] px-4 py-1.5 rounded-full border border-[#543A14]/15">
            Portfolio
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#131010]">
            Completed Projects Showcase
          </h1>
          <p className="text-xs sm:text-base text-gray-600">
            Explore recent luxury interior & flooring installations executed across DHA Karachi, Gulberg Lahore, and F-7 Islamabad.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  filter === cat
                    ? 'bg-[#543A14] text-[#FFF0DC] shadow-md'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-[#543A14]/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <div 
              key={proj.id}
              className="bg-white glass-card-hover rounded-2xl overflow-hidden border border-gray-200 shadow-sm group"
            >
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img 
                  src={proj.image} 
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-[#543A14] text-[#FFF0DC] text-[10px] font-bold px-3 py-1 rounded-full shadow-sm">
                  {proj.category}
                </span>
                <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 text-[10px] font-bold px-2.5 py-1 rounded">
                  {proj.year}
                </span>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="font-heading font-bold text-lg text-[#131010]">
                  {proj.title}
                </h3>
                <div className="flex items-center space-x-2 text-xs text-[#543A14] font-semibold">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span>{proj.location}</span>
                </div>
                <p className="text-xs text-gray-600 font-medium">
                  <strong>Materials Installed:</strong> {proj.flooring}
                </p>

                <div className="pt-2">
                  <button 
                    onClick={onOpenQuote}
                    className="w-full btn-outline-gold py-2.5 rounded-xl text-xs font-bold"
                  >
                    Request Similar Project Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
