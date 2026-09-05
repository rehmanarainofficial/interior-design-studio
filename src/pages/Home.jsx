import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Sparkles,
  ShieldCheck,
  Award,
  ArrowRight,
  Check,
  Eye,
  Calculator,
  Layers,
  Star,
  ChevronRight,
  CheckCircle2,
  Phone,
  MapPin,
  Building2,
  Home as HomeIcon,
  Dumbbell,
  Stethoscope,
  Send,
  MessageCircle,
  Clock,
  Mail,
  CheckCircle,
  ChevronLeft,
  ExternalLink,
  Ruler,
  PackageCheck,
  Hammer,
  Globe,
} from "lucide-react";
import {
  FITTING_CATEGORIES,
  SOLUTIONS_DATA,
  PROJECTS_DATA,
} from "../data/productsData";
import SEO from "../components/SEO";

// Hero background images mapping per property category
const HERO_BACKGROUNDS = {
  residential: "/images/products/hero_hospitality.webp",
  commercial: "/images/products/hero_commercial.webp",
};

// Authentic Google Business Profile Reviews from Google Maps / GBP
const ENHANCED_REVIEWS = [
  {
    name: "M. Tariq",
    role: "Verified Google Client",
    quote: "Highly recommend for flooring and home decor.",
    rating: 5,
    source: "Google Business Review",
    date: "Verified Review • 4 weeks ago",
  },
  {
    name: "Iqra",
    role: "Verified Google Client",
    quote: "A big THANK YOU to the team at Interior Design Studio for transforming my space into a haven of beauty and comfort. The attention to detail was exceptional, from the layout and color palette to the choice of furnishings. Highly recommend!",
    rating: 5,
    source: "Google Business Review",
    date: "Verified Review • 4 weeks ago",
  },
  {
    name: "Shoaib Baig",
    role: "Verified Google Client",
    quote: "The interior design studio is by far the BEST I have ever worked with. Their process was clear, seamless and enjoyable. They accommodated every request without hesitation and made sure our vision came to life. 10/10 service and experience!",
    rating: 5,
    source: "Google Business Review",
    date: "Verified Review • 4 weeks ago",
  },
  {
    name: "Zeeshan Butt",
    role: "Verified Google Client",
    quote: "Amazing work by the interior design studio! They completely transformed our office into a modern and functional space. The team was professional, creative, and attentive to our needs. Highly recommend their services!",
    rating: 5,
    source: "Google Business Review",
    date: "Verified Review • 4 weeks ago",
  },
  {
    name: "Ray Yan",
    role: "Verified Google Client",
    quote: "Best interior design studio in Karachi! Their work is really exceptional and top notch.",
    rating: 5,
    source: "Google Business Review",
    date: "Verified Review • 4 weeks ago",
  },
  {
    name: "Arsalan Rajput",
    role: "Verified Google Client",
    quote: "Interior Design Studio has completely transformed my home with their stunning work. From the initial consultation to the final execution, the team was professional, creative, and attentive to my preferences. The quality of materials and attention to detail are top-notch. Highly recommend!",
    rating: 5,
    source: "Google Business Review",
    date: "Verified Review • 4 weeks ago",
  },
  {
    name: "Hammad Hashim",
    role: "Verified Google Client",
    quote: "Very good service in Karachi.",
    rating: 5,
    source: "Google Business Review",
    date: "Verified Review • 4 weeks ago",
  },
  {
    name: "Tahir Kalwar",
    role: "Verified Google Client",
    quote: "Top notch interior design contractor in Karachi, very satisfied with their work and commitment.",
    rating: 5,
    source: "Google Business Review",
    date: "Verified Review • 4 weeks ago",
  },
  {
    name: "Areeb Malik",
    role: "Verified Google Client",
    quote: "Best interior design studio in Karachi! Highly recommended 👍🏻",
    rating: 5,
    source: "Google Business Review",
    date: "Verified Review • 4 weeks ago",
  },
  {
    name: "Aal-E-Raza",
    role: "Verified Google Client",
    quote: "Superior quality products and best services 👍🏻👏🏻",
    rating: 5,
    source: "Google Business Review",
    date: "Verified Review • 4 weeks ago",
  },
  {
    name: "Kamran Roy",
    role: "Verified Google Client",
    quote: "Best interior design studio in Karachi.",
    rating: 5,
    source: "Google Business Review",
    date: "Verified Review • 4 weeks ago",
  },
  {
    name: "Umair Ahmed",
    role: "Verified Google Client",
    quote: "Great and professional dynamic interior design team in town.",
    rating: 5,
    source: "Google Business Review",
    date: "Verified Review • 4 weeks ago",
  },
  {
    name: "Adeel Raza",
    role: "Verified Google Client",
    quote: "Exceptional interior design services.",
    rating: 5,
    source: "Google Business Review",
    date: "Verified Review • 4 weeks ago",
  },
  {
    name: "Mirza Nasir",
    role: "Verified Google Client",
    quote: "Best flooring and interior work in Karachi, I'm satisfied with their work and time commitment. 👏🏻",
    rating: 5,
    source: "Google Business Review",
    date: "Verified Review • 4 weeks ago",
  },
  {
    name: "Rehan Riaz",
    role: "Verified Google Client",
    quote: "Interior design studio work is very good, on time work.",
    rating: 5,
    source: "Google Business Review",
    date: "Verified Review • 4 weeks ago",
  },
  {
    name: "Saad Bin Tariq",
    role: "Verified Google Client",
    quote: "Amazing experience! The team at Interior Design Studio transformed our space into something truly special with great quality and professionalism.",
    rating: 5,
    source: "Google Business Review",
    date: "Verified Review • 4 weeks ago",
  },
  {
    name: "Ameer Hamza",
    role: "Verified Google Client",
    quote: "Interior Design Studio delivered exceptional quality on our project with top grade flooring and wall panels. Very cooperative team and on-time delivery. Highly recommended!",
    rating: 5,
    source: "Google Business Review",
    date: "Verified Review • 4 weeks ago",
  },
  {
    name: "Muhammad Fahad",
    role: "Verified Google Client",
    quote: "Extremely professional interior designers in Karachi, best wooden flooring and blinds service.",
    rating: 5,
    source: "Google Business Review",
    date: "Verified Review • 4 weeks ago",
  },
  {
    name: "Asad Ali",
    role: "Verified Google Client",
    quote: "5 Star service.",
    rating: 5,
    source: "Google Business Review",
    date: "Verified Review • 4 weeks ago",
  },
  {
    name: "Anas Siddiqui",
    role: "Verified Google Client",
    quote: "Best work in progress.",
    rating: 5,
    source: "Google Business Review",
    date: "Verified Review • 4 weeks ago",
  },
  {
    name: "Farhan Saif",
    role: "Verified Google Client",
    quote: "Top quality SPC wood flooring.",
    rating: 5,
    source: "Google Business Review",
    date: "Verified Review • 4 weeks ago",
  },
  {
    name: "Shahrukh Khan",
    role: "Verified Google Client",
    quote: "Excellent work 👍",
    rating: 5,
    source: "Google Business Review",
    date: "Verified Review • 4 weeks ago",
  },
  {
    name: "Uzair Shaikh",
    role: "Verified Google Client",
    quote: "Excellent work Karachi studio 🌸🌸🌸🌸",
    rating: 5,
    source: "Google Business Review",
    date: "Verified Review • 4 weeks ago",
  },
  {
    name: "Fawwaz Lodhi",
    role: "Verified Google Client",
    quote: "Outstanding interior renovation team in Karachi, always delivering on their promise.",
    rating: 5,
    source: "Google Business Review",
    date: "Verified Review • 4 weeks ago",
  },
  {
    name: "Bilal Khan",
    role: "Verified Google Client",
    quote: "Best studio that I ever worked with.",
    rating: 5,
    source: "Google Business Review",
    date: "Verified Review • 4 weeks ago",
  },
];

