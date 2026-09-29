import React from 'react';
import { ArrowRight, Check, ShieldCheck, Zap } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal.js';

const PRICING_BENEFITS = [
  '30+ Video Lessons',
  '50+ Recipes',
  'Downloadable Recipes',
  'Certificate Included',
  'Lifetime Access',
  'Mobile & Desktop Access',
  'Beginner Friendly',
  'Practical Techniques',
];

export default function Pricing({ onEnrollClick }) {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.12 });

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="py-16 lg:py-24 bg-[#F7EFE4] border-t border-[#3B2118]/8 relative overflow-hidden"
    >
      {/* Subtle ambient copper glow behind pricing card */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-[#C47A44]/12 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <div
          className={`max-w-2xl mx-auto text-center mb-12 lg:mb-16 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#8B5E3C] uppercase mb-3">
            One-Time Enrollment · Lifetime Membership
          </p>
          <h2
            style={{ textWrap: 'balance' }}
            className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3B2118] tracking-tight mb-4"
          >
            READY TO START BAKING?
          </h2>
          <p className="text-base sm:text-lg text-[#241510]/75 leading-relaxed">
            Everything you need to build your baking skills in one complete course.
          </p>
        </div>

        {/* Prominent Pricing Card */}
        <div
          className={`max-w-3xl mx-auto transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="relative bg-white rounded-3xl border-2 border-[#C47A44]/45 shadow-xl overflow-hidden">
            {/* Top Banner Header */}
            <div className="bg-[#3B2118] text-[#FFF8F0] px-6 sm:px-10 py-6 sm:py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#8B5E3C]/30">
              <div>
                <p className="text-xs font-bold tracking-widest text-[#C47A44] uppercase mb-1.5">
                  LIMITED-TIME OFFER · SAVE 50%
                </p>
                <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-white tracking-wide">
                  COMPLETE BAKING COURSE
                </h3>
              </div>

              {/* Price Display */}
              <div className="flex sm:flex-col items-baseline sm:items-end gap-3 sm:gap-0.5">
                <span className="text-base sm:text-lg text-[#FFF8F0]/60 line-through font-medium tabular-nums">
                  ₹9,999
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-serif-display text-4xl sm:text-5xl font-bold text-white tabular-nums">
                    ₹4,999
                  </span>
                  <span className="text-xs text-[#FFF8F0]/75 font-medium">
                    / lifetime
                  </span>
                </div>
              </div>
            </div>

            {/* Card Body: Included Benefits & CTA */}
            <div className="p-6 sm:p-10">
              <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#8B5E3C] uppercase mb-5">
                Everything Included In Your Enrollment:
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-8 mb-9">
                {PRICING_BENEFITS.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-center gap-3 text-sm sm:text-base text-[#241510] font-medium"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#C47A44]/15 text-[#8B5E3C] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-[#3B2118]" />
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Primary Conversion CTA */}
              <button
                type="button"
                onClick={onEnrollClick}
                className="group w-full py-4 sm:py-5 px-8 text-base sm:text-lg font-semibold text-white bg-[#3B2118] hover:bg-[#241510] rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150 flex items-center justify-center gap-3 cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C47A44]"
              >
                <span>ENROLL NOW</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-150 group-hover:translate-x-1.5" />
              </button>

              {/* Trust Reassurance Below Button */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs sm:text-sm text-[#241510]/70 font-medium">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#C47A44]" />
                  Secure payment
                </span>
                <span aria-hidden="true">•</span>
                <span className="inline-flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-[#C47A44]" />
                  Instant access
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
