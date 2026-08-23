import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Layers, Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck, Award, Truck
} from 'lucide-react';
import { FITTING_CATEGORIES } from '../data/productsData';

export default function Footer({ onOpenQuote }) {
  return (
    <footer className="bg-[#131010] text-[#FFF0DC] border-t border-[#543A14]/40 font-sans pt-16 pb-8 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Trust Badges Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 mb-12 border-b border-[#543A14]/60">
          <div className="flex items-center space-x-4 bg-[#1C1817] p-5 rounded-2xl border border-[#F0BB78]/20">
            <div className="w-12 h-12 rounded-xl bg-[#543A14] flex items-center justify-center text-[#F0BB78] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-sm text-[#F0BB78]">100% Water & Termite Guarantee</h4>
              <p className="text-xs text-gray-300 mt-0.5 font-medium">Heavy-duty SPC & Vinyl engineered for Pakistani climate.</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 bg-[#1C1817] p-5 rounded-2xl border border-[#F0BB78]/20">
            <div className="w-12 h-12 rounded-xl bg-[#543A14] flex items-center justify-center text-[#F0BB78] shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-sm text-[#F0BB78]">15+ Years Master Craftsmen</h4>
              <p className="text-xs text-gray-300 mt-0.5 font-medium">Professional site measurement and clean fitting teams.</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 bg-[#1C1817] p-5 rounded-2xl border border-[#F0BB78]/20">
            <div className="w-12 h-12 rounded-xl bg-[#543A14] flex items-center justify-center text-[#F0BB78] shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-sm text-[#F0BB78]">Nationwide Delivery & Fitting</h4>
              <p className="text-xs text-gray-300 mt-0.5 font-medium">Karachi, Lahore, Islamabad, Rawalpindi & nationwide.</p>
            </div>
          </div>
        </div>

        {/* Footer Main Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Col 1: Studio Brand & About */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center space-x-3 group inline-block">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F0BB78] to-[#543A14] flex items-center justify-center shadow-md">
                <Layers className="w-6 h-6 text-[#131010]" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl tracking-tight text-[#FFF0DC]">
                  INTERIOR DESIGN STUDIO
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#F0BB78] font-bold">
                  interiordesignstudiopk.com
                </span>
              </div>
            </Link>
            <p className="text-xs text-gray-300 leading-relaxed pr-4 font-normal">
              Pakistan's premier luxury interior design and flooring specialist contractor. We supply materials and execute complete on-site fitting for houses, offices, shops, gyms, and medical centers across Pakistan.
            </p>
            <div className="pt-2">
              <button 
                onClick={onOpenQuote}
                className="btn-gold px-5 py-2.5 rounded-xl text-xs font-bold flex items-center space-x-2 shadow-md"
              >
                <span>Request Free Sample Book</span>
                <ArrowRight className="w-4 h-4 text-[#131010]" />
              </button>
            </div>
          </div>

          {/* Col 2: Top Fitting Solutions */}
          <div className="space-y-3">
            <h4 className="font-heading text-xs font-bold text-[#F0BB78] uppercase tracking-wider border-b border-[#543A14] pb-2">
              Flooring Fitting
            </h4>
            <ul className="space-y-2 text-xs text-gray-300 font-medium">
              <li><Link to="/products/spc-flooring-fitting" className="hover:text-[#F0BB78] transition-colors">• SPC Waterproof Plank Fitting</Link></li>
              <li><Link to="/products/pvc-vinyl-fitting" className="hover:text-[#F0BB78] transition-colors">• PVC Vinyl Planks & Sheets</Link></li>
              <li><Link to="/products/wooden-flooring-fitting" className="hover:text-[#F0BB78] transition-colors">• Hardwood & Parquet Fitting</Link></li>
              <li><Link to="/products/gym-rubber-fitting" className="hover:text-[#F0BB78] transition-colors">• Gym Rubber Tile Fitting</Link></li>
              <li><Link to="/products/carpet-tile-fitting" className="hover:text-[#F0BB78] transition-colors">• Commercial Carpet Tiles</Link></li>
            </ul>
          </div>

          {/* Col 3: Blinds & Wall Covering */}
          <div className="space-y-3">
            <h4 className="font-heading text-xs font-bold text-[#F0BB78] uppercase tracking-wider border-b border-[#543A14] pb-2">
              Wall & Window Fitting
            </h4>
            <ul className="space-y-2 text-xs text-gray-300 font-medium">
              <li><Link to="/products/wpc-fluted-wall-fitting" className="hover:text-[#F0BB78] transition-colors">• WPC Fluted Slat Media Wall</Link></li>
              <li><Link to="/products/shop-pvc-wall-fitting" className="hover:text-[#F0BB78] transition-colors">• Damp-Proof PVC Wall Panels</Link></li>
              <li><Link to="/products/korean-wallpaper-fitting" className="hover:text-[#F0BB78] transition-colors">• Korean 3D Wallpaper Fitting</Link></li>
              <li><Link to="/products/window-blinds-fitting" className="hover:text-[#F0BB78] transition-colors">• Motorized Window Blinds</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact & Showroom */}
          <div className="space-y-3">
            <h4 className="font-heading text-xs font-bold text-[#F0BB78] uppercase tracking-wider border-b border-[#543A14] pb-2">
              Showroom & Contact
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300 font-medium">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#F0BB78] shrink-0 mt-0.5" />
                <span>Shop #13, Shamim Sky Tower, Gulshan-e-Shamim, Federal B Area, Karachi.</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#F0BB78] shrink-0" />
                <a href="tel:+923120129016" className="hover:text-[#F0BB78] font-bold">+92 312 0129016</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#F0BB78] shrink-0" />
                <a href="mailto:info@interiordesignstudiopk.com" className="hover:text-[#F0BB78]">info@interiordesignstudiopk.com</a>
              </li>
              <li className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-[#F0BB78] shrink-0" />
                <span>Mon - Sat: 11:00 AM - 9:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 border-t border-[#543A14]/60 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4 font-medium">
          <p>© {new Date().getFullYear()} Interior Design Studio (interiordesignstudiopk.com). All Rights Reserved.</p>
          <div className="flex space-x-6">
            <Link to="/about" className="hover:text-[#F0BB78]">Company Profile</Link>
            <Link to="/contact" className="hover:text-[#F0BB78]">Site Survey Booking</Link>
            <Link to="/projects" className="hover:text-[#F0BB78]">Executed Projects</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
