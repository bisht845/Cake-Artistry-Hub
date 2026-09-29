import React from 'react';
import { Star, Users, BookOpen, Award, Infinity as InfinityIcon } from 'lucide-react';
import { useScrollReveal, useAnimatedCounter } from '../hooks/useScrollReveal.js';

export default function TrustBar() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });
  const studentCount = useAnimatedCounter(2500, 1400, isVisible);
  const recipeCount = useAnimatedCounter(20, 1200, isVisible);

  return (
    <section
      ref={ref}
      aria-label="Course Trust and Social Proof Metrics"
      className="bg-[#3B2118] text-[#FFF8F0] border-y border-[#8B5E3C]/30 py-8 lg:py-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 lg:gap-8 items-center">
          {/* Item 1: Rating */}
          <div
            className={`flex flex-col items-start sm:items-center sm:text-center transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            <div className="flex items-center gap-1 text-[#C47A44] mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#C47A44] text-[#C47A44]" />
              ))}
              <span className="ml-1.5 font-serif-display text-2xl font-bold text-white tabular-nums">
                4.9/5
              </span>
            </div>
            <span className="text-xs sm:text-sm text-[#FFF8F0]/75 font-medium">
              Student Rating
            </span>
          </div>

          {/* Item 2: 2,500+ Students */}
          <div
            style={{ transitionDelay: '75ms' }}
            className={`flex flex-col items-start sm:items-center sm:text-center md:border-l md:border-white/10 md:pl-4 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <Users className="w-4 h-4 text-[#C47A44] shrink-0" />
              <span className="font-serif-display text-2xl sm:text-3xl font-bold text-white tabular-nums">
                {studentCount.toLocaleString()}+
              </span>
            </div>
            <span className="text-xs sm:text-sm text-[#FFF8F0]/75 font-medium">
              Students
            </span>
          </div>

          {/* Item 3: 20+ Recipes */}
          <div
            style={{ transitionDelay: '150ms' }}
            className={`flex flex-col items-start sm:items-center sm:text-center md:border-l md:border-white/10 md:pl-4 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <BookOpen className="w-4 h-4 text-[#C47A44] shrink-0" />
              <span className="font-serif-display text-2xl sm:text-3xl font-bold text-white tabular-nums">
                {recipeCount}+
              </span>
            </div>
            <span className="text-xs sm:text-sm text-[#FFF8F0]/75 font-medium">
              Recipes
            </span>
          </div>

          {/* Item 4: Certificate Included */}
          <div
            style={{ transitionDelay: '225ms' }}
            className={`flex flex-col items-start sm:items-center sm:text-center md:border-l md:border-white/10 md:pl-4 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <Award className="w-4 h-4 text-[#C47A44] shrink-0" />
              <span className="font-serif-display text-2xl sm:text-2xl font-bold text-white">
                Certificate
              </span>
            </div>
            <span className="text-xs sm:text-sm text-[#FFF8F0]/75 font-medium">
              Included
            </span>
          </div>

          {/* Item 5: Lifetime Access */}
          <div
            style={{ transitionDelay: '300ms' }}
            className={`col-span-2 md:col-span-1 flex flex-col items-start sm:items-center sm:text-center pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-white/10 md:pl-4 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <InfinityIcon className="w-4 h-4 text-[#C47A44] shrink-0" />
              <span className="font-serif-display text-2xl sm:text-2xl font-bold text-white">
                Lifetime
              </span>
            </div>
            <span className="text-xs sm:text-sm text-[#FFF8F0]/75 font-medium">
              Access
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
