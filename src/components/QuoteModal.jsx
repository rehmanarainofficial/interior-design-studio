import React, { useState } from 'react';
import { X, Send, CheckCircle, Phone, MessageCircle } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-200 text-[#111111] space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 hover:bg-[#C19A5B] hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          <span className="text-[10px] font-bold text-[#C19A5B] uppercase tracking-widest bg-[#FFF0DC] px-3 py-1 rounded-full border border-[#C19A5B]/20">
            On-Site Service
          </span>
          <h3 className="font-heading font-semibold text-2xl text-[#111111] mt-2">
            Book Site Survey & Sample Visit
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            Our senior contractor will bring physical sample kits to your site in Karachi for exact measurements.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4 bg-[#FFF0DC] rounded-2xl border border-[#C19A5B]/30">
            <CheckCircle className="w-12 h-12 text-[#C19A5B] mx-auto" />
            <h4 className="font-heading text-xl font-bold text-[#111111]">Survey Request Submitted!</h4>
            <p className="text-xs text-gray-700">Thank you! Our senior contractor will call you at 0310 2321899 to confirm the appointment.</p>
            <button
              onClick={onClose}
              className="btn-gold px-6 py-2.5 rounded-xl text-xs font-bold shadow-md"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#111111] mb-1">Your Full Name *</label>
              <input
                type="text"
                required
                placeholder="Full Name"
                className="w-full bg-gray-50 border border-gray-300 focus:border-[#C19A5B] focus:bg-white rounded-xl p-3 text-xs text-gray-900 outline-none font-semibold"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#111111] mb-1">Phone / WhatsApp Number *</label>
              <input
                type="tel"
                required
                placeholder="Phone Number / WhatsApp"
                className="w-full bg-gray-50 border border-gray-300 focus:border-[#C19A5B] focus:bg-white rounded-xl p-3 text-xs text-gray-900 outline-none font-semibold"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#111111] mb-1">Karachi Site Area *</label>
              <input
                type="text"
                required
                placeholder="Enter your site area or location"
                className="w-full bg-gray-50 border border-gray-300 focus:border-[#C19A5B] focus:bg-white rounded-xl p-3 text-xs text-gray-900 outline-none font-semibold"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#111111] mb-1">Solution Required *</label>
              <select className="w-full bg-gray-50 border border-gray-300 focus:border-[#C19A5B] focus:bg-white rounded-xl p-3 text-xs text-gray-900 outline-none font-semibold cursor-pointer">
                <option>SPC Waterproof Wood Flooring</option>
                <option>Vinyl Sheet Flooring (Hospital/Commercial)</option>
                <option>Acoustic Carpet Tiles</option>
                <option>Gym Rubber Flooring</option>
                <option>Fluted WPC Wall Panels</option>
                <option>Motorized Window Blinds</option>
                <option>False Ceiling Execution</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full btn-gold py-3.5 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 shadow-lg mt-2"
            >
              <Send className="w-4 h-4 text-white" />
              <span>Confirm Site Survey Appointment</span>
            </button>

            <a
              href="https://wa.me/923102321899?text=Hi%20Interior%20Design%20Studio!%20I%20want%20to%20book%20a%20site%20survey."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] text-white font-bold py-3.5 rounded-xl text-xs flex items-center justify-center space-x-2 shadow-md hover:brightness-105 transition-all block text-center"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Or WhatsApp Direct (0310 2321899)</span>
            </a>
          </form>
        )}

      </div>
    </div>
  );
}
