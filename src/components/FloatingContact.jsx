import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingContact() {
  const whatsappUrl = `https://wa.me/923120129016?text=${encodeURIComponent("Hi Interior Design Studio! I am interested in your flooring & interior installation services. Please share details.")}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 font-sans">
      {/* Clean Floating WhatsApp Button Only (No dot, no extra call button) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform group"
        title="Chat on WhatsApp +92 312 0129016"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
