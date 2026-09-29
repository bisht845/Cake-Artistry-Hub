import React from 'react';
import { ArrowRight } from 'lucide-react';
import { COURSE_IMAGES, ResilientImage } from '../assets/images/index.jsx';
import { useScrollReveal } from '../hooks/useScrollReveal.js';

export default function FinalCTA({ onEnrollClick }) {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.15 });

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-28 overflow-hidden bg-[#241510] text-[#FFF8F0]"
    >
      {/* Subtle Background Image with Slow Zoom */}
      <div className="absolute inset-0 overflow-hidden">
        <ResilientImage
          src={COURSE_IMAGES.finalCtaBg}
          alt="Warm sunlit patisserie table with artisanal cakes and baking tools"
          loading="lazy"
          className={`w-full h-full object-cover transition-transform duration-1000 ease-out ${
            isVisible ? 'scale-105' : 'scale-100'
          }`}
        />
        {/* Measured Dark Chocolate Scrim for High Readability */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#241510]/95 via-[#3B2118]/88 to-[#241510]/92"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Subtitle */}
          <p className="text-sm sm:text-base font-semibold tracking-widest text-[#C47A44] uppercase mb-4">
            Learn. Bake. Create.
          </p>

          {/* Main Emotional Heading */}
          <h2
            style={{ textWrap: 'balance' }}
            className="font-serif-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6"
          >
            READY TO TURN YOUR PASSION
            <span className="block text-[#C47A44] italic font-semibold mt-1">
              INTO YOUR SKILL?
            </span>
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg lg:text-xl text-[#FFF8F0]/85 leading-relaxed max-w-2xl mx-auto mb-10">
            Start your baking journey today and learn the techniques behind beautiful, delicious
            bakery creations.
          </p>

          {/* Primary CTA Button */}
          <button
            type="button"
            onClick={onEnrollClick}
            className="group inline-flex items-center justify-center gap-3 px-9 py-4.5 text-base sm:text-lg font-semibold text-white bg-[#C47A44] hover:bg-[#b36b37] rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <span>JOIN THE BAKING COURSE</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-150 group-hover:translate-x-1.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
