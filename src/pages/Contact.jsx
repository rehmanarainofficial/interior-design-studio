import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="font-sans text-gray-900 bg-[#FAFAFA] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-[#543A14] uppercase tracking-widest bg-[#FFF0DC] px-4 py-1.5 rounded-full border border-[#543A14]/15">
            Get in Touch
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#131010]">
            Contact & Showroom Visit
          </h1>
          <p className="text-xs sm:text-base text-gray-600">
            Reach out for free site measurements, physical sample catalogues, or custom quotes nationwide.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
              <h3 className="font-heading font-extrabold text-xl text-[#543A14]">
                Contact Information
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#543A14] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900 block font-bold">Karachi Main Showroom:</strong>
                    <span className="text-gray-600">Shop #13, Shamim Sky Tower, Gulshan-e-Shamim, Federal B Area, Karachi, Pakistan.</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#543A14] shrink-0" />
                  <div>
                    <strong className="text-gray-900 block font-bold">Phone & WhatsApp:</strong>
                    <a href="tel:+923120129016" className="text-gray-700 hover:text-[#543A14] font-bold">+92 312 0129016</a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#543A14] shrink-0" />
                  <div>
                    <strong className="text-gray-900 block font-bold">Official Email:</strong>
                    <a href="mailto:info@urbanflooring.com.pk" className="text-gray-700 hover:text-[#543A14]">info@urbanflooring.com.pk</a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-[#543A14] shrink-0" />
                  <div>
                    <strong className="text-gray-900 block font-bold">Office Hours:</strong>
                    <span className="text-gray-600">Monday - Saturday: 11:00 AM - 9:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/923120129016?text=Hi%20Urban%20Flooring!%20I%20want%20to%20inquire%20about%20flooring%20samples."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] text-white font-bold py-3.5 rounded-xl text-xs flex items-center justify-center space-x-2 shadow-sm hover:brightness-105 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Start WhatsApp Chat Direct</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
              <div>
                <h3 className="font-heading font-extrabold text-2xl text-[#131010] mb-1">
                  Send Us a Message
                </h3>
                <p className="text-xs text-gray-500 font-medium">
                  Fill out your details below and our team will get back to you within 1 hour.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 text-center space-y-4 bg-[#FFF0DC] rounded-xl border border-[#543A14]/20">
                  <CheckCircle2 className="w-12 h-12 text-[#543A14] mx-auto" />
                  <h4 className="font-heading text-lg font-bold text-[#131010]">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs text-gray-700">
                    Thank you! We have received your inquiry and will contact you via WhatsApp / Call shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#543A14] mb-1">Your Name *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Tariq Mansoor"
                        className="w-full bg-gray-50 border border-gray-300 focus:border-[#543A14] focus:bg-white rounded-xl p-3 text-xs text-gray-900 outline-none font-semibold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#543A14] mb-1">Phone / WhatsApp *</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="0312 0000000"
                        className="w-full bg-gray-50 border border-gray-300 focus:border-[#543A14] focus:bg-white rounded-xl p-3 text-xs text-gray-900 outline-none font-semibold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#543A14] mb-1">City *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Karachi, Lahore, Islamabad..."
                        className="w-full bg-gray-50 border border-gray-300 focus:border-[#543A14] focus:bg-white rounded-xl p-3 text-xs text-gray-900 outline-none font-semibold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#543A14] mb-1">Product Category *</label>
                      <select className="w-full bg-gray-50 border border-gray-300 focus:border-[#543A14] focus:bg-white rounded-xl p-3 text-xs text-gray-900 outline-none cursor-pointer font-semibold">
                        <option>SPC Flooring</option>
                        <option>PVC Vinyl Flooring</option>
                        <option>Wooden Hardwood</option>
                        <option>Fluted WPC Panels</option>
                        <option>Window Blinds</option>
                        <option>Gym / Sports Flooring</option>
                        <option>Architectural Interior Services</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#543A14] mb-1">Message / Requirements</label>
                    <textarea 
                      rows="4" 
                      placeholder="Specify your room dimensions or ask any questions..."
                      className="w-full bg-gray-50 border border-gray-300 focus:border-[#543A14] focus:bg-white rounded-xl p-3 text-xs text-gray-900 outline-none resize-none font-normal"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-gold py-3.5 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 shadow-md"
                  >
                    <Send className="w-4 h-4 text-[#F0BB78]" />
                    <span>Send Message to Team</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
