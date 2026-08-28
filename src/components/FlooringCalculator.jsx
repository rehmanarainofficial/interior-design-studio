import React, { useState } from 'react';
import { Sparkles, CheckCircle2, MapPin, Send, MessageCircle } from 'lucide-react';

export default function FlooringCalculator({ onOpenQuote }) {
  const [length, setLength] = useState(15);
  const [width, setWidth] = useState(12);
  const [spaceType, setSpaceType] = useState('Bedrooms / Living Room');

  const areaSqFt = length * width;
  const wastageSqFt = Math.round(areaSqFt * 1.05); // 5% wastage allowance

  return (
    <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm font-sans space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-gray-100 pb-4">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#543A14] bg-[#FFF0DC] px-2.5 py-0.5 rounded">
            Site Survey Helper
          </span>
          <h3 className="font-heading font-extrabold text-xl text-[#131010] mt-1">
            Room Area & Material Quantity Estimator
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-xs font-bold text-[#543A14] mb-1.5">Space Type:</label>
          <select 
            value={spaceType}
            onChange={(e) => setSpaceType(e.target.value)}
            className="w-full bg-gray-50 border border-gray-300 rounded-xl p-3 text-xs text-gray-900 font-semibold outline-none"
          >
            <option>Bedrooms / Living Room</option>
            <option>Executive Office Floor</option>
            <option>Commercial Shop / Boutique</option>
            <option>Gym / Fitness Area</option>
            <option>Hospital OT / Cleanroom</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-[#543A14] mb-1.5">Room Length (Feet):</label>
          <input 
            type="number" 
            value={length}
            onChange={(e) => setLength(Math.max(1, Number(e.target.value)))}
            className="w-full bg-gray-50 border border-gray-300 rounded-xl p-3 text-xs text-gray-900 font-bold outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-[#543A14] mb-1.5">Room Width (Feet):</label>
          <input 
            type="number" 
            value={width}
            onChange={(e) => setWidth(Math.max(1, Number(e.target.value)))}
            className="w-full bg-gray-50 border border-gray-300 rounded-xl p-3 text-xs text-gray-900 font-bold outline-none"
          />
        </div>
      </div>

      {/* Summary Box (Zero Price Mentions) */}
      <div className="bg-[#FFF0DC]/60 p-6 rounded-2xl border border-[#543A14]/15 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <span className="text-xs text-gray-600 font-bold">Estimated Coverage Needed:</span>
          <div className="flex items-baseline space-x-3 justify-center sm:justify-start">
            <span className="font-heading text-3xl font-extrabold text-[#543A14]">{areaSqFt} Sq Ft</span>
            <span className="text-xs text-gray-500 font-medium">(Incl. 5% fitting wastage: {wastageSqFt} sq ft)</span>
          </div>
        </div>

        <button
          onClick={onOpenQuote}
          className="btn-gold px-6 py-3.5 rounded-xl text-xs font-bold flex items-center space-x-2 shadow-md shrink-0"
        >
          <Sparkles className="w-4 h-4 text-[#F0BB78]" />
          <span>Book Laser Site Measurement</span>
        </button>
      </div>
    </div>
  );
}
