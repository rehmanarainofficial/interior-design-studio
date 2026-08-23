import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Check, ShieldCheck, Sparkles, Phone, ArrowLeft, ChevronRight, 
  HelpCircle, Info, Award, Layers, Home, Building2, Wrench, MessageCircle
} from 'lucide-react';
import { SOLUTIONS_DATA } from '../data/productsData';

// Dynamic image fallback generator based on slug keywords (Deterministic)
function getFallbackSolution(slug) {
  const s = (slug || '').toLowerCase();
  
  if (s.includes('wallpaper')) {
    return {
      title: '3D Embossed Textured Wallpaper Supply & Fitting',
      categoryName: 'Residential Wall Solution',
      subtitle: 'Seamless High-End Wallpaper Hanging for Bedrooms & Lounges',
      description: 'Imported heavy-duty 3D textured wallpapers hung by expert master paper-hangers. Special non-stain paste application ensures zero peeling and invisible seams.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
      gallery: ['https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800'],
      targetSpaces: ['Master Bedrooms', 'Drawing Room Features', 'Hotel Rooms']
    };
  }

  if (s.includes('blind')) {
    return {
      title: 'Motorized Roller & Zebra Window Blinds Installation',
      categoryName: 'Window Treatment',
      subtitle: 'Custom Window Shades & Cassette Mounting Execution',
      description: 'Precision window measurement, headrail mounting, and motor automation for Roller blackout, Zebra dual-shade, and Wood Venetian blinds.',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=1200',
      gallery: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800'],
      targetSpaces: ['Master Bedrooms', 'Living Room Windows', 'Corporate Offices']
    };
  }

  if (s.includes('carpet')) {
    return {
      title: 'Commercial Acoustic Carpet Tile Fitting',
      categoryName: 'Commercial Execution',
      subtitle: 'Modular Heavy-Duty Carpet Squares for Offices & Banks',
      description: 'High sound-dampening commercial carpet tile installation for corporate offices, call centers, and banks with minimum business interruption.',
      image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=1200',
      gallery: ['https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=800'],
      targetSpaces: ['Corporate Office Floors', 'Call Centers', 'Banks']
    };
  }

  if (s.includes('gym') || s.includes('rubber')) {
    return {
      title: 'Gym Shock-Absorbing Rubber Tile Fitting',
      categoryName: 'Gym & Sports Execution',
      subtitle: 'Heavy Weight Drop Protection for Commercial Fitness Arenas',
      description: 'High-density 10mm to 25mm vulcanized rubber tile installation for free weight areas, crossfit boxes, and personal training studios.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200',
      gallery: ['https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800'],
      targetSpaces: ['Commercial Gyms', 'Crossfit Studios', 'Home Fitness Arenas']
    };
  }

  if (s.includes('fluted') || s.includes('slat') || s.includes('panel')) {
    return {
      title: 'WPC Fluted Slat Wall Panel Fitting',
      categoryName: 'Wall Architectural Fitting',
      subtitle: '3D Vertical Wood Slat TV Media Wall Execution',
      description: 'Modern architectural WPC fluted slat wall cladding with integrated warm LED strip channels and hidden wiring.',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200',
      gallery: ['https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800'],
      targetSpaces: ['TV Media Walls', 'Bed Headboard Accent Walls', 'Office Reception Backdrops']
    };
  }

  if (s.includes('grass') || s.includes('turf')) {
    return {
      title: 'Artificial Synthetic Lawn & Terrace Turf Fitting',
      categoryName: 'Outdoor & Lawn Execution',
      subtitle: 'All-Season Green Synthetic Grass Laying',
      description: 'Permanently green UV-stabilized synthetic turf laying for residential lawns, balconies, and rooftop terraces.',
      image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80&w=1200',
      gallery: ['https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80&w=800'],
      targetSpaces: ['Villa Lawns', 'Roof Patios & Balconies']
    };
  }

  if (s.includes('hospital') || s.includes('vinyl') || s.includes('esd')) {
    return {
      title: 'Seamless Antibacterial Vinyl Sheet Fitting',
      categoryName: 'Medical Execution',
      subtitle: 'Hot-Rod Thermal Seam Welding for OT Rooms & ICUs',
      description: 'Sterile homogeneous vinyl sheet laying with hot-wire thermal seam welding and wall coved skirting integration.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200',
      gallery: ['https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800'],
      targetSpaces: ['Operating Theaters (OT)', 'ICU & Recovery Rooms', 'Clinics']
    };
  }

  // Default fallback for SPC flooring
  return {
    title: (slug || 'SPC FLOORING').replace(/-/g, ' ').toUpperCase() + ' SUPPLY & FITTING',
    categoryName: 'Flooring Execution',
    subtitle: '100% Water & Termite Proof Supply + Turnkey Installation Service',
    description: 'We supply materials and execute complete on-site fitting for residential homes, corporate offices, commercial shops, gyms, and medical centers across Pakistan.',
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=1200',
    gallery: ['https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800'],
    targetSpaces: ['Houses & Villas', 'Corporate Offices', 'Shops & Showrooms']
  };
}

