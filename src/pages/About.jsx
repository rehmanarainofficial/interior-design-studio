import {
  MessageCircle,
  Hammer,
  Feather,
  Users,
  Sparkles,
  Award,
} from "lucide-react";
import SEO from "../components/SEO";

export default function About({ onOpenQuote }) {
  return (
    <div className="font-sans text-[#111111] bg-[#FAFAFA] min-h-screen">
      <SEO
        title="About Us & Why Choose Interior Design Studio"
        description="Learn about Pakistan's premier interior execution contractor. 7+ years on-site experience, 500+ completed projects, and 100% water & termite proofing guarantee in Karachi."
        keywords="about interior design studio, why choose interior design studio, flooring contractor legacy karachi, 100% water proof guarantee karachi"
      />

      {/* ========================================================================= */}
      {/* 1. HERO BANNER */}
      {/* ========================================================================= */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-[#262628] text-white border-b border-[#C19A5B]/30">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2560"
            alt="Interior Design Studio Pakistan"
            className="w-full h-full object-cover brightness-90 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#262628]/95 via-[#262628]/85 to-[#262628]/60" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-[#C19A5B]/20 backdrop-blur-md border border-[#C19A5B]/40 px-3.5 sm:px-4 py-1.5 rounded-full shadow-lg max-w-full overflow-hidden">
            <Sparkles className="w-3.5 h-3.5 text-[#C19A5B] shrink-0" />
            <span className="text-[10px] sm:text-xs font-semibold text-[#C19A5B] uppercase tracking-wider whitespace-nowrap">
              Turnkey Contracting Legacy
            </span>
          </div>

          <h1 className="font-heading font-medium text-4xl sm:text-6xl lg:text-7xl text-white leading-tight">
            Crafting Timeless & <br />
            <span className="italic font-normal text-[#FFF0DC]">
              Extraordinary Spaces
            </span>
          </h1>

          <p className="text-sm sm:text-lg text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Pakistan's leading turnkey interior design and flooring execution
            specialist. We supply premium materials and fit bungalows, corporate
            offices, gyms, and medical centers in Karachi.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                onOpenQuote();
              }}
              className="btn-gold px-8 py-3.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center space-x-2 shadow-xl"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>Book Site Survey</span>
            </button>

            <a
              href="https://wa.me/923102321899?text=Hi%20Interior%20Design%20Studio!%20I%20want%20to%20inquire%20about%20your%20company."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-7 py-3.5 rounded-xl text-xs sm:text-sm font-semibold border border-white/20 transition-all flex items-center space-x-2"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. DEDICATED SECTION: WHY INTERIOR DESIGN STUDIO (MATCHING REFERENCE IMAGE) */}
      {/* ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header matching reference image layout */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-gray-200 pb-8 mb-12">
          <div>
            <h2 className="font-heading text-3xl sm:text-5xl font-semibold text-[#111111]">
              Why Interior Design Studio
            </h2>
          </div>
          <div className="text-xs sm:text-sm text-gray-500 font-medium md:border-l border-gray-300 md:pl-6">
            Transform Your Space with Luxury Interior Contracting in Karachi
          </div>
        </div>

        {/* 4 Cards matching reference image layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#FFF0DC] text-[#C19A5B] flex items-center justify-center">
              <Feather className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-semibold text-xl text-[#111111]">
              Expertise in Bespoke Luxury
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
              Interior Design Studio stands out as a premier choice for those
              seeking bespoke luxury interior execution. Our team specializes in
              creating personalized, opulent spaces that reflect the
              individuality and lifestyle of our clients. From conceptualization
              to flawless site execution, we bring a unique touch to each
              project, ensuring a result that exceeds expectations.
            </p>
          </div>

          {/* Card 2 */}
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#FFF0DC] text-[#C19A5B] flex items-center justify-center">
              <Hammer className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-semibold text-xl text-[#111111]">
              Unparalleled Craftsmanship
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
              At Interior Design Studio, craftsmanship is at the core of our
              design and contracting philosophy. Our skilled artisans are
              dedicated to achieving perfection in every detail. From intricate
              woodwork to precision subfloor levelling and seamless joint
              assembly, our commitment to flawless execution sets us apart. The
              result is a space that not only looks stunning but also exudes
              quality.
            </p>
          </div>

          {/* Card 3 */}
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#FFF0DC] text-[#C19A5B] flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-semibold text-xl text-[#111111]">
              Innovative Material Solutions
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
              Choose Interior Design Studio for innovative and forward-thinking
              contracting solutions. Our team embraces modern material
              science—from 100% water and termite proof rigid core SPC flooring
              to damp-proof PVC cladding and thermal motorized blinds—ensuring
              your space reflects contemporary trends while maintaining timeless
              durability and functionality.
            </p>
          </div>

          {/* Card 4 */}
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#FFF0DC] text-[#C19A5B] flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-semibold text-xl text-[#111111]">
              Client-Centric Approach & Trust
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
              Interior Design Studio prioritizes a client-centric approach,
              making your satisfaction and vision our top priority. We engage in
              open communication throughout the measurement and installation
              process, providing doorstep sample testing and digital laser
              surveys. With a commitment to excellence and 20-year warranties,
              we strive to make your experience truly exceptional.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SHOWROOM & DIRECT SURVEY CTA */}
      {/* ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm space-y-8 text-center max-w-4xl mx-auto">
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#C19A5B] uppercase tracking-widest bg-[#FFF0DC] px-4 py-1.5 rounded-full border border-[#C19A5B]/20">
              Visit Us in Karachi
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-semibold text-[#111111]">
              Ready to Transform Your Property?
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto font-normal">
              Visit our Karachi showroom at Shop No 132, Shamim Sky Tower,
              Federal B Area Block 9 Yaseenabad, or call us directly at 0310
              2321899.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                onOpenQuote();
              }}
              className="btn-gold px-8 py-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center space-x-2 shadow-xl"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>Book Site Survey</span>
            </button>

            <a
              href="https://wa.me/923102321899?text=Hi%20Interior%20Design%20Studio!%20I%20want%20to%20book%20a%20site%20visit."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-7 py-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center space-x-2 shadow-md hover:brightness-105 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat Direct (0310 2321899)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