export default function Home({ onOpenQuote }) {
  const [heroCategory, setHeroCategory] = useState("residential");
  const [activeTab, setActiveTab] = useState("flooring");
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  // HERO DIGITS COUNTER STATE (Initialized with final values to prevent CLS & TBT)
  const [counts, setCounts] = useState({
    projects: 500,
    years: 7,
    awards: 12,
    satisfaction: 100,
  });

  // Vertical line animated height on scroll
  const [lineProgress, setLineProgress] = useState(0);
  const processSectionRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (!processSectionRef.current) return;
      const rect = processSectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = rect.height;
      const currentScroll = windowHeight - rect.top;
      let progress = (currentScroll / (totalHeight + windowHeight * 0.3)) * 100;
      progress = Math.min(Math.max(progress, 0), 100);
      setLineProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (path) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(path);
  };

  const selectedCategory =
    FITTING_CATEGORIES.find((c) => c.id === activeTab) || FITTING_CATEGORIES[0];

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  const nextReview = () => {
    setCurrentReviewIndex((prev) => (prev + 1) % ENHANCED_REVIEWS.length);
  };

  const prevReview = () => {
    setCurrentReviewIndex(
      (prev) => (prev - 1 + ENHANCED_REVIEWS.length) % ENHANCED_REVIEWS.length,
    );
  };

  return (
    <div className="font-sans text-[#111111] bg-[#FAFAFA] min-h-screen">
      <SEO
        title="Interior Design Studio | Luxury Flooring & Fitting Contractor Karachi"
        description="Pakistan's premier turnkey interior design & flooring contractor in Karachi. Specializing in SPC wood flooring, vinyl sheets, fluted wall panels, motorized blinds & false ceilings."
        keywords="interior design studio karachi, flooring contractor near me, spc flooring fitting karachi, vinyl flooring karachi, fluted wall panel contractor, interior designer near me"
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION WITH ANIMATED DIGIT COUNTERS */}
      {/* ========================================================================= */}
      <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden pt-28 pb-12 px-4 sm:px-6 lg:px-8 bg-[#111111] border-b border-[#C19A5B]/30">
        {/* Dynamic Category Background Photograph */}
        <div className="absolute inset-0 z-0">
          <img
            key={heroCategory}
            src={HERO_BACKGROUNDS[heroCategory]}
            alt="Interior Design Studio Pakistan"
            fetchPriority="high"
            loading="eager"
            decoding="sync"
            width="1920"
            height="1080"
            className="w-full h-full object-cover scale-105 transition-all duration-700 brightness-90 contrast-105"
          />
          {/* Subtle Dark Vignette & Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/95 via-[#111111]/75 to-[#111111]/40 md:to-[#111111]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-[#111111]/60" />
        </div>

        {/* Main Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto w-full text-left space-y-8 animate-fade-in my-auto">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-3.5 sm:px-4 py-1.5 rounded-full shadow-lg max-w-full overflow-hidden">
            <Building2 className="w-3.5 h-3.5 text-[#C19A5B] shrink-0" />
            <span className="text-[10px] sm:text-xs font-semibold text-white tracking-wide whitespace-nowrap">
              {counts.projects.toLocaleString()}+ Projects Completed
            </span>
          </div>

          <h1 className="font-heading font-medium text-4xl sm:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight max-w-4xl">
            Expert Design, Premium Material, Flawless Finish,{" "}
            <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#FFF0DC]">
              Your Dream Interior Start Here.
            </span>
          </h1>

          <p className="text-sm sm:text-lg text-gray-200 leading-relaxed font-normal max-w-2xl">
            We supply and professionally install high-quality flooring, window
            blinds, wall paneling, and custom interior solutions for homes,
            villas, and commercial offices across Karachi.
          </p>

          {/* Interactive Property Category Pill Tabs */}
          <div className="flex flex-wrap gap-2.5 pt-2">
            <button
              onClick={() => setHeroCategory("residential")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                heroCategory === "residential"
                  ? "bg-white text-[#111111] shadow-lg scale-105 font-bold"
                  : "bg-black/40 backdrop-blur-md text-gray-200 border border-white/20 hover:bg-white/20"
              }`}
            >
              Residential
            </button>

            <button
              onClick={() => setHeroCategory("commercial")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                heroCategory === "commercial"
                  ? "bg-white text-[#111111] shadow-lg scale-105 font-bold"
                  : "bg-black/40 backdrop-blur-md text-gray-200 border border-white/20 hover:bg-white/20"
              }`}
            >
              Commercial
            </button>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => handleLinkClick("/projects")}
              className="btn-gold px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold flex items-center space-x-2 shadow-xl"
            >
              <span>View Portfolio</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>

            <a
              href="https://wa.me/923102321899?text=Hi%20Interior%20Design%20Studio!%20I%20want%20to%20book%20a%20free%20site%20measurement."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold flex items-center space-x-2 shadow-xl transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Direct Inquiry</span>
            </a>
          </div>
        </div>

        {/* HERO BOTTOM STATS BAR WITH SMOOTH COUNTER ANIMATION */}
        <div className="relative z-10 max-w-6xl mx-auto w-full pt-12 border-t border-white/15">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            <div>
              <span className="font-heading text-3xl sm:text-5xl font-semibold text-[#C19A5B] block transition-all">
                {counts.projects.toLocaleString()}+
              </span>
              <span className="text-[10px] sm:text-xs text-gray-300 font-bold uppercase tracking-widest mt-1 block">
                Projects Completed
              </span>
            </div>
            <div>
              <span className="font-heading text-3xl sm:text-5xl font-semibold text-[#C19A5B] block transition-all">
                {counts.years}+
              </span>
              <span className="text-[10px] sm:text-xs text-gray-300 font-bold uppercase tracking-widest mt-1 block">
                Years Experience
              </span>
            </div>
            <div>
              <span className="font-heading text-3xl sm:text-5xl font-semibold text-[#C19A5B] block transition-all">
                {counts.awards}
              </span>
              <span className="text-[10px] sm:text-xs text-gray-300 font-bold uppercase tracking-widest mt-1 block">
                Design Awards
              </span>
            </div>
            <div>
              <span className="font-heading text-3xl sm:text-5xl font-semibold text-[#C19A5B] block transition-all">
                {counts.satisfaction}%
              </span>
              <span className="text-[10px] sm:text-xs text-gray-300 font-bold uppercase tracking-widest mt-1 block">
                Client Satisfaction
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. PROVEN RELIABILITY SECTION */}
      {/* ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200 text-[#111111]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-6">
            <span className="text-xs font-bold text-[#C19A5B] uppercase tracking-widest bg-[#FFF0DC] px-4 py-1.5 rounded-full border border-[#C19A5B]/20">
              Track Record & Guarantee
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-semibold text-[#111111] mt-3">
              Proven Reliability Across Pakistan
            </h2>
          </div>

          {/* Stats Bar & Trust Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-[#262628] text-white p-8 rounded-3xl border border-[#C19A5B]/30 shadow-xl space-y-3">
              <span className="font-heading font-semibold text-4xl sm:text-5xl text-[#C19A5B] block">
                7+ Years
              </span>
              <h3 className="font-sans-heading font-bold text-lg text-white">
                Site Fitting Experience
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 font-normal">
                Master craftsmen specializing in flooring, wall cladding, and
                motorized window blinds.
              </p>
            </div>

            <div className="bg-[#262628] text-white p-8 rounded-3xl border border-[#C19A5B]/30 shadow-xl space-y-3">
              <span className="font-heading font-semibold text-4xl sm:text-5xl text-[#C19A5B] block">
                500+
              </span>
              <h3 className="font-sans-heading font-bold text-lg text-white">
                Completed Projects
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 font-normal">
                Delivered bungalows, corporate office floors, commercial gyms,
                and hospital OT rooms in Karachi.
              </p>
            </div>

            <div className="bg-[#262628] text-white p-8 rounded-3xl border border-[#C19A5B]/30 shadow-xl space-y-3">
              <span className="font-heading font-semibold text-4xl sm:text-5xl text-[#C19A5B] block">
                7-Year
              </span>
              <h3 className="font-sans-heading font-bold text-lg text-white">
                Industry Expertise
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 font-normal">
                Over two decades of experience delivering premium flooring and
                interior finishing solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SOLUTIONS CATALOG */}
      {/* ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <span className="text-xs font-bold text-[#C19A5B] uppercase tracking-widest bg-[#FFF0DC] px-4 py-1.5 rounded-full border border-[#C19A5B]/20">
            Solutions Catalog
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-semibold text-[#111111] mt-3">
            Best Selling Solutions & Services
          </h2>
          <p className="text-sm text-gray-600">
            Hover over any solution image to view installation details and
            material specs.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2.5 pt-4">
            {FITTING_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === cat.id
                    ? "bg-[#C19A5B] text-white shadow-md scale-105"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-[#FFF0DC]/40"
                }`}
              >
                {cat.name} ({cat.items.length})
              </button>
            ))}
          </div>
        </div>

        {/* Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-2">
          {selectedCategory.items.slice(0, 6).map((item) => {
            const detail = SOLUTIONS_DATA[item.id] || {};
            return (
              <div
                key={item.id}
                onClick={() => handleLinkClick(`/products/${item.id}`)}
                className="relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-lg group cursor-pointer border border-gray-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Full Card Background Image */}
                <img
                  src={
                    detail.image ||
                    "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800"
                  }
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Initial Badge */}
                {item.badge && (
                  <span className="absolute top-4 right-4 text-[10px] font-bold bg-[#C19A5B] text-white px-3 py-1 rounded-full shadow-md z-10">
                    {item.badge}
                  </span>
                )}

                {/* Bottom Permanent Name Bar */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 z-10 transition-opacity duration-300 group-hover:opacity-0">
                  <h3 className="font-heading font-semibold text-lg text-white truncate">
                    {item.name}
                  </h3>
                </div>

                {/* HOVER OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/95 via-[#111111]/85 to-[#111111]/30 opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 flex flex-col justify-end text-white z-20 space-y-3">
                  <span className="text-[10px] font-bold text-[#C19A5B] uppercase tracking-wider">
                    {selectedCategory.name} Solution
                  </span>

                  <h3 className="font-heading font-semibold text-2xl text-white leading-tight">
                    {item.name}
                  </h3>

                  <p className="text-xs text-gray-300 line-clamp-3 leading-relaxed font-normal">
                    {detail.subtitle ||
                      detail.description ||
                      "Complete material supply + turnkey installation service across Pakistan."}
                  </p>

                  <div className="pt-2">
                    <button className="btn-gold w-full py-3 rounded-xl text-xs font-semibold flex items-center justify-center space-x-2 shadow-lg">
                      <span>View Execution Details</span>
                      <ChevronRight className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        {selectedCategory.items.length > 6 && (
          <div className="text-center pt-10">
            <button
              onClick={() =>
                handleLinkClick(`/category/${selectedCategory.id}`)
              }
              className="btn-gold px-8 py-3.5 rounded-xl text-xs sm:text-sm font-semibold inline-flex items-center space-x-2 shadow-lg"
            >
              <span>
                View All {selectedCategory.name} Solutions (
                {selectedCategory.items.length})
              </span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        )}
      </section>

      {/* ========================================================================= */}
      {/* 4. OUR PROCESS / HOW WE WORK */}
      {/* ========================================================================= */}
      <section
        ref={processSectionRef}
        className="py-24 px-4 sm:px-6 lg:px-8 bg-[#262628] text-white border-t border-[#C19A5B]/30 relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto space-y-16 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-[#C19A5B] uppercase tracking-widest bg-[#C19A5B]/15 px-4 py-1.5 rounded-full border border-[#C19A5B]/30">
              Our Process
            </span>
            <h2 className="font-heading text-4xl sm:text-6xl font-medium text-white mt-3">
              How We Work
            </h2>
            <p className="text-sm sm:text-base text-gray-300 font-normal leading-relaxed">
              A collaborative four-step journey from initial vision to final
              reveal, ensuring every detail reflects your unique story.
            </p>
          </div>

          <div className="relative pt-6">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-700/60 hidden md:block" />

            <div
              className="absolute left-1/2 -translate-x-1/2 top-0 w-1 bg-gradient-to-b from-[#C19A5B] via-[#E2BD80] to-[#C19A5B] shadow-[0_0_12px_#C19A5B] transition-all duration-300 hidden md:block rounded-full"
              style={{ height: `${lineProgress}%` }}
            />

            <div className="space-y-16 md:space-y-24">
              {/* STEP 01 */}
              <div className="relative grid grid-cols-1 md:grid-cols-12 items-center gap-8">
                <div className="hidden md:block md:col-span-5 text-right pr-8" />
                <div className="md:col-span-2 flex justify-center z-20">
                  <div className="w-16 h-16 rounded-full bg-[#C19A5B] text-white font-heading font-semibold text-xl flex items-center justify-center shadow-xl border-4 border-[#262628] scale-110">
                    01
                  </div>
                </div>
                <div className="md:col-span-5 pl-0 md:pl-8 space-y-2">
                  <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-white">
                    Consult
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                    We begin with an in-depth conversation to understand your
                    vision, lifestyle, and goals. This discovery phase shapes
                    every decision that follows.
                  </p>
                </div>
              </div>

              {/* STEP 02 */}
              <div className="relative grid grid-cols-1 md:grid-cols-12 items-center gap-8">
                <div className="md:col-span-5 text-left md:text-right pr-0 md:pr-8 space-y-2 order-2 md:order-1">
                  <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-white">
                    Design
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                    Our team develops detailed concept boards, floor plans, 3D
                    renderings, and material palettes that bring your vision to
                    life before any work begins.
                  </p>
                </div>
                <div className="md:col-span-2 flex justify-center z-20 order-1 md:order-2">
                  <div className="w-16 h-16 rounded-full bg-[#C19A5B] text-white font-heading font-semibold text-xl flex items-center justify-center shadow-xl border-4 border-[#262628] scale-110">
                    02
                  </div>
                </div>
                <div className="hidden md:block md:col-span-5 order-3" />
              </div>

              {/* STEP 03 */}
              <div className="relative grid grid-cols-1 md:grid-cols-12 items-center gap-8">
                <div className="hidden md:block md:col-span-5 text-right pr-8" />
                <div className="md:col-span-2 flex justify-center z-20">
                  <div className="w-16 h-16 rounded-full bg-[#C19A5B] text-white font-heading font-semibold text-xl flex items-center justify-center shadow-xl border-4 border-[#262628] scale-110">
                    03
                  </div>
                </div>
                <div className="md:col-span-5 pl-0 md:pl-8 space-y-2">
                  <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-white">
                    Refine
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                    Through iterative reviews and collaborative feedback
                    sessions, we fine-tune every element until the design
                    perfectly captures your aesthetic.
                  </p>
                </div>
              </div>

              {/* STEP 04 */}
              <div className="relative grid grid-cols-1 md:grid-cols-12 items-center gap-8">
                <div className="md:col-span-5 text-left md:text-right pr-0 md:pr-8 space-y-2 order-2 md:order-1">
                  <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-white">
                    Execute
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                    We manage the entire implementation process, coordinating
                    with artisans, contractors, and suppliers to deliver a
                    flawless final result.
                  </p>
                </div>
                <div className="md:col-span-2 flex justify-center z-20 order-1 md:order-2">
                  <div className="w-16 h-16 rounded-full bg-[#C19A5B] text-white font-heading font-semibold text-xl flex items-center justify-center shadow-xl border-4 border-[#262628] scale-110">
                    04
                  </div>
                </div>
                <div className="hidden md:block md:col-span-5 order-3" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. RECENT WORK PORTFOLIO SECTION */}
      {/* ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <span className="text-xs font-bold text-[#C19A5B] uppercase tracking-widest bg-[#FFF0DC] px-3.5 py-1.5 rounded-full border border-[#C19A5B]/20">
                Contractor Portfolio
              </span>
              <h2 className="font-heading text-3xl sm:text-5xl font-semibold text-[#111111] mt-3">
                Recent Work & Executed Projects
              </h2>
            </div>
            <button
              onClick={() => handleLinkClick("/projects")}
              className="btn-outline-gold px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold flex items-center space-x-2"
            >
              <span>View All Portfolio Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {PROJECTS_DATA.length === 0 ? (
            <div className="p-12 text-center bg-gray-50 rounded-3xl border border-gray-200 space-y-3">
              <Search className="w-8 h-8 text-[#C19A5B] mx-auto" />
              <h4 className="font-heading text-xl font-semibold text-[#111111]">
                No Executed Projects Found
              </h4>
              <p className="text-xs sm:text-sm text-gray-500">
                Please select another category filter to explore our completed
                site portfolio.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {PROJECTS_DATA.map((proj) => (
                <div
                  key={proj.id}
                  onClick={() => handleLinkClick("/projects")}
                  className="relative h-80 rounded-2xl overflow-hidden border border-gray-200 shadow-md group cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl bg-gray-100"
                >
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  <span className="absolute top-3 left-3 bg-[#262628] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md z-10">
                    {proj.category}
                  </span>

                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 z-10 transition-opacity duration-300 group-hover:opacity-0">
                    <h3 className="font-heading font-semibold text-base text-white truncate">
                      {proj.title}
                    </h3>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/95 via-[#111111]/85 to-[#111111]/30 opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 flex flex-col justify-end text-white z-20 space-y-2">
                    <span className="text-[10px] font-bold text-[#C19A5B] uppercase tracking-wider">
                      Karachi Project
                    </span>

                    <h3 className="font-heading font-semibold text-lg text-white leading-tight">
                      {proj.title}
                    </h3>

                    <p className="text-xs text-[#C19A5B] font-semibold flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{proj.location}</span>
                    </p>

                    <p className="text-[11px] text-gray-300 line-clamp-2 leading-relaxed font-normal">
                      {proj.scope}
                    </p>

                    <div className="pt-2">
                      <button className="btn-gold w-full py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center space-x-1.5 shadow-md">
                        <span>View Project Details</span>
                        <ChevronRight className="w-3.5 h-3.5 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* VERIFIED REVIEWS CAROUSEL */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10">
          <div>
            <span className="text-xs font-bold text-[#C19A5B] uppercase tracking-widest bg-[#FFF0DC] px-3.5 py-1.5 rounded-full border border-[#C19A5B]/20">
              Verified Client Reviews
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-semibold text-[#111111] mt-3">
              Trusted by Homeowners & Architects
            </h2>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={prevReview}
              className="p-3 rounded-full bg-white border border-gray-300 text-[#111111] hover:bg-[#C19A5B] hover:text-white transition-all shadow-sm"
              aria-label="Previous Review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextReview}
              className="p-3 rounded-full bg-white border border-gray-300 text-[#111111] hover:bg-[#C19A5B] hover:text-white transition-all shadow-sm"
              aria-label="Next Review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="bg-[#262628] text-white p-8 sm:p-12 rounded-3xl border border-[#C19A5B]/30 shadow-2xl space-y-6 relative">
          <div className="flex items-center justify-between">
            <div className="flex text-[#C19A5B] space-x-1">
              {[...Array(ENHANCED_REVIEWS[currentReviewIndex].rating)].map(
                (_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ),
              )}
            </div>
            <span className="text-xs text-gray-300 font-semibold bg-white/10 px-3 py-1 rounded-full border border-white/10">
              {ENHANCED_REVIEWS[currentReviewIndex].date}
            </span>
          </div>

          <p className="text-base sm:text-xl text-gray-100 italic leading-relaxed font-normal">
            "{ENHANCED_REVIEWS[currentReviewIndex].quote}"
          </p>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-6 border-t border-gray-700 gap-4">
            <div>
              <h4 className="font-sans-heading text-lg font-bold text-white flex items-center gap-2">
                <span>{ENHANCED_REVIEWS[currentReviewIndex].name}</span>
                <span className="text-[10px] bg-[#4285F4]/20 text-[#4285F4] px-2 py-0.5 rounded-full border border-[#4285F4]/40 font-semibold inline-flex items-center gap-1">
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  Google Verified
                </span>
              </h4>
              <p className="text-xs sm:text-sm text-[#C19A5B] font-medium">
                {ENHANCED_REVIEWS[currentReviewIndex].role} • Google Maps Review
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-400">Review {currentReviewIndex + 1} of {ENHANCED_REVIEWS.length}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. CONTACT SECTION */}
      {/* ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-[#C19A5B] uppercase tracking-widest bg-[#FFF0DC] px-3.5 py-1.5 rounded-full border border-[#C19A5B]/20">
              Get in Touch
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-semibold text-[#111111] mt-3">
              Contact Us & Book Site Survey
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Reach out to our senior contracting team for site measurements,
              sample books, or custom site estimates.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Showroom Info Box */}
            <div className="lg:col-span-5 bg-[#262628] text-white p-8 rounded-3xl border border-[#C19A5B]/30 space-y-6 shadow-xl">
              <h3 className="font-sans-heading font-extrabold text-2xl text-white">
                Karachi Main Showroom & Office
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#C19A5B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-bold">
                      Address:
                    </strong>
                    <span className="text-gray-300">
                      Shop No 132, Shamim Sky Tower, Federal B Area Block 9
                      Yaseenabad, Karachi, Pakistan.
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#C19A5B] shrink-0" />
                  <div>
                    <strong className="text-white block font-bold">
                      Call / WhatsApp:
                    </strong>
                    <a
                      href="tel:03102321899"
                      className="text-[#C19A5B] hover:underline font-bold text-sm sm:text-base"
                    >
                      0310 2321899
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#C19A5B] shrink-0" />
                  <div>
                    <strong className="text-white block font-bold">
                      Email:
                    </strong>
                    <a
                      href="mailto:interiordesignstudiopk@gmail.com"
                      className="text-gray-300 hover:text-[#C19A5B]"
                    >
                      interiordesignstudiopk@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-[#C19A5B] shrink-0" />
                  <div>
                    <strong className="text-white block font-bold">
                      Office Hours:
                    </strong>
                    <span className="text-gray-300">
                      Monday - Saturday: 11:00 AM - 9:00 PM
                    </span>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/923102321899?text=Hi%20Interior%20Design%20Studio!%20I%20want%20to%20inquire%20about%20site%20fitting."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] text-white font-bold py-4 rounded-xl text-xs sm:text-sm flex items-center justify-center space-x-2 shadow-lg hover:brightness-105 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Start Direct WhatsApp Chat</span>
              </a>
            </div>

            {/* Quick Contact Form */}
            <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-6">
              <h3 className="font-sans-heading font-extrabold text-2xl text-[#111111]">
                Send Quick Inquiry Message
              </h3>

              {contactSubmitted ? (
                <div className="p-8 text-center space-y-3 bg-[#FFF0DC] rounded-2xl border border-[#C19A5B]/30">
                  <CheckCircle className="w-12 h-12 text-[#C19A5B] mx-auto" />
                  <h4 className="font-sans-heading text-lg font-bold text-[#111111]">
                    Inquiry Sent Successfully!
                  </h4>
                  <p className="text-xs text-gray-700">
                    Thank you! Our senior contractor will call you back within 1
                    hour.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#111111] mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Full Name"
                        className="w-full bg-gray-50 border border-gray-300 focus:border-[#C19A5B] focus:bg-white rounded-xl p-3 text-xs text-gray-900 outline-none font-semibold"
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
                        className="w-full bg-gray-50 border border-gray-300 focus:border-[#C19A5B] focus:bg-white rounded-xl p-3 text-xs text-gray-900 outline-none font-semibold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#111111] mb-1">
                        City *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your city or area"
                        className="w-full bg-gray-50 border border-gray-300 focus:border-[#C19A5B] focus:bg-white rounded-xl p-3 text-xs text-gray-900 outline-none font-semibold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#111111] mb-1">
                        Solution Category *
                      </label>
                      <select className="w-full bg-gray-50 border border-gray-300 focus:border-[#C19A5B] focus:bg-white rounded-xl p-3 text-xs text-gray-900 outline-none cursor-pointer font-semibold">
                        <option>Flooring (SPC, Vinyl, Hardwood)</option>
                        <option>
                          Window Blinds (Roller, Zebra, Motorized)
                        </option>
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
                      Message / Requirements
                    </label>
                    <textarea
                      rows="3"
                      placeholder="Enter your project details or service requirements"
                      className="w-full bg-gray-50 border border-gray-300 focus:border-[#C19A5B] focus:bg-white rounded-xl p-3 text-xs text-gray-900 outline-none resize-none font-normal"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-gold py-3.5 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 shadow-md"
                  >
                    <Send className="w-4 h-4 text-white" />
                    <span>Send Message to Team</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
