import React from 'react';
import { MapPin, Phone, Mail, Award, ShieldCheck, Layers, CheckCircle2, Sparkles } from 'lucide-react';

export default function About({ onOpenQuote }) {
  return (
    <div className="font-sans text-gray-900 bg-[#FAFAFA] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* About Header */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-200 shadow-sm max-w-4xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold text-[#543A14] uppercase tracking-widest bg-[#FFF0DC] px-4 py-1.5 rounded-full border border-[#543A14]/15">
            About Our Company
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#131010]">
            Pakistan’s Trusted Flooring & Interior Experts
          </h1>
          <p className="text-xs sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Urban & Dream Interior Studio combines cutting-edge European design standards with durable materials engineered specifically for Pakistan’s climate. Whether upgrading your private home or renovating a large corporate tower, we deliver floors and walls that stand the test of time.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#131010]">
              Crafting Exceptional Interiors Since 2011
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              In a market crowded with low-grade generic imports, we stand apart. We don’t just supply materials—we are your partners in transforming spaces. From anti-termite SPC click flooring to 100% waterproof PVC panels and custom fluted WPC slats, every product in our collection is rigorously quality tested.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-3 text-xs text-gray-800 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#543A14] shrink-0" />
                <span>Direct Import Quality Sourcing with European ISO Certifications</span>
              </div>
              <div className="flex items-center space-x-3 text-xs text-gray-800 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#543A14] shrink-0" />
                <span>Karachi Physical Showroom in Federal B Area with Sample Books</span>
              </div>
              <div className="flex items-center space-x-3 text-xs text-gray-800 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#543A14] shrink-0" />
                <span>Master Fitting Technicians with 15+ Years Site Installation Experience</span>
              </div>
            </div>

            <div className="pt-3">
              <button 
                onClick={onOpenQuote}
                className="btn-gold px-8 py-3.5 rounded-xl text-xs font-bold flex items-center space-x-2 shadow-md"
              >
                <Sparkles className="w-4 h-4 text-[#F0BB78]" />
                <span>Schedule Showroom & Site Consultation</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 h-80 sm:h-96 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200" 
              alt="Interior Studio Showroom"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Showroom Location Banner */}
        <div className="bg-[#FFF0DC] p-8 rounded-3xl border border-[#543A14]/20 flex flex-col md:flex-row justify-between items-center gap-6 shadow-sm">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-heading text-xl font-bold text-[#131010]">
              Visit Our Main Flagship Showroom in Karachi
            </h3>
            <p className="text-xs text-gray-700 font-medium">
              Shop #13, Shamim Sky Tower, Gulshan-e-Shamim, Federal B Area, Karachi, Pakistan.
            </p>
          </div>
          <a
            href="tel:+923120129016"
            className="btn-gold px-6 py-3 rounded-xl text-xs font-bold shrink-0 shadow-sm"
          >
            Call Showroom +92 312 0129016
          </a>
        </div>

      </div>
    </div>
  );
}
