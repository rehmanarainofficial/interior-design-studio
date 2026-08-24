import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Check, ShieldCheck, Sparkles, Phone, ArrowLeft, ChevronRight, 
  HelpCircle, Info, Award, Layers, Home, Building2, Wrench, MessageCircle, MapPin
} from 'lucide-react';
import { SOLUTIONS_DATA, PROJECTS_DATA } from '../data/productsData';
import SEO from '../components/SEO';

// Dynamic image fallback generator based on slug keywords (Deterministic)
function getFallbackSolution(slug) {
  const s = (slug || '').toLowerCase();
  
  if (s.includes('wallpaper') || s.includes('canvas')) {
    return {
      title: '3D Embossed Textured Wallpaper & Canvas Mural Fitting',
      categoryName: 'Wall Covering',
      subtitle: 'Seamless High-End Wallpaper Hanging for Bedrooms & Lounges',
      description: 'Imported heavy-duty 3D textured wallpapers hung by expert master paper-hangers. Special non-stain paste application ensures zero peeling and invisible seams.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
      gallery: [
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800'
      ],
      targetSpaces: ['Master Bedrooms', 'Drawing Room Features', 'Hotel Rooms']
    };
  }

  if (s.includes('blind') || s.includes('curtain')) {
    return {
      title: 'Motorized Window Blinds & Luxury Curtains Installation',
      categoryName: 'Window Blinds',
      subtitle: 'Custom Window Shades & Cassette Mounting Execution',
      description: 'Precision window measurement, headrail mounting, and motor automation for Roller blackout, Zebra dual-shade, Venetian, and drapery curtains.',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=1200',
      gallery: [
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800'
      ],
      targetSpaces: ['Master Bedrooms', 'Living Room Windows', 'Corporate Offices']
    };
  }

  if (s.includes('carpet')) {
    return {
      title: 'Commercial Acoustic Carpet Tile Fitting',
      categoryName: 'Flooring',
      subtitle: 'Modular Heavy-Duty Carpet Squares for Offices & Banks',
      description: 'High sound-dampening commercial carpet tile installation for corporate offices, call centers, and banks with minimum business interruption.',
      image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=1200',
      gallery: [
        'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=800'
      ],
      targetSpaces: ['Corporate Office Floors', 'Call Centers', 'Banks']
    };
  }

  if (s.includes('gym') || s.includes('rubber') || s.includes('epdm')) {
    return {
      title: 'Gym Shock-Absorbing Rubber Tile Fitting',
      categoryName: 'Flooring',
      subtitle: 'Heavy Weight Drop Protection for Commercial Fitness Arenas',
      description: 'High-density 10mm to 25mm vulcanized rubber tile installation for free weight areas, crossfit boxes, and personal training studios.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200',
      gallery: [
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800'
      ],
      targetSpaces: ['Commercial Gyms', 'Crossfit Studios', 'Home Fitness Arenas']
    };
  }

  if (s.includes('fluted') || s.includes('slat') || s.includes('panel') || s.includes('moulding') || s.includes('texture')) {
    return {
      title: 'WPC Fluted Slat Wall Panel & Moulding Fitting',
      categoryName: 'Wall Covering',
      subtitle: '3D Vertical Wood Slat TV Media Wall Execution',
      description: 'Modern architectural WPC fluted slat wall cladding with integrated warm LED strip channels and hidden wiring.',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200',
      gallery: [
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800'
      ],
      targetSpaces: ['TV Media Walls', 'Bed Headboard Accent Walls', 'Office Reception Backdrops']
    };
  }

  if (s.includes('grass') || s.includes('turf')) {
    return {
      title: 'Artificial Synthetic Lawn & Terrace Turf Fitting',
      categoryName: 'Flooring',
      subtitle: 'All-Season Green Synthetic Grass Laying',
      description: 'Permanently green UV-stabilized synthetic turf laying for residential lawns, balconies, and rooftop terraces.',
      image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80&w=1200',
      gallery: [
        'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80&w=800'
      ],
      targetSpaces: ['Villa Lawns', 'Roof Patios & Balconies']
    };
  }

  if (s.includes('hospital') || s.includes('vinyl') || s.includes('esd') || s.includes('eva')) {
    return {
      title: 'Seamless Antibacterial Vinyl Sheet Fitting',
      categoryName: 'Flooring',
      subtitle: 'Hot-Rod Thermal Seam Welding for OT Rooms & ICUs',
      description: 'Sterile homogeneous vinyl sheet laying with hot-wire thermal seam welding and wall coved skirting integration.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200',
      gallery: [
        'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800'
      ],
      targetSpaces: ['Operating Theaters (OT)', 'ICU & Recovery Rooms', 'Clinics']
    };
  }

  if (s.includes('ceiling')) {
    return {
      title: 'Concealed LED Gypsum False Ceiling Execution',
      categoryName: 'False Ceiling',
      subtitle: 'Designer Gypsum Ceiling Framing with Warm Cove Lighting',
      description: 'Complete ceiling renovation using moisture-resistant Elephant Gypsum boards, metal studs, and LED cove lighting profiles.',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200',
      gallery: [
        'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800'
      ],
      targetSpaces: ['Living Rooms', 'Executive Offices', 'Bedrooms']
    };
  }

  if (s.includes('shades') || s.includes('fiber')) {
    return {
      title: 'Tensile Fiber Glass & Polycarbonate Car Canopy Fitting',
      categoryName: 'Fiber Shades',
      subtitle: 'Heavy-Duty Weatherproof Car Parking & Patio Canopies',
      description: 'Fabrication and installation of UV-resistant fiber glass car parking canopies and tensile fabric patio shades.',
      image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=1200',
      gallery: [
        'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=800'
      ],
      targetSpaces: ['Car Parking Porches', 'Outdoor Balconies', 'Plazas']
    };
  }

  // Default fallback for SPC flooring
  return {
    title: (slug || 'SPC FLOORING').replace(/-/g, ' ').toUpperCase() + ' SUPPLY & FITTING',
    categoryName: 'Flooring',
    subtitle: '100% Water & Termite Proof Supply + Turnkey Installation Service',
    description: 'We supply materials and execute complete on-site fitting for residential homes, corporate offices, commercial shops, gyms, and medical centers across Pakistan.',
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800'
    ],
    targetSpaces: ['Houses & Villas', 'Corporate Offices', 'Shops & Showrooms']
  };
}

