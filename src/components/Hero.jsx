import React, { useEffect, useState } from 'react';
import { ArrowRight, Star, Check, Award, Users } from 'lucide-react';
import { COURSE_IMAGES, ResilientImage } from '../assets/images/index.jsx';

const HERO_TRUST_POINTS = [
  '2,500+ Students',
  '20+ Recipes',
  'Certificate Included',
  'Lifetime Access',
];

export default function Hero({ onEnrollClick, onViewCourseClick }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-[#FFF8F0]"
    >
      {/* Subtle ambient patisserie warmth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-12 right-0 w-[480px] h-[480px] rounded-full bg-[#C47A44]/8 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-10 w-[360px] h-[360px] rounded-full bg-[#8B5E3C]/6 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* LEFT COLUMN: Course Headline & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small Trust Indicator */}
            <div
              className={`flex flex-wrap items-center gap-2.5 text-sm text-[#3B2118] mb-5 transition-all duration-500 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              <span className="flex items-center gap-0.5 text-[#C47A44]" aria-label="Rated 4.9 out of 5 stars">
                <Star className="w-4 h-4 fill-[#C47A44] text-[#C47A44]" />
                <Star className="w-4 h-4 fill-[#C47A44] text-[#C47A44]" />
                <Star className="w-4 h-4 fill-[#C47A44] text-[#C47A44]" />
                <Star className="w-4 h-4 fill-[#C47A44] text-[#C47A44]" />
                <Star className="w-4 h-4 fill-[#C47A44] text-[#C47A44]" />
              </span>
              <span className="font-semibold tabular-nums">4.9/5</span>
              <span aria-hidden="true" className="text-[#8B5E3C]">·</span>
              <span className="font-medium text-[#241510]/80 tabular-nums">2,500+ Students</span>
              <span aria-hidden="true" className="text-[#8B5E3C] hidden sm:inline">·</span>
              <span className="text-[#8B5E3C] font-medium hidden sm:inline">
                Online Patisserie & Baking Academy
              </span>
            </div>

            {/* Single Page H1 Heading */}
            <h1
              style={{ textWrap: 'balance' }}
              className={` font-serif-display text-4xl sm:text-5xl lg:text-[62px] font-bold text-[#3B2118] leading-[1.08] tracking-tight mb-6 transition-all duration-500 delay-75 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              MASTER ART OF
              <span className="block text-[#8B5E3C] italic font-semibold mt-1">
                Professional Baking
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p
              className={`text-base sm:text-lg lg:text-xl text-[#241510]/80 leading-relaxed max-w-2xl mb-8 transition-all duration-500 delay-150 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Learn cakes, breads, pastries &amp; desserts from beginner to professional with
              step-by-step lessons designed to help you bake with confidence.
            </p>

            {/* Primary & Secondary CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-9 transition-all duration-500 delay-200 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <button
                type="button"
                onClick={onEnrollClick}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-sm sm:text-base font-semibold text-white bg-[#3B2118] hover:bg-[#241510] rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C47A44]"
              >
                <span>START LEARNING</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={onViewCourseClick}
                className="inline-flex items-center justify-center px-8 py-4 text-sm sm:text-base font-semibold text-[#3B2118] bg-white/80 hover:bg-white border border-[#3B2118]/20 hover:border-[#3B2118]/40 rounded-2xl shadow-xs hover:shadow-sm hover:-translate-y-0.5 transition-all duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C47A44]"
              >
                VIEW COURSE
              </button>
            </div>

            {/* Sequential Small Trust Points Below Buttons */}
            <div className="pt-6 border-t border-[#3B2118]/10 w-full">
              <ul className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-y-3 gap-x-6 text-sm text-[#241510]/85">
                {HERO_TRUST_POINTS.map((point, idx) => (
                  <li
                    key={point}
                    style={{ transitionDelay: `${260 + idx * 70}ms` }}
                    className={`flex items-center gap-2 font-medium transition-all duration-500 ${
                      loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}
                  >
                    <Check className="w-4 h-4 text-[#C47A44] shrink-0" />
                    <span className="tabular-nums">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN: Hero Bakery Image & Floating Badges */}
          <div
            className={`lg:col-span-5 relative transition-all duration-700 delay-150 ${
              loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
            }`}
          >
            {/* Subtle decorative frame offset */}
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-3xl border border-[#8B5E3C]/20 -rotate-1 pointer-events-none hidden sm:block"
            />

            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#3B2118]/10 bg-[#3B2118]">
              <ResilientImage
                src={COURSE_IMAGES.hero}
                alt="Masterpiece three-tier dark chocolate and salted caramel cake in a sunlit patisserie studio"
                loading="eager"
                className="w-full aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/4.3] object-cover transition-transform duration-700 hover:scale-103"
              />
              {/* Subtle warm bottom scrim for contrast */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#241510]/50 via-transparent to-transparent pointer-events-none"
              />

              {/* Bottom caption inside hero frame */}
              {/* <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#241510]/80 backdrop-blur-md text-[#FFF8F0] px-4 py-2.5 rounded-xl border border-white/10 text-xs flex items-center gap-2.5">
                <Award className="w-4 h-4 text-[#C47A44] shrink-0" />
                <span>
                  Chef Sarah’s Signature Chocolate &amp; Salted Caramel Tier Cake · Module 03
                </span>
              </div> */}
            </div>

            {/* Floating Badge 1: 2,500+ Happy Students */}
            <div className="animate-float-slow absolute -top-4 left-3 sm:-left-5 bg-white text-[#241510] px-4 py-3 rounded-2xl shadow-lg border border-[#3B2118]/10 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#FFF8F0] border border-[#C47A44]/30 flex items-center justify-center text-[#8B5E3C] shrink-0">
                <Users className="w-4 h-4 text-[#C47A44]" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#3B2118] tabular-nums leading-tight">
                  2,500+ Happy Students
                </p>
                <p className="text-[11px] text-[#241510]/70 leading-tight mt-0.5">
                  Baking across 18+ countries
                </p>
              </div>
            </div>

            {/* Floating Badge 2: 4.9/5 Student Rating */}
            <div className="animate-float-delayed absolute -bottom-5 right-3 sm:-right-4 bg-white text-[#241510] px-4 py-2.5 rounded-2xl shadow-lg border border-[#3B2118]/10 hidden sm:flex items-center gap-2.5">
              <span className="text-[#C47A44] text-sm font-bold" aria-hidden="true">
                ★
              </span>
              <span className="text-xs font-bold text-[#3B2118] tabular-nums">
                4.9/5 Student Rating
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
