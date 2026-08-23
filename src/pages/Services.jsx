import React from 'react';
import { SERVICES_DATA } from '../data/productsData';
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Phone } from 'lucide-react';

export default function Services({ onOpenQuote }) {
  return (
    <div className="font-sans text-gray-900 bg-[#FAFAFA] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-[#543A14] uppercase tracking-widest bg-[#FFF0DC] px-4 py-1.5 rounded-full border border-[#543A14]/15">
            Turnkey Design & Execution
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#131010]">
            Architectural & Interior Services
          </h1>
          <p className="text-xs sm:text-base text-gray-600">
            From 3D renderings to custom furniture crafting and site installation supervision across Pakistan.
          </p>
        </div>

        {/* Services List Grid */}
        <div className="space-y-8">
          {SERVICES_DATA.map((srv, idx) => (
            <div 
              key={srv.id}
              id={srv.id}
              className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center space-x-2 bg-[#FFF0DC] px-3.5 py-1.5 rounded-full border border-[#543A14]/15 text-xs font-bold text-[#543A14]">
                  <span>Phase 0{idx + 1}</span>
                </div>

                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#131010]">
                  {srv.title}
                </h2>
                <p className="text-xs text-[#543A14] font-bold uppercase tracking-wider">{srv.subtitle}</p>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">{srv.description}</p>

                <div className="space-y-2 pt-2">
                  {srv.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center space-x-2 text-xs text-gray-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#543A14] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3">
                  <button 
                    onClick={onOpenQuote}
                    className="btn-gold px-6 py-3 rounded-xl text-xs font-bold flex items-center space-x-2 shadow-md"
                  >
                    <span>Book Service Consultation</span>
                    <ArrowRight className="w-4 h-4 text-[#F0BB78]" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6 h-72 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                <img 
                  src={srv.image} 
                  alt={srv.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