export default function ProductDetail({ onOpenQuote }) {
  const { productId } = useParams();
  const navigate = useNavigate();

  const solutionData = SOLUTIONS_DATA[productId];
  const fallback = getFallbackSolution(productId);

  const solution = {
    id: productId,
    title: solutionData?.title || fallback.title,
    categoryName: solutionData?.categoryName || fallback.categoryName,
    subtitle: solutionData?.subtitle || fallback.subtitle,
    description: solutionData?.description || fallback.description,
    image: solutionData?.image || fallback.image,
    gallery: solutionData?.gallery || fallback.gallery,
    targetSpaces: solutionData?.targetSpaces || fallback.targetSpaces,
    features: solutionData?.features || [
      'Material Supply + Professional Site Fitting Included',
      '100% Water & Termite Protection Guarantee',
      'Laser Measured Area Estimation',
      '20-Year Workmanship & Material Warranty'
    ],
    specifications: solutionData?.specifications || {
      'Service Model': 'Turnkey Supply & On-Site Installation',
      'Suitable Property': 'Houses, Apartments, Offices & Commercial Spaces',
      'Material Grade': 'Rigid Core Heavy-Duty Commercial Specification',
      'Execution Speed': 'Approx 500 - 800 sq ft fitted per day'
    }
  };

  const [selectedImage, setSelectedImage] = useState(solution.image);

  // Synchronize state on page refresh or route param change
  useEffect(() => {
    setSelectedImage(solution.image);
  }, [productId, solution.image]);

  const handleNavClick = (path) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(path);
  };

  return (
    <div className="font-sans text-[#111111] bg-[#FAFAFA] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <SEO 
        title={`${solution.title}`}
        description={`${solution.subtitle || solution.description}`}
        keywords={`${solution.title} karachi, ${solution.categoryName} fitting near me, turnkey ${solution.title}`}
        ogImage={selectedImage || solution.image}
      />
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center space-x-2 text-xs text-gray-500 font-medium">
          <button onClick={() => handleNavClick('/')} className="hover:text-[#C19A5B]">Home</button>
          <ChevronRight className="w-3.5 h-3.5 text-[#C19A5B]" />
          <span className="text-gray-600 font-semibold">{solution.categoryName}</span>
          <ChevronRight className="w-3.5 h-3.5 text-[#C19A5B]" />
          <span className="text-[#C19A5B] font-bold">{solution.title}</span>
        </div>

        {/* Main Outclass Solution Viewport & Contractor Booking Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: High-Res Outclass Viewport */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative rounded-3xl overflow-hidden bg-gray-100 border border-gray-200 h-[400px] sm:h-[500px] shadow-lg">
              <img 
                src={selectedImage || solution.image} 
                alt={solution.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-all duration-700"
              />
            </div>

            {/* Gallery Thumbnails */}
            {solution.gallery && solution.gallery.length > 1 && (
              <div className="flex space-x-3 overflow-x-auto pb-2">
                {solution.gallery.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(imgUrl)}
                    className={`w-24 h-20 rounded-2xl overflow-hidden border-2 transition-all shrink-0 ${
                      selectedImage === imgUrl ? 'border-[#C19A5B] scale-105 shadow-md' : 'border-gray-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={imgUrl} alt={`Gallery ${idx}`} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Outclass Showcase Information & CTAs (No Order/Swatches) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-[#FFF0DC] px-3.5 py-1.5 rounded-full border border-[#C19A5B]/20">
                <Wrench className="w-4 h-4 text-[#C19A5B]" />
                <span className="text-xs text-[#C19A5B] font-bold uppercase tracking-wider">
                  Turnkey Supply & Site Installation Service
                </span>
              </div>

              <h1 className="font-heading font-semibold text-3xl sm:text-4xl text-[#111111] leading-tight">
                {solution.title}
              </h1>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                {solution.subtitle || solution.description}
              </p>

              {/* Ideal Property Executions */}
              {solution.targetSpaces && (
                <div className="space-y-2.5 pt-2">
                  <span className="text-xs font-bold text-[#C19A5B] uppercase tracking-wider block">
                    Ideal Property Executions:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {solution.targetSpaces.map((space, i) => (
                      <span key={i} className="text-xs bg-white text-gray-800 font-semibold px-3 py-1.5 rounded-xl border border-gray-200 shadow-sm inline-flex items-center space-x-1.5">
                        <Check className="w-3.5 h-3.5 text-[#C19A5B]" />
                        <span>{space}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Direct Contractor Action Buttons (No E-Commerce Order Buttons!) */}
            <div className="space-y-3 pt-6 border-t border-gray-200">
              <button
                onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); onOpenQuote(); }}
                className="w-full btn-gold py-4 rounded-xl text-sm font-semibold flex items-center justify-center space-x-2 shadow-md"
              >
                <Sparkles className="w-4 h-4 text-white" />
                <span>Book Free Site Measurement & Sample Visit</span>
              </button>

              <a
                href={`https://wa.me/923102321899?text=${encodeURIComponent(`Hi Interior Design Studio! I need site installation for ${solution.title}. Please share details.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] text-white font-semibold py-3.5 rounded-xl text-xs sm:text-sm flex items-center justify-center space-x-2 shadow-sm hover:brightness-105"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Direct with Senior Contractor (0310 2321899)</span>
              </a>
            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* EXACTLY 2 MAIN OUTCLASS SECTIONS */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
          
          {/* SECTION 1: WORKMANSHIP & ON-SITE FITTING SCOPE */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm space-y-5">
            <div className="flex items-center space-x-3 border-b border-gray-100 pb-4">
              <div className="w-10 h-10 rounded-2xl bg-[#FFF0DC] flex items-center justify-center text-[#C19A5B] font-bold text-sm">
                01
              </div>
              <div>
                <h3 className="font-heading font-semibold text-xl text-[#111111]">
                  Workmanship & On-Site Fitting Scope
                </h3>
                <span className="text-xs text-gray-500 font-medium">Professional Turnkey Site Installation Protocol</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
              {solution.description}
            </p>

            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold text-[#C19A5B] uppercase tracking-wider block">
                Execution Guarantee & Protocol:
              </span>
              <ul className="space-y-2.5 text-xs text-gray-700 font-medium">
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#C19A5B] shrink-0" />
                  <span>On-site laser area survey to prevent material shortfall or excess.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#C19A5B] shrink-0" />
                  <span>Subfloor inspection, levelling compound application, and underlayment laying.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#C19A5B] shrink-0" />
                  <span>Clean, dust-free installation with noise mitigation and zero site disruption.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#C19A5B] shrink-0" />
                  <span>Final perimeter wall skirting mounting, joint sealing, and clean site handover.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* SECTION 2: MATERIAL SPECIFICATIONS & TECHNICAL FEATURES */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm space-y-5">
            <div className="flex items-center space-x-3 border-b border-gray-100 pb-4">
              <div className="w-10 h-10 rounded-2xl bg-[#FFF0DC] flex items-center justify-center text-[#C19A5B] font-bold text-sm">
                02
              </div>
              <div>
                <h3 className="font-heading font-semibold text-xl text-[#111111]">
                  Material Specifications & Technical Features
                </h3>
                <span className="text-xs text-gray-500 font-medium">Tested Grade Standards & Warranty Data</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {solution.specifications && Object.entries(solution.specifications).map(([key, val]) => (
                <div key={key} className="p-4 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col justify-center">
                  <span className="text-gray-500 font-medium">{key}:</span>
                  <span className="text-[#C19A5B] font-bold text-sm mt-0.5">{val}</span>
                </div>
              ))}
            </div>

            <div className="space-y-2.5 pt-2 border-t border-gray-100">
              <span className="text-xs font-bold text-[#C19A5B] uppercase tracking-wider block">
                Technical Highlights:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700 font-medium">
                {solution.features && solution.features.map((feat, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-[#C19A5B] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* RELATED COMPLEMENTARY EXECUTED PROJECTS */}
        <div className="pt-8 space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 border-b border-gray-200 pb-4">
            <div>
              <span className="text-xs font-bold text-[#C19A5B] uppercase tracking-widest">
                Related Work
              </span>
              <h3 className="font-heading font-semibold text-2xl text-[#111111] mt-1">
                Executed Projects in Karachi
              </h3>
            </div>
            <button
              onClick={() => handleNavClick('/projects')}
              className="text-xs font-semibold text-[#C19A5B] hover:underline"
            >
              View All Projects →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECTS_DATA.slice(0, 3).map((proj) => (
              <div
                key={proj.id}
                onClick={() => handleNavClick('/projects')}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img src={proj.image} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4 space-y-1">
                  <h4 className="font-heading font-semibold text-sm text-[#111111] line-clamp-1">{proj.title}</h4>
                  <p className="text-xs text-[#C19A5B] font-semibold">{proj.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