export default function ProductDetail({ onOpenQuote }) {
  const { productId } = useParams();
  
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
      'Service Model': 'Turnkey Supply & Installation',
      'Suitable Property': 'Houses, Offices, Shops, Gyms & Hospitals',
      'Execution Speed': 'Approx 500 - 800 sq ft fitted per day'
    },
    swatches: solutionData?.swatches || [
      { name: 'Royal Golden Oak', hex: '#B8860B' },
      { name: 'Walnut Espresso', hex: '#3E2723' },
      { name: 'Scandinavian Grey', hex: '#78909C' }
    ]
  };

  const [selectedImage, setSelectedImage] = useState(solution.image);
  const [selectedSwatch, setSelectedSwatch] = useState(solution.swatches?.[0]);
  const [activeTab, setActiveTab] = useState('overview');

  // Synchronize state on page refresh or route param change
  useEffect(() => {
    setSelectedImage(solution.image);
    setSelectedSwatch(solution.swatches?.[0]);
  }, [productId, solution.image]);

  return (
    <div className="font-sans text-gray-900 bg-[#FAFAFA] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center space-x-2 text-xs text-gray-500 font-medium">
          <Link to="/" className="hover:text-[#543A14]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#543A14]" />
          <span className="text-gray-600 font-semibold">{solution.categoryName}</span>
          <ChevronRight className="w-3.5 h-3.5 text-[#543A14]" />
          <span className="text-[#543A14] font-bold">{solution.title}</span>
        </div>

        {/* Solution Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Image Viewport */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 h-[380px] sm:h-[480px] shadow-sm">
              <img 
                src={selectedImage || solution.image} 
                alt={solution.title}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>

            {/* Gallery Thumbnails */}
            {solution.gallery && solution.gallery.length > 1 && (
              <div className="flex space-x-3 overflow-x-auto pb-2">
                {solution.gallery.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(imgUrl)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                      selectedImage === imgUrl ? 'border-[#543A14] scale-105 shadow-md' : 'border-gray-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={imgUrl} alt={`Gallery ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Service Scope & Direct Lead Booking */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-[#FFF0DC] px-3.5 py-1.5 rounded-full border border-[#543A14]/15">
                <Wrench className="w-4 h-4 text-[#543A14]" />
                <span className="text-xs text-[#543A14] font-bold uppercase tracking-wider">
                  Turnkey Supply & Site Installation Service
                </span>
              </div>

              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#131010] leading-tight">
                {solution.title}
              </h1>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                {solution.subtitle || solution.description}
              </p>

              {/* Target Property Spaces */}
              {solution.targetSpaces && (
                <div className="space-y-2 pt-1">
                  <span className="text-xs font-bold text-[#543A14] uppercase tracking-wider block">
                    Ideal Property Executions:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {solution.targetSpaces.map((space, i) => (
                      <span key={i} className="text-xs bg-white text-gray-800 font-bold px-3 py-1 rounded-lg border border-gray-200 shadow-sm">
                        ✓ {space}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Color Swatch Selection */}
              {solution.swatches && solution.swatches.length > 0 && (
                <div className="space-y-3 pt-2">
                  <label className="block text-xs font-bold text-[#543A14] uppercase tracking-wider">
                    Select Material Finish:
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {solution.swatches.map((swatch, idx) => {
                      const isSelected = selectedSwatch?.name === swatch.name;
                      return (
                        <button
                          key={idx}
                          onClick={() => setSelectedSwatch(swatch)}
                          className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
                            isSelected 
                              ? 'bg-[#543A14] text-[#FFF0DC] border-[#543A14] shadow-md' 
                              : 'bg-white text-gray-800 border-gray-200 hover:border-[#543A14]/40'
                          }`}
                        >
                          <span 
                            className="w-4 h-4 rounded-full border border-black/10 shrink-0" 
                            style={{ backgroundColor: swatch.hex }}
                          />
                          <span>{swatch.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Features List */}
              {solution.features && (
                <div className="space-y-2.5 pt-4 border-t border-gray-200">
                  <span className="text-xs font-bold text-[#543A14] uppercase tracking-wider block">
                    Service Highlights:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700 font-semibold">
                    {solution.features.map((feat, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-[#543A14] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Direct Lead Action Buttons */}
            <div className="space-y-3 pt-6 border-t border-gray-200">
              <button
                onClick={onOpenQuote}
                className="w-full btn-gold py-4 rounded-xl text-sm font-bold flex items-center justify-center space-x-2 shadow-md"
              >
                <Sparkles className="w-4 h-4 text-[#131010]" />
                <span>Book Free Site Measurement & Sample Visit</span>
              </button>

              <a
                href={`https://wa.me/923120129016?text=${encodeURIComponent(`Hi Interior Design Studio! I need site installation for ${solution.title}. Please share details.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] text-white font-bold py-3.5 rounded-xl text-xs flex items-center justify-center space-x-2 shadow-sm hover:brightness-105"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Direct with Senior Contractor (+92 312 0129016)</span>
              </a>
            </div>

          </div>

        </div>

        {/* Detailed Tabs */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm space-y-6">
          <div className="flex border-b border-gray-200 space-x-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-4 text-sm font-heading font-bold transition-all border-b-2 ${
                activeTab === 'overview'
                  ? 'border-[#543A14] text-[#543A14]'
                  : 'border-transparent text-gray-500 hover:text-gray-900'
              }`}
            >
              Workmanship & Fitting Scope
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`pb-4 text-sm font-heading font-bold transition-all border-b-2 ${
                activeTab === 'specs'
                  ? 'border-[#543A14] text-[#543A14]'
                  : 'border-transparent text-gray-500 hover:text-gray-900'
              }`}
            >
              Material & Service Specs
            </button>
          </div>

          {activeTab === 'overview' && (
            <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
              <p>{solution.description}</p>
              <p>
                Our installation team brings full laser measurement equipment, underlayment materials, surface levelling compounds, and precision cutting tools directly to your site in Karachi, Lahore, or Islamabad. We ensure quick, dust-free installation with minimal disruption to your daily routine.
              </p>
            </div>
          )}

          {activeTab === 'specs' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {solution.specifications && Object.entries(solution.specifications).map(([key, val]) => (
                <div key={key} className="flex justify-between p-3.5 rounded-xl bg-gray-50 border border-gray-200">
                  <span className="text-gray-600 font-medium">{key}:</span>
                  <span className="text-[#543A14] font-extrabold">{val}</span>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
