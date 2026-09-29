import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/testimonials.js';
import { useScrollReveal } from '../hooks/useScrollReveal.js';

export default function Testimonials() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });
  const [activeIndex, setActiveIndex] = useState(0);

  const total = TESTIMONIALS_DATA.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  // Compute 3 visible cards for desktop starting from activeIndex
  const desktopCards = [
    TESTIMONIALS_DATA[activeIndex % total],
    TESTIMONIALS_DATA[(activeIndex + 1) % total],
    TESTIMONIALS_DATA[(activeIndex + 2) % total],
  ];

  const currentMobileCard = TESTIMONIALS_DATA[activeIndex];

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className="py-16 lg:py-24 bg-[#F7EFE4] border-y border-[#3B2118]/8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header + Carousel Navigation Controls */}
        <div
          className={`flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 lg:mb-14 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div>
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#8B5E3C] uppercase mb-3">
              4.9/5 Average Rating Across 2,500+ Graduates
            </p>
            <h2
              style={{ textWrap: 'balance' }}
              className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3B2118] tracking-tight"
            >
              WHAT OUR STUDENTS SAY
            </h2>
          </div>

          {/* Previous / Next Controls */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous student testimonial"
              className="w-11 h-11 rounded-xl bg-white hover:bg-[#3B2118] text-[#3B2118] hover:text-white border border-[#3B2118]/15 flex items-center justify-center transition-colors duration-150 cursor-pointer shadow-2xs focus-visible:outline-2 focus-visible:outline-[#C47A44]"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next student testimonial"
              className="w-11 h-11 rounded-xl bg-white hover:bg-[#3B2118] text-[#3B2118] hover:text-white border border-[#3B2118]/15 flex items-center justify-center transition-colors duration-150 cursor-pointer shadow-2xs focus-visible:outline-2 focus-visible:outline-[#C47A44]"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* DESKTOP VIEW: 3 Cards Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {desktopCards.map((item, idx) => (
            <article
              key={`${item.id}-${idx}`}
              className={`bg-[#FFF8F0] rounded-2xl p-8 border border-[#3B2118]/10 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <div>
                {/* 5-Star Rating & Verified Outcome */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div
                    className="flex items-center gap-1 text-[#C47A44]"
                    aria-label={`${item.rating} out of 5 stars`}
                  >
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C47A44] text-[#C47A44]" />
                    ))}
                  </div>
                  <span className="text-xs font-medium text-[#8B5E3C]">
                    {item.favoriteModule}
                  </span>
                </div>

                {/* Testimonial Quote */}
                <blockquote className="font-serif-display text-xl sm:text-[22px] text-[#3B2118] leading-relaxed mb-6">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>

              <div>
                {/* Concrete Outcome */}
                <p className="text-xs font-semibold text-[#8B5E3C] pb-4 mb-4 border-b border-[#3B2118]/8">
                  Outcome: {item.outcome}
                </p>

                {/* Student Profile Info */}
                <div className="flex items-center gap-3.5">
                  <img
                    src={item.avatar}
                    alt={`${item.name} profile portrait`}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full object-cover border border-[#C47A44]/30 shrink-0"
                  />
                  <div>
                    <p className="text-base font-bold text-[#3B2118]">
                      — {item.name}
                    </p>
                    <p className="text-xs text-[#241510]/70">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* MOBILE & TABLET VIEW: One-Card-at-a-Time Slider */}
        <div className="lg:hidden">
          <article className="bg-[#FFF8F0] rounded-2xl p-6 sm:p-8 border border-[#3B2118]/10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <div
                  className="flex items-center gap-1 text-[#C47A44]"
                  aria-label={`${currentMobileCard.rating} out of 5 stars`}
                >
                  {[...Array(currentMobileCard.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C47A44] text-[#C47A44]" />
                  ))}
                </div>
                <span className="text-xs font-medium text-[#8B5E3C]">
                  {currentMobileCard.favoriteModule}
                </span>
              </div>

              <blockquote className="font-serif-display text-xl sm:text-2xl text-[#3B2118] leading-relaxed mb-6">
                &ldquo;{currentMobileCard.quote}&rdquo;
              </blockquote>
            </div>

            <div>
              <p className="text-xs font-semibold text-[#8B5E3C] pb-4 mb-4 border-b border-[#3B2118]/8">
                Outcome: {currentMobileCard.outcome}
              </p>

              <div className="flex items-center gap-3.5">
                <img
                  src={currentMobileCard.avatar}
                  alt={`${currentMobileCard.name} profile portrait`}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border border-[#C47A44]/30 shrink-0"
                />
                <div>
                  <p className="text-base font-bold text-[#3B2118]">
                    — {currentMobileCard.name}
                  </p>
                  <p className="text-xs text-[#241510]/70">
                    {currentMobileCard.role}
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Pagination Dots */}
        <div
          className="mt-8 flex items-center justify-center gap-2.5"
          role="tablist"
          aria-label="Testimonial slides"
        >
          {TESTIMONIALS_DATA.map((item, idx) => {
            const isCurrent = activeIndex === idx;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isCurrent}
                aria-label={`Show testimonial from ${item.name}`}
                onClick={() => setActiveIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-200 cursor-pointer ${
                  isCurrent
                    ? 'w-8 bg-[#3B2118]'
                    : 'w-2.5 bg-[#3B2118]/25 hover:bg-[#3B2118]/50'
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
