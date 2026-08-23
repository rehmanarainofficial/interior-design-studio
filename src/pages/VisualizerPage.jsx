import React from 'react';
import RoomVisualizer from '../components/RoomVisualizer';

export default function VisualizerPage({ onOpenQuote }) {
  return (
    <div className="font-sans text-[#FFF0DC] bg-[#131010] min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-[#F0BB78] uppercase tracking-widest bg-[#543A14]/40 px-3.5 py-1 rounded-full border border-[#F0BB78]/20">
            Interactive Design Simulator
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#FFF0DC]">
            Live Room Visualizer Studio
          </h1>
          <p className="text-xs sm:text-sm text-gray-300">
            Test different flooring finishes, wood grains, and marble tiles on Pakistani room environments in real-time.
          </p>
        </div>

        <RoomVisualizer onOpenQuote={onOpenQuote} />
      </div>
    </div>
  );
}
