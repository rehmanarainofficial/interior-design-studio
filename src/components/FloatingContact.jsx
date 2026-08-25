import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingContact() {
  const whatsappNumber = '923102321899';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Hi Interior Design Studio! I would like to book a site survey and measurement in Karachi.'
  )}`;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center justify-center bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 sm:p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 border-2 border-white/20"
        aria-label="Direct WhatsApp Contact"
      >
        {/* Pulsing Backlight Effect */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 group-hover:opacity-75 blur-md transition duration-300 animate-pulse"></span>
        
        {/* WhatsApp Icon */}
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-current relative z-10" />
      </a>
    </div>
  );
}
