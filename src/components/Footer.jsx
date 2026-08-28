import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  MessageCircle,
  Share2,
} from "lucide-react";

export default function Footer({ onOpenQuote }) {
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(path);
  };

  return (
    <footer className="bg-[#262628] text-white font-sans pt-20 pb-12 border-t border-[#C19A5B]/30 relative overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C19A5B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C19A5B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Footer Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 items-start">
          {/* Col 1: Studio Identity & Direct Contact Details */}
          <div className="lg:col-span-2 space-y-6">
            <button
              onClick={() => handleNavClick("/")}
              className="flex items-center text-left group focus:outline-none"
            >
              <img
                src="/full logo.png"
                alt="Interior Design Studio Pakistan"
                className="h-12 invert sm:h-16 lg:h-20 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </button>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal max-w-sm">
              Award-winning interior design studio transforming spaces into
              extraordinary experiences. Residential, commercial, and
              hospitality design in Karachi, Pakistan.
            </p>

            {/* Direct Contact Stack */}
            <div className="space-y-3 text-xs sm:text-sm text-gray-300 font-medium">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#C19A5B] shrink-0" />
                <a
                  href="tel:03102321899"
                  className="hover:text-[#C19A5B] font-bold"
                >
                  0310 2321899
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#C19A5B] shrink-0" />
                <a
                  href="mailto:interiordesignstudiopk@gmail.com"
                  className="hover:text-[#C19A5B]"
                >
                  interiordesignstudiopk@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#C19A5B] shrink-0 mt-0.5" />
                <span>
                  Shop No 132, Shamim Sky Tower, Federal B Area Block 9
                  Yaseenabad, Karachi.
                </span>
              </div>
            </div>

            {/* ONLY FACEBOOK, INSTAGRAM, AND WHATSAPP SOCIAL ICONS UNDER LOCATION */}
            <div className="flex items-center space-x-3 pt-2">
              {/* Facebook */}
              <a
                href="https://facebook.com/interiordesignstudiopk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#1877F2] transition-all shadow-md"
                aria-label="Facebook Page"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/interiordesignstudiopk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#E4405F] transition-all shadow-md"
                aria-label="Instagram Profile"
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

              {/* WhatsApp */}
              <a
                href="https://wa.me/923102321899"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#25D366] transition-all shadow-md"
                aria-label="WhatsApp Direct Chat"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>

          {/* Col 2: SERVICES */}
          <div className="space-y-4">
            <h4 className="font-sans-heading text-xs font-bold text-[#C19A5B] uppercase tracking-widest border-b border-gray-700 pb-2">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300 font-medium">
              <li>
                <button
                  onClick={() => handleNavClick("/products/spc-flooring")}
                  className="hover:text-[#C19A5B] transition-colors text-left"
                >
                  Residential Flooring
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("/products/carpet-tiles")}
                  className="hover:text-[#C19A5B] transition-colors text-left"
                >
                  Commercial Fit-outs
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("/products/fluted-panels")}
                  className="hover:text-[#C19A5B] transition-colors text-left"
                >
                  Wall Cladding & Slats
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("/products/roller-blinds")}
                  className="hover:text-[#C19A5B] transition-colors text-left"
                >
                  Motorized Blinds
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("/products/false-ceiling")}
                  className="hover:text-[#C19A5B] transition-colors text-left"
                >
                  Gypsum False Ceiling
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: RESOURCES */}
          <div className="space-y-4">
            <h4 className="font-sans-heading text-xs font-bold text-[#C19A5B] uppercase tracking-widest border-b border-gray-700 pb-2">
              Resources
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300 font-medium">
              <li>
                <button
                  onClick={() => handleNavClick("/projects")}
                  className="hover:text-[#C19A5B] transition-colors text-left"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("/category/flooring")}
                  className="hover:text-[#C19A5B] transition-colors text-left"
                >
                  Material Catalog
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("/about")}
                  className="hover:text-[#C19A5B] transition-colors text-left"
                >
                  Execution Protocol
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    onOpenQuote();
                  }}
                  className="hover:text-[#C19A5B] transition-colors text-left"
                >
                  Book Site Survey
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: COMPANY */}
          <div className="space-y-4">
            <h4 className="font-sans-heading text-xs font-bold text-[#C19A5B] uppercase tracking-widest border-b border-gray-700 pb-2">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300 font-medium">
              <li>
                <button
                  onClick={() => handleNavClick("/about")}
                  className="hover:text-[#C19A5B] transition-colors text-left"
                >
                  About Studio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("/contact")}
                  className="hover:text-[#C19A5B] transition-colors text-left"
                >
                  Contact & Showroom
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("/projects")}
                  className="hover:text-[#C19A5B] transition-colors text-left"
                >
                  Executed Work
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4 font-normal">
          <p>
            © {new Date().getFullYear()} Interior Design Studio
            (interiordesignstudiopk.com). All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <button
              onClick={() => handleNavClick("/about")}
              className="hover:text-[#C19A5B] transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => handleNavClick("/contact")}
              className="hover:text-[#C19A5B] transition-colors"
            >
              Site Measurement Terms
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
