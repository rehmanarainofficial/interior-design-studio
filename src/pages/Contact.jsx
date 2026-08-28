import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import SEO from "../components/SEO";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="font-sans text-[#111111] bg-[#FAFAFA] min-h-screen">
      <SEO
        title="Contact Us & Flagship Karachi Showroom"
        description="Visit our flagship Karachi showroom at Shop No 132, Shamim Sky Tower, Block 9 Yaseenabad, F.B Area, or call 0310 2321899 to book a doorstep site survey."
        keywords="contact interior design studio, karachi showroom address, yaseenabad interior showroom, book site survey karachi, call 03102321899"
      />

      {/* ========================================================================= */}
      {/* LUXURY HERO BANNER MATCHING REFERENCE IMAGE */}
      {/* ========================================================================= */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-[#262628] text-white border-b border-[#C19A5B]/30">
        {/* Background Unsplash Showroom Photograph */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=2560"
            alt="Contact Showroom Banner"
            className="w-full h-full object-cover brightness-90 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#262628]/95 via-[#262628]/85 to-[#262628]/60" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-[#C19A5B]/20 backdrop-blur-md border border-[#C19A5B]/40 px-3.5 sm:px-4 py-1.5 rounded-full shadow-lg max-w-full overflow-hidden">
            <Sparkles className="w-3.5 h-3.5 text-[#C19A5B] shrink-0" />
            <span className="text-[10px] sm:text-xs font-semibold text-[#C19A5B] uppercase tracking-wider whitespace-nowrap">
              Karachi Showroom & Support
            </span>
          </div>

          <h1 className="font-heading font-medium text-4xl sm:text-6xl lg:text-7xl text-white leading-tight">
            Contact Us & Visit <br />
            <span className="italic font-normal text-[#FFF0DC]">
              Our Karachi Showroom
            </span>
          </h1>

          <p className="text-sm sm:text-lg text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Visit our physical flagship showroom in Federal B Area, Karachi, or
            request a doorstep site survey with physical texture samples.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href="tel:03102321899"
              className="btn-gold px-8 py-3.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center space-x-2 shadow-xl"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>Call Us Direct (0310 2321899)</span>
            </a>

            <a
              href="https://wa.me/923102321899?text=Hi%20Interior%20Design%20Studio!%20I%20want%20to%20visit%20your%20showroom."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white backdrop-blur-md px-7 py-3.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Chat Direct</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Form & Info Grid Area */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Showroom Details Box */}
          <div className="lg:col-span-5 bg-[#262628] text-white p-8 sm:p-10 rounded-3xl border border-[#C19A5B]/30 space-y-8 shadow-xl">
            <div>
              <h2 className="font-heading font-semibold text-2xl text-white">
                Flagship Karachi Showroom
              </h2>
              <p className="text-xs text-gray-300 mt-1">
                Visit our showroom to inspect full-size installed material
                mockups.
              </p>
            </div>

            <div className="space-y-6 text-xs sm:text-sm font-medium">
              <div className="flex items-start space-x-3.5">
                <MapPin className="w-5 h-5 text-[#C19A5B] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold">
                    Showroom Address:
                  </strong>
                  <span className="text-gray-300 leading-relaxed block">
                    Shop No 132, Shamim Sky Tower, Federal B Area Block 9
                    Yaseenabad, Karachi, Pakistan.
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-3.5">
                <Phone className="w-5 h-5 text-[#C19A5B] shrink-0" />
                <div>
                  <strong className="text-white block font-bold">
                    Direct Phone / Call:
                  </strong>
                  <a
                    href="tel:03102321899"
                    className="text-[#C19A5B] hover:underline font-bold text-base sm:text-lg"
                  >
                    0310 2321899
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3.5">
                <Mail className="w-5 h-5 text-[#C19A5B] shrink-0" />
                <div>
                  <strong className="text-white block font-bold">
                    Email Inquiry:
                  </strong>
                  <a
                    href="mailto:interiordesignstudiopk@gmail.com"
                    className="text-gray-300 hover:text-[#C19A5B]"
                  >
                    interiordesignstudiopk@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3.5">
                <Clock className="w-5 h-5 text-[#C19A5B] shrink-0" />
                <div>
                  <strong className="text-white block font-bold">
                    Opening Hours:
                  </strong>
                  <span className="text-gray-300">
                    Monday - Saturday: 11:00 AM - 9:00 PM
                  </span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2 flex items-center space-x-3">
                <span className="text-white font-bold text-xs">Follow Us:</span>
                <a
                  href="https://facebook.com/interiordesignstudiopk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#1877F2] transition-all"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/interiordesignstudiopk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#E4405F] transition-all"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-4 h-4 fill-none stroke-current stroke-2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>

            <a
              href="https://wa.me/923102321899?text=Hi%20Interior%20Design%20Studio!%20I%20want%20to%20inquire%20about%20site%20fitting."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] text-white font-bold py-4 rounded-xl text-xs sm:text-sm flex items-center justify-center space-x-2 shadow-lg hover:brightness-105 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Start Direct WhatsApp Chat (0310 2321899)</span>
            </a>
          </div>

          {/* Quick Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-sm space-y-6">
            <h2 className="font-heading font-semibold text-2xl text-[#111111]">
              Send Site Survey Inquiry
            </h2>

            {submitted ? (
              <div className="p-8 text-center space-y-3 bg-[#FFF0DC] rounded-2xl border border-[#C19A5B]/30">
                <CheckCircle className="w-12 h-12 text-[#C19A5B] mx-auto" />
                <h4 className="font-heading text-xl font-bold text-[#111111]">
                  Inquiry Received!
                </h4>
                <p className="text-xs text-gray-700">
                  Thank you! Our senior contractor will contact you at 0310
                  2321899 within 1 hour.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#111111] mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      className="w-full bg-gray-50 border border-gray-300 focus:border-[#C19A5B] focus:bg-white rounded-xl p-3.5 text-xs text-gray-900 outline-none font-semibold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#111111] mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number / WhatsApp"
                      className="w-full bg-gray-50 border border-gray-300 focus:border-[#C19A5B] focus:bg-white rounded-xl p-3.5 text-xs text-gray-900 outline-none font-semibold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#111111] mb-1">
                      City / Area *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your city or area"
                      className="w-full bg-gray-50 border border-gray-300 focus:border-[#C19A5B] focus:bg-white rounded-xl p-3.5 text-xs text-gray-900 outline-none font-semibold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#111111] mb-1">
                      Service Category *
                    </label>
                    <select className="w-full bg-gray-50 border border-gray-300 focus:border-[#C19A5B] focus:bg-white rounded-xl p-3.5 text-xs text-gray-900 outline-none cursor-pointer font-semibold">
                      <option>Flooring (SPC, Vinyl, Hardwood)</option>
                      <option>Window Blinds (Roller, Zebra, Motorized)</option>
                      <option>
                        Wall Covering (3D Wallpaper, Fluted Slats)
                      </option>
                      <option>False Ceiling Execution</option>
                      <option>Fiber Glass Shades & Canopies</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#111111] mb-1">
                    Project Details / Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Enter your project details or service requirements"
                    className="w-full bg-gray-50 border border-gray-300 focus:border-[#C19A5B] focus:bg-white rounded-xl p-3.5 text-xs text-gray-900 outline-none resize-none font-normal"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-gold py-4 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 shadow-md"
                >
                  <Send className="w-4 h-4 text-white" />
                  <span>Send Inquiry to Contracting Team</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
