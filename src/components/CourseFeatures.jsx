import React from 'react';
import {
  PlayCircle,
  BookMarked,
  FileDown,
  Award,
  Infinity as InfinityIcon,
  Smartphone,
  Sparkles,
  Utensils,
  Check,
} from 'lucide-react';
import { COURSE_FEATURES_LIST } from '../data/courseData.js';
import { useScrollReveal } from '../hooks/useScrollReveal.js';

const FEATURE_ICON_MAP = {
  PlayCircle,
  BookMarked,
  FileDown,
  Award,
  Infinity: InfinityIcon,
  Smartphone,
  Sparkles,
  Utensils,
};

export default function CourseFeatures() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 bg-[#FFF8F0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div
          className={`max-w-3xl mx-auto text-center mb-12 lg:mb-16 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#8B5E3C] uppercase mb-3">
            Complete All-In-One Patisserie Toolkit
          </p>
          <h2
            style={{ textWrap: 'balance' }}
            className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3B2118] tracking-tight"
          >
            EVERYTHING YOU NEED TO BECOME A BETTER BAKER
          </h2>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COURSE_FEATURES_LIST.map((feature, index) => {
            const IconComponent = FEATURE_ICON_MAP[feature.iconName] || PlayCircle;
            return (
              <div
                key={feature.title}
                style={{ transitionDelay: `${index * 65}ms` }}
                className={`group bg-white rounded-2xl p-6 border border-[#3B2118]/10 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
              >
                <div>
                  {/* Animated Icon Container */}
                  <div className="w-12 h-12 rounded-xl bg-[#FFF8F0] border border-[#C47A44]/25 flex items-center justify-center mb-5 group-hover:bg-[#3B2118] group-hover:border-[#3B2118] transition-colors duration-200">
                    <IconComponent className="w-5 h-5 text-[#C47A44] group-hover:text-white transition-colors duration-200" />
                  </div>

                  <div className="flex items-start gap-2 mb-2">
                    <Check className="w-4 h-4 text-[#C47A44] shrink-0 mt-1" />
                    <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#3B2118] leading-snug">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="text-sm text-[#241510]/75 leading-relaxed">
                    {feature.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
