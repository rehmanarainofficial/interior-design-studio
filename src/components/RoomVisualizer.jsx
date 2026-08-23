import React, { useState } from 'react';
import { 
  Eye, Check, Sparkles, RefreshCw, ShoppingBag, Info, ShieldCheck, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ROOM_TYPES = [
  {
    id: 'living-room',
    name: 'Luxury Living Room',
    baseImg: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    description: 'Modern residential lounge with plush sofa seating and warm mood lighting.'
  },
  {
    id: 'master-bedroom',
    name: 'Executive Master Bedroom',
    baseImg: 'https://images.unsplash.com/photo-1540518614846-7ede433c517a?auto=format&fit=crop&q=80&w=1200',
    description: 'Serene retreat room with upholstered headboard and ambient window lighting.'
  },
  {
    id: 'office-suite',
    name: 'Corporate Executive Suite',
    baseImg: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
    description: 'High-tech boardroom and executive workspace.'
  },
  {
    id: 'fitness-gym',
    name: 'Commercial Fitness Studio',
    baseImg: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200',
    description: 'Heavy weight training zone requiring shock absorbing flooring.'
  }
];

const FLOORING_OPTIONS = [
  {
    id: 'spc-oak',
    name: 'SPC Royal Golden Oak',
    productId: 'spc-flooring',
    category: 'SPC Flooring',
    hex: '#C5A059',
    price: 'PKR 320 / sq ft',
    waterproof: '100% Waterproof',
    img: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=1200',
    overlayClass: 'bg-[#C5A059]/25 mix-blend-color-burn'
  },
  {
    id: 'spc-walnut',
    name: 'SPC Smoked Espresso Walnut',
    productId: 'spc-flooring',
    category: 'SPC Flooring',
    hex: '#3E2723',
    price: 'PKR 350 / sq ft',
    waterproof: '100% Waterproof',
    img: 'https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&q=80&w=1200',
    overlayClass: 'bg-[#3E2723]/35 mix-blend-multiply'
  },
  {
    id: 'vinyl-marble',
    name: 'PVC Carrara White Marble',
    productId: 'pvc-vinyl-flooring',
    category: 'PVC Vinyl Tile',
    hex: '#E0E0E0',
    price: 'PKR 190 / sq ft',
    waterproof: 'Moisture Proof',
    img: 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=80&w=1200',
    overlayClass: 'bg-[#F5F5F5]/30 mix-blend-[#E0E0E0]'
  },
  {
    id: 'carpet-tile-charcoal',
    name: 'Executive Acoustic Carpet Tile',
    productId: 'carpet-tile',
    category: 'Carpet Tile',
    hex: '#37474F',
    price: 'PKR 280 / sq ft',
    waterproof: 'Stain Treated',
    img: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=1200',
    overlayClass: 'bg-[#263238]/40 mix-blend-darken'
  },
  {
    id: 'artificial-grass-lawn',
    name: 'Lush Green Synthetic Turf 35mm',
    productId: 'artificial-grass',
    category: 'Synthetic Turf',
    hex: '#2E7D32',
    price: 'PKR 180 / sq ft',
    waterproof: 'Drainage Backing',
    img: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80&w=1200',
    overlayClass: 'bg-[#2E7D32]/35 mix-blend-overlay'
  },
  {
    id: 'epoxy-gold-3d',
    name: 'High Gloss Metallic Gold Epoxy',
    productId: 'epoxy-flooring',
    category: 'Epoxy Coating',
    hex: '#D4AF37',
    price: 'PKR 380 / sq ft',
    waterproof: 'Seamless Waterproof',
    img: 'https://images.unsplash.com/photo-1565183997392-2f6f122e5912?auto=format&fit=crop&q=80&w=1200',
    overlayClass: 'bg-[#D4AF37]/30 mix-blend-hard-light'
  }
];

export default function RoomVisualizer({ onOpenQuote }) {
  const [selectedRoom, setSelectedRoom] = useState(ROOM_TYPES[0]);
  const [selectedFloor, setSelectedFloor] = useState(FLOORING_OPTIONS[0]);
  const [isChanging, setIsChanging] = useState(false);

  const handleSelectFloor = (option) => {
    setIsChanging(true);
    setSelectedFloor(option);
    setTimeout(() => setIsChanging(false), 300);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-md font-sans">
      
      {/* Visualizer Header */}
      <div className="bg-[#FFF0DC] p-6 border-b border-[#543A14]/20 flex flex-wrap justify-between items-center gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="p-2 rounded-xl bg-[#543A14] text-[#FFF0DC]">
              <Eye className="w-5 h-5" />
            </span>
            <h3 className="font-heading font-extrabold text-xl text-[#131010]">
              Interactive Room Visualizer Simulator
            </h3>
          </div>
          <p className="text-xs text-gray-700 mt-1 font-medium">
            Test different flooring finishes on live room settings in real-time.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <span className="text-xs font-bold text-[#543A14] bg-white px-3.5 py-1.5 rounded-full border border-[#543A14]/20 shadow-sm">
            ★ Live Color & Texture Overlay Engine
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        
        {/* Main Preview Viewport */}
        <div className="lg:col-span-8 relative bg-black min-h-[400px] lg:min-h-[500px] flex items-center justify-center overflow-hidden">
          
          <img 
            src={selectedFloor.img || selectedRoom.baseImg}
            alt={selectedRoom.name}
            className={`w-full h-full object-cover transition-all duration-700 ${
              isChanging ? 'opacity-40 scale-105' : 'opacity-100 scale-100'
            }`}
          />

          <div className={`absolute inset-0 pointer-events-none transition-all duration-500 ${selectedFloor.overlayClass}`} />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

          {/* Live Floating Info Badge */}
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-gray-200 shadow-xl text-gray-900 max-w-xs">
            <div className="flex items-center space-x-2">
              <div 
                className="w-4 h-4 rounded-full border border-black/20 shrink-0"
                style={{ backgroundColor: selectedFloor.hex }}
              />
              <span className="font-heading text-xs font-extrabold text-[#543A14]">
                {selectedFloor.name}
              </span>
            </div>
            <div className="text-[11px] text-gray-700 mt-1 flex justify-between gap-4 font-semibold">
              <span>Est. Cost: <strong className="text-[#131010]">{selectedFloor.price}</strong></span>
              <span className="text-[#543A14]">{selectedFloor.waterproof}</span>
            </div>
          </div>

          {/* Room Type Selector Overlay */}
          <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-gray-200 flex items-center justify-between overflow-x-auto gap-2 shadow-lg">
            <span className="text-xs font-bold text-[#543A14] shrink-0">Room Scene:</span>
            <div className="flex space-x-2 shrink-0">
              {ROOM_TYPES.map((room) => (
                <button
                  key={room.id}
                  onClick={() => setSelectedRoom(room)}
                  className={`text-xs px-3.5 py-1.5 rounded-lg font-bold transition-all ${
                    selectedRoom.id === room.id
                      ? 'bg-[#543A14] text-[#FFF0DC] shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-[#FFF0DC] hover:text-[#543A14]'
                  }`}
                >
                  {room.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar - Flooring Material Swatches */}
        <div className="lg:col-span-4 p-6 bg-gray-50 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gray-200">
          <div>
            <h4 className="font-heading text-xs font-bold text-[#543A14] uppercase tracking-wider mb-4">
              Select Flooring Finish:
            </h4>

            <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1">
              {FLOORING_OPTIONS.map((option) => {
                const isSelected = selectedFloor.id === option.id;
                return (
                  <button
                    key={option.id}
                    onClick={() => handleSelectFloor(option)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#FFF0DC] border-[#543A14] shadow-sm'
                        : 'bg-white border-gray-200 hover:border-[#543A14]/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-9 h-9 rounded-lg border border-black/10 shadow-inner flex items-center justify-center shrink-0"
                        style={{ backgroundColor: option.hex }}
                      >
                        {isSelected && <Check className="w-5 h-5 text-white drop-shadow-md" />}
                      </div>
                      <div>
                        <h5 className="font-heading text-xs font-extrabold text-gray-900 line-clamp-1">
                          {option.name}
                        </h5>
                        <p className="text-[11px] text-gray-600 font-medium">
                          {option.category} • <span className="text-[#543A14] font-bold">{option.price}</span>
                        </p>
                      </div>
                    </div>

                    <span className="text-[10px] bg-white text-[#543A14] font-bold px-2 py-1 rounded border border-[#543A14]/20 shrink-0">
                      Preview
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-gray-200 mt-4 space-y-2.5">
            <Link 
              to={`/products/${selectedFloor.productId}`}
              className="w-full btn-outline-gold py-2.5 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 bg-white"
            >
              <Info className="w-4 h-4 text-[#543A14]" />
              <span>View Specs for {selectedFloor.name}</span>
            </Link>

            <button
              onClick={onOpenQuote}
              className="w-full btn-gold py-3 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 shadow-md"
            >
              <Sparkles className="w-4 h-4 text-[#F0BB78]" />
              <span>Order Physical Sample & Free Quote</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
