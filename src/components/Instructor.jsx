import React, { useState } from 'react';
import { Award, Users, BookOpen, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { COURSE_IMAGES, ResilientImage } from '../assets/images/index.jsx';
import { useScrollReveal } from '../hooks/useScrollReveal.js';

const INSTRUCTOR_STATS = [
  { value: '10+ Years', label: 'Experience', icon: Award },
  { value: '2,500+', label: 'Students', icon: Users },
  { value: '20+ Signature', label: 'Recipes', icon: BookOpen },
];

const INSTRUCTOR_CREDENTIALS = [
  'Trained in classical French patisserie & artisanal sourdough lamination',
  'Former Head Pastry Chef with over a decade of boutique bakery leadership',
  'Specialized in adapting commercial patisserie formulas for standard domestic ovens',
  'Mentored over 2,500 home bakers and independent cake studio founders worldwide',
];

export default function Instructor() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.12 });
  const [showFullBio, setShowFullBio] = useState(false);

  return (
    <section
      id="instructor"
      ref={sectionRef}
      className="py-16 lg:py-24 bg-[#FFF8F0] border-b border-[#3B2118]/8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* LEFT: Chef Portrait with Subtle Decorative Framing */}
          <div
            className={`lg:col-span-5 relative transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
            }`}
          >
            {/* Decorative Frame Offset */}
            <div
              aria-hidden="true"
              className="absolute -inset-3.5 rounded-3xl border border-[#C47A44]/35 rotate-1 pointer-events-none hidden sm:block"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -left-4 w-32 h-32 rounded-2xl bg-[#8B5E3C]/12 -z-10 hidden sm:block"
            />

            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#3B2118]/10 bg-[#3B2118]">
              <ResilientImage
                src={COURSE_IMAGES.instructor}
                alt="Chef Sarah, Pastry Chef and Baking Instructor at Bakery Academy"
                loading="lazy"
                fallbackLabel="Chef Sarah"
                className="w-full aspect-[3/3.6] object-cover object-top"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#241510]/65 via-transparent to-transparent"
              /> 
              <div className="absolute bottom-5 left-5 right-5 text-[#FFF8F0]">
                <p className="font-serif-display text-2xl font-bold text-white">
                  Chef Neetu
                </p>
                <p className="text-xs sm:text-sm text-[#FFF8F0]/85">
                  Lead Pastry Chef &amp; Founder, Bakery Academy
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Instructor Information, Stats & Expandable Bio */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div
              className={`transition-all duration-500 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#8B5E3C] uppercase mb-3">
                Learn From A Master Patissier
              </p>
              <h2
                style={{ textWrap: 'balance' }}
                className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3B2118] tracking-tight mb-3"
              >
                MEET YOUR INSTRUCTOR
              </h2>

              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-6">
                <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#8B5E3C]">
                  Chef Neetu
                </h3>
                <span aria-hidden="true" className="text-[#C47A44]">·</span>
                <span className="text-sm sm:text-base font-medium text-[#241510]/80">
                  Pastry Chef &amp; Baking Instructor
                </span>
              </div>

              {/* Quote / Description */}
              <blockquote className="font-serif-display italic text-xl sm:text-2xl lg:text-[26px] text-[#3B2118] leading-relaxed pl-5 border-l-2 border-[#C47A44] mb-8">
                &ldquo;I believe anyone can learn to bake professionally with the right guidance,
                practical techniques and a little patience.&rdquo;
              </blockquote>
            </div>

            {/* Sequential Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-8">
              {INSTRUCTOR_STATS.map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={stat.label}
                    style={{ transitionDelay: `${200 + idx * 90}ms` }}
                    className={`bg-white rounded-2xl p-5 border border-[#3B2118]/10 shadow-2xs transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    <IconComponent className="w-5 h-5 text-[#C47A44] mb-2" />
                    <p className="font-serif-display text-2xl font-bold text-[#3B2118] tabular-nums">
                      {stat.value}
                    </p>
                    <p className="text-xs sm:text-sm text-[#241510]/70 font-medium">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Expandable Instructor Background Drawer */}
            <div
              className={`w-full grid transition-all duration-200 ease-out ${
                showFullBio ? 'grid-rows-[1fr] opacity-100 mb-6' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="bg-[#F7EFE4] rounded-2xl p-6 border border-[#3B2118]/10 space-y-4">
                  <p className="text-sm sm:text-base text-[#241510]/85 leading-relaxed">
                    Over the past decade, Chef Sarah has demystified fine patisserie for home
                    bakers. After years of running commercial pastry kitchens, she noticed that
                    most baking books fail at home because they ignore domestic oven recovery times
                    and ingredient temperature tolerances.
                  </p>
                  <ul className="space-y-2">
                    {INSTRUCTOR_CREDENTIALS.map((cred) => (
                      <li
                        key={cred}
                        className="flex items-start gap-2.5 text-sm text-[#241510]/85"
                      >
                        <Check className="w-4 h-4 text-[#C47A44] shrink-0 mt-0.5" />
                        <span>{cred}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              type="button"
              onClick={() => setShowFullBio((prev) => !prev)}
              aria-expanded={showFullBio}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-[#3B2118] bg-white hover:bg-[#3B2118] hover:text-white border border-[#3B2118]/25 rounded-xl shadow-2xs transition-all duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C47A44]"
            >
              <span>
                {showFullBio ? 'SHOW LESS ABOUT THE INSTRUCTOR' : 'LEARN MORE ABOUT THE INSTRUCTOR'}
              </span>
              {showFullBio ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
