import React, { useState } from "react";
import { X, Send, CheckCircle, MessageCircle, Phone } from "lucide-react";

export default function QuoteModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    solution: "SPC Waterproof Wood Flooring",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Hi Interior Design Studio! I want to book a site survey & sample visit.

*Client Inquiry Details:*
• *Name:* ${formData.name}
• *Phone/WhatsApp:* ${formData.phone}
• *Site Location:* ${formData.location}
• *Solution Required:* ${formData.solution}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/923102321899?text=${encodedMessage}`, "_blank");
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      phone: "",
      location: "",
      solution: "SPC Waterproof Wood Flooring",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-200 text-[#111111] space-y-6">
        {/* Close Button */}
        <button
          onClick={handleReset}
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
            Fill in your site details to send your inquiry directly to our senior contractor via WhatsApp.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4 bg-[#FFF0DC] rounded-2xl border border-[#C19A5B]/30">
            <CheckCircle className="w-12 h-12 text-[#C19A5B] mx-auto" />
            <h4 className="font-heading text-xl font-bold text-[#111111]">
              WhatsApp Inquiry Sent!
            </h4>
            <p className="text-xs text-gray-700 leading-relaxed">
              Thank you! Your survey request details have been forwarded to WhatsApp. Our senior contractor will call you back shortly.
            </p>
            <button
              onClick={handleReset}
              className="btn-gold px-6 py-2.5 rounded-xl text-xs font-bold shadow-md"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#111111] mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full bg-gray-50 border border-gray-300 focus:border-[#C19A5B] focus:bg-white rounded-xl p-3 text-xs text-gray-900 outline-none font-semibold"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#111111] mb-1">
                Phone / WhatsApp Number *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number / WhatsApp"
                className="w-full bg-gray-50 border border-gray-300 focus:border-[#C19A5B] focus:bg-white rounded-xl p-3 text-xs text-gray-900 outline-none font-semibold"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#111111] mb-1">
                Karachi Site Area *
              </label>
              <input
                type="text"
                name="location"
                required
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter your site area or location (e.g. DHA, Gulshan, F.B Area)"
                className="w-full bg-gray-50 border border-gray-300 focus:border-[#C19A5B] focus:bg-white rounded-xl p-3 text-xs text-gray-900 outline-none font-semibold"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#111111] mb-1">
                Solution Required *
              </label>
              <select
                name="solution"
                value={formData.solution}
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-300 focus:border-[#C19A5B] focus:bg-white rounded-xl p-3 text-xs text-gray-900 outline-none font-semibold cursor-pointer"
              >
                <option value="SPC Waterproof Wood Flooring">
                  SPC Waterproof Wood Flooring
                </option>
                <option value="Vinyl Sheet Flooring (Hospital/Commercial)">
                  Vinyl Sheet Flooring (Hospital/Commercial)
                </option>
                <option value="Acoustic Carpet Tiles">
                  Acoustic Carpet Tiles
                </option>
                <option value="Gym Rubber Flooring">
                  Gym Rubber Flooring
                </option>
                <option value="Fluted WPC Wall Panels">
                  Fluted WPC Wall Panels
                </option>
                <option value="Motorized Window Blinds">
                  Motorized Window Blinds
                </option>
                <option value="False Ceiling Execution">
                  False Ceiling Execution
                </option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 rounded-xl text-xs flex items-center justify-center space-x-2 shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send Survey Details on WhatsApp</span>
            </button>

            <a
              href="tel:03102321899"
              className="w-full bg-gray-100 hover:bg-gray-200 text-[#111111] font-bold py-3 rounded-xl text-xs flex items-center justify-center space-x-2 transition-all block text-center"
            >
              <Phone className="w-4 h-4 text-[#C19A5B]" />
              <span>Call Directly: 0310 2321899</span>
            </a>
          </form>
        )}
      </div>
    </div>
  );
}
