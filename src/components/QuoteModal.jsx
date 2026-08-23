import React, { useState } from 'react';
import { X, Send, Sparkles, CheckCircle2, Phone, Calendar, Upload } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Karachi',
    service: 'SPC Flooring',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in font-sans">
      <div className="bg-white border border-gray-200 w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden relative text-gray-900">
        
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 text-gray-600 hover:text-black border border-gray-200"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="bg-[#FFF0DC] p-6 border-b border-[#543A14]/15">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-[#543A14]" />
            <h3 className="font-heading font-extrabold text-lg text-[#131010]">
              Book Free Site Visit & Consultation
            </h3>
          </div>
          <p className="text-xs text-gray-700 mt-1 font-medium">
            Our expert team will visit your home/office with physical material samples & laser measurement tools.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-[#FFF0DC] text-[#543A14] rounded-full flex items-center justify-center mx-auto border border-[#543A14]/30">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="font-heading text-xl font-bold text-[#131010]">
              Request Received Successfully!
            </h4>
            <p className="text-xs text-gray-600">
              Thank you, <strong className="text-gray-900">{formData.name}</strong>. Our senior consultant in <strong className="text-[#543A14]">{formData.city}</strong> will contact you via WhatsApp/Call (+92 312 0129016) shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#543A14] mb-1">
                Your Full Name *
              </label>
              <input 
                type="text"
                required
                placeholder="e.g. Tariq Mansoor"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-gray-50 border border-gray-300 focus:border-[#543A14] focus:bg-white rounded-xl p-3 text-xs text-gray-900 outline-none font-semibold"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-[#543A14] mb-1">
                  Mobile / WhatsApp *
                </label>
                <input 
                  type="tel"
                  required
                  placeholder="0312 0000000"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-gray-50 border border-gray-300 focus:border-[#543A14] focus:bg-white rounded-xl p-3 text-xs text-gray-900 outline-none font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#543A14] mb-1">
                  City Location *
                </label>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                  className="w-full bg-gray-50 border border-gray-300 focus:border-[#543A14] focus:bg-white rounded-xl p-3 text-xs text-gray-900 outline-none font-bold cursor-pointer"
                >
                  <option value="Karachi">Karachi (Showroom)</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Islamabad">Islamabad / Rawalpindi</option>
                  <option value="Other">Other City (Nationwide)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#543A14] mb-1">
                Product / Service Required *
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
                className="w-full bg-gray-50 border border-gray-300 focus:border-[#543A14] focus:bg-white rounded-xl p-3 text-xs text-gray-900 outline-none font-bold cursor-pointer"
              >
                <option value="SPC Flooring">SPC Rigid Core Flooring</option>
                <option value="PVC Vinyl Flooring">PVC Vinyl Flooring</option>
                <option value="Wooden Flooring">Wooden Hardwood Flooring</option>
                <option value="Fluted Panels WPC">Fluted Wall Panels (WPC)</option>
                <option value="Window Blinds">Window Blinds (Roller/Zebra/Wood)</option>
                <option value="Korean Wallpapers">Korean 3D Wallpapers</option>
                <option value="Gym & Sports Flooring">Gym / Sports Flooring</option>
                <option value="Turnkey Interior Services">Complete Turnkey Interior Design</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#543A14] mb-1">
                Project Details / Approx Sq Ft (Optional)
              </label>
              <textarea
                rows="2"
                placeholder="Mention approx room size (e.g. 15x12 ft bedroom) or specific preferences..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-gray-50 border border-gray-300 focus:border-[#543A14] focus:bg-white rounded-xl p-3 text-xs text-gray-900 outline-none resize-none font-normal"
              />
            </div>

            <button
              type="submit"
              className="w-full btn-gold py-3.5 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 shadow-md mt-2"
            >
              <Send className="w-4 h-4 text-[#F0BB78]" />
              <span>Confirm & Request Free Site Survey</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
