import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, ArrowLeft, Sparkles, Phone, HelpCircle, ChevronDown, CheckCircle2 } from 'lucide-react';
import { FITTING_CATEGORIES, SOLUTIONS_DATA } from '../data/productsData';
import SEO from '../components/SEO';

export default function CategoryPage({ onOpenQuote }) {
  const { categoryId } = useParams();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const category = FITTING_CATEGORIES.find(c => c.id === categoryId) || FITTING_CATEGORIES[0];

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: category.name, url: `/category/${category.id}` }
  ];

  const faqs = [
    {
      question: `Do you provide turnkey material supply and installation for ${category.name} in Karachi?`,
      answer: `Yes, Interior Design Studio is a complete turnkey contractor in Karachi. We supply top-grade imported materials and provide on-site laser measurement and professional installation.`
    },
    {
      question: `How can I request a site measurement and price quotation for ${category.name}?`,
      answer: `You can click 'Get Free Quote' or contact us via WhatsApp at +92 310 2321899. Our team will visit your site anywhere in Karachi with catalog sample books.`
    },
    {
      question: `What warranties are provided with ${category.name} execution?`,
      answer: `We provide guaranteed material warranties (up to 20 years depending on product specification) along with professional installation workmanship warranties.`
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="font-sans text-gray-900 bg-[#FAFAFA] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <SEO 
        title={`${category.name} Supply & Installation Contractor Karachi`}
        description={`Turnkey ${category.name} contractor in Karachi. ${category.description} Free site measurement & sample catalog across Karachi.`}
        keywords={`${category.name} karachi, ${category.name} installation karachi, buy ${category.name} karachi, turnkey ${category.name} contractor`}
        breadcrumbs={breadcrumbs}
        faqs={faqs}
      />

      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs text-gray-500 font-medium">
          <Link to="/" className="hover:text-[#C19A5B] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#C19A5B]" />
          <span className="text-[#C19A5B] font-bold">{category.name}</span>
        </nav>

        {/* Category Header */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-200 shadow-sm space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs font-bold text-[#C19A5B] uppercase tracking-widest bg-[#FFF0DC] px-3.5 py-1.5 rounded-full border border-[#C19A5B]/20">
              Turnkey Installation Category
            </span>
            <button 
              onClick={onOpenQuote}
              className="btn-gold px-5 py-2.5 rounded-xl text-xs font-semibold shadow-md flex items-center space-x-2"
            >
              <span>Book Site Survey</span>
            </button>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl font-semibold text-[#111111]">
            {category.name} in Karachi
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
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group border border-gray-200"
              >
                <div>
                  <div className="relative h-60 overflow-hidden bg-gray-100">
                    <img 
                      src={detail.image || '/images/products/img_1.webp'}
                      alt={`${item.name} Karachi - Interior Design Studio`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {item.badge && (
                      <span className="absolute top-4 right-4 text-[10px] font-bold bg-[#C19A5B] text-white px-3 py-1 rounded-full shadow-sm">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <div className="p-6 space-y-3">
                    <h2 className="font-heading font-semibold text-xl text-[#111111] group-hover:text-[#C19A5B] transition-colors">
                      {item.name}
                    </h2>
                    <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed font-normal">
                      {detail.subtitle || detail.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link 
                    to={`/products/${item.id}`}
                    className="w-full btn-gold py-3 rounded-xl text-xs font-semibold flex items-center justify-center space-x-1.5 shadow-md"
                  >
                    <span>View Specifications & Pricing</span>
                    <ChevronRight className="w-4 h-4 text-white" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Category FAQs Section */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-200 shadow-sm space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#C19A5B] uppercase tracking-widest bg-[#FFF0DC] px-3.5 py-1.5 rounded-full border border-[#C19A5B]/20">
              Frequently Asked Questions
            </span>
            <h2 className="font-heading mt-5 text-2xl sm:text-3xl font-semibold text-[#111111]">
              {category.name} FAQs & Site Execution Guide
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="border border-gray-200 rounded-2xl p-5 hover:border-[#C19A5B]/50 transition-colors cursor-pointer"
                onClick={() => toggleFaq(idx)}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-heading text-base sm:text-lg font-medium text-[#111111] flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-[#C19A5B] flex-shrink-0" />
                    <span>{faq.question}</span>
                  </h3>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openFaqIndex === idx ? 'rotate-180 text-[#C19A5B]' : ''}`} />
                </div>
                {openFaqIndex === idx && (
                  <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed pl-7">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
