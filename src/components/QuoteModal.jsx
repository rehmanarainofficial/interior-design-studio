import React from "react";
import { X, MessageCircle, Phone } from "lucide-react";

export default function QuoteModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-200 text-[#111111] space-y-6 text-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 hover:bg-[#C19A5B] hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2">
          <span className="text-[10px] font-bold text-[#C19A5B] uppercase tracking-widest bg-[#FFF0DC] px-3 py-1 rounded-full border border-[#C19A5B]/20">
            On-Site Service
          </span>
          <h3 className="font-heading font-semibold text-2xl text-[#111111] mt-2">
            Book Site Survey & Sample Visit
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed max-w-xs mx-auto">
            Contact our senior contractor directly on WhatsApp for doorstep
            sample kits and exact site measurements in Karachi.
          </p>
        </div>

        <div className="space-y-3 pt-2">
          <a
            href="https://wa.me/923102321899?text=Hi%20Interior%20Design%20Studio!%20I%20want%20to%20book%20a%20site%20survey%20and%20sample%20visit."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-xl text-sm flex items-center justify-center space-x-2 shadow-lg transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Connect on WhatsApp (0310 2321899)</span>
          </a>

          <a
            href="tel:03102321899"
            className="w-full bg-gray-100 hover:bg-gray-200 text-[#111111] font-bold py-3.5 rounded-xl text-xs flex items-center justify-center space-x-2 transition-all"
          >
            <Phone className="w-4 h-4 text-[#C19A5B]" />
            <span>Call Directly: 0310 2321899</span>
          </a>
        </div>
      </div>
    </div>
  );
}
