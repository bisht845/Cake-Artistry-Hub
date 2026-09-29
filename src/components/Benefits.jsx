import React from 'react';
import {
  BookOpen,
  ChefHat,
  Scale,
  Clock,
  Award,
  Infinity as InfinityIcon,
  CheckCircle2,
} from 'lucide-react';
import { COURSE_BENEFITS } from '../data/courseData.js';
import { COURSE_IMAGES, ResilientImage } from '../assets/images/index.jsx';
import { useScrollReveal } from '../hooks/useScrollReveal.js';

const ICON_MAP = {
  BookOpen,
  ChefHat,
  Scale,
  Clock,
  Award,
  Infinity: InfinityIcon,
};

export default function Benefits() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 bg-[#F7EFE4] border-y border-[#3B2118]/8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Editorial Header & Split Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-14 lg:mb-16">
          <div
            className={`lg:col-span-7 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#8B5E3C] uppercase mb-3">
              Why Choose This Course
            </p>
            <h2
              style={{ textWrap: 'balance' }}
              className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3B2118] tracking-tight mb-4"
            >
              MORE THAN A BAKING COURSE
            </h2>
            <p className="text-base sm:text-lg text-[#241510]/80 leading-relaxed max-w-2xl mb-6">
              Everything you need to turn your passion for baking into a real skill. Unlike scattered video clips that leave you guessing why a sponge sank or buttercream split, our structured academy teaches both the culinary craft and the science behind every recipe.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-[#3B2118]">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C47A44]" />
                Tested in standard home ovens
              </span>
              <span aria-hidden="true" className="text-[#8B5E3C] hidden sm:inline">·</span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C47A44]" />
                Gram &amp; cup measurements included
              </span>
            </div>
          </div>

          {/* Right Decorative Bakery Image */}
          <div
            className={`lg:col-span-5 transition-all duration-700 delay-150 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#3B2118]/10 bg-[#3B2118]">
              <ResilientImage
                src={COURSE_IMAGES.benefitsShowcase}
                alt="Pastry chef piping delicate Swiss meringue buttercream onto a layered cake"
                loading="lazy"
                className="w-full aspect-[16/10] object-cover"
              />
              <div className="bg-[#3B2118] text-[#FFF8F0] px-5 py-3.5 flex items-center justify-between text-xs sm:text-sm">
                <span className="font-serif-display italic text-base text-[#FFF8F0]">
                  “Precision made approachable for every home kitchen.”
                </span>
                <span className="text-[#C47A44] font-semibold whitespace-nowrap ml-3">
                  100% Practical
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Numbered Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {COURSE_BENEFITS.map((item, idx) => {
            const IconComponent = ICON_MAP[item.iconName] || BookOpen;
            return (
              <div
                key={item.number}
                style={{ transitionDelay: `${idx * 80}ms` }}
                className={`bg-[#FFF8F0] rounded-2xl p-6 sm:p-8 border border-[#3B2118]/10 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif-display text-3xl sm:text-4xl font-bold text-[#C47A44] tabular-nums">
                      {item.number}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-[#3B2118]/6 flex items-center justify-center text-[#3B2118]">
                      <IconComponent className="w-5 h-5 text-[#8B5E3C]" />
                    </div>
                  </div>

                  <h3 className="font-serif-display text-2xl font-bold text-[#3B2118] mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#241510]/75 leading-relaxed">
                    {item.description}
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
