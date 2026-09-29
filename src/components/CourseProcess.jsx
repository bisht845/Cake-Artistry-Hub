import React from 'react';
import { COURSE_PROCESS_STEPS } from '../data/courseData.js';
import { useScrollReveal } from '../hooks/useScrollReveal.js';

export default function CourseProcess() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.15 });

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 bg-[#3B2118] text-[#FFF8F0] relative overflow-hidden"
    >
      {/* Subtle decorative glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[240px] bg-[#C47A44]/10 blur-3xl rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <div
          className={`max-w-2xl mx-auto text-center mb-14 lg:mb-20 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#C47A44] uppercase mb-3">
            Simple 4-Step Learning Path
          </p>
          <h2
            style={{ textWrap: 'balance' }}
            className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
          >
            HOW THE COURSE WORKS
          </h2>
        </div>

        {/* 4-Step Process Grid with Connecting Line on Desktop */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {/* Desktop Horizontal Connecting Line */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-9 left-[12%] right-[12%] h-px bg-gradient-to-r from-[#C47A44]/20 via-[#C47A44]/60 to-[#C47A44]/20"
          />

          {COURSE_PROCESS_STEPS.map((step, index) => (
            <div
              key={step.number}
              style={{ transitionDelay: `${index * 120}ms` }}
              className={`relative flex flex-col items-start lg:items-center lg:text-center bg-white/5 lg:bg-transparent p-6 lg:p-4 rounded-2xl border border-white/10 lg:border-0 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {/* Step Number Node */}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#241510] border-2 border-[#C47A44] flex items-center justify-center mb-6 shadow-md">
                <span className="font-serif-display text-2xl font-bold text-[#C47A44] tabular-nums">
                  {step.number}
                </span>
              </div>

              <h3 className="font-serif-display text-2xl sm:text-[26px] font-bold text-white mb-2.5">
                {step.title}
              </h3>

              <p className="text-sm sm:text-base text-[#FFF8F0]/80 leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
