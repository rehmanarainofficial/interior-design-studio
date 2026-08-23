import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, ArrowLeft, Sparkles, Phone } from 'lucide-react';
import { FITTING_CATEGORIES, SOLUTIONS_DATA } from '../data/productsData';

export default function CategoryPage({ onOpenQuote }) {
  const { categoryId } = useParams();

  const category = FITTING_CATEGORIES.find(c => c.id === categoryId) || FITTING_CATEGORIES[0];

  return (
    <div className="font-sans text-gray-900 bg-[#FAFAFA] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-xs text-gray-500 font-medium">
          <Link to="/" className="hover:text-[#543A14]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#543A14]" />
          <span className="text-[#543A14] font-bold">{category.name}</span>
        </div>

        {/* Category Header */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-200 shadow-sm space-y-4">
          <span className="text-xs font-bold text-[#543A14] uppercase tracking-widest bg-[#FFF0DC] px-3.5 py-1.5 rounded-full border border-[#543A14]/15">
            Turnkey Installation Category
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#131010]">
            {category.name}
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-3xl leading-relaxed">
            {category.description}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.items.map((item) => {
            const detail = SOLUTIONS_DATA[item.id] || {};
            return (
              <div 
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-60 overflow-hidden bg-gray-100">
                    <img 
                      src={detail.image || 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800'}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {item.badge && (
                      <span className="absolute top-4 right-4 text-[10px] font-extrabold bg-[#F0BB78] text-[#131010] px-3 py-1 rounded-full shadow-sm">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="font-heading font-extrabold text-xl text-[#131010] group-hover:text-[#543A14] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                      {detail.subtitle || detail.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link 
                    to={`/products/${item.id}`}
                    className="w-full btn-gold py-3 rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5"
                  >
                    <span>View Execution Details</span>
                    <ChevronRight className="w-4 h-4 text-[#F0BB78]" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
