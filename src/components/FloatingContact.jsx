import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingContact() {
  const whatsappNumber = '923102321899';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Hi Interior Design Studio! I would like to book a free site survey and measurement in Karachi.'
  )}`;

  return (
    // Hidden on mobile (hidden md:flex) as requested by user
    <div className="hidden md:flex fixed bottom-6 left-6 z-50 items-center">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 px-5 py-3.5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105"
        aria-label="Direct WhatsApp Contact"
      >
        <MessageCircle className="w-6 h-6 fill-current shrink-0" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap text-xs font-extrabold max-w-xs ml-2.5">
          WhatsApp Direct Inquiry
        </span>
      </a>
    </div>
  );
}
