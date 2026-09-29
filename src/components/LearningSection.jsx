import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { LEARNING_CARDS } from '../data/courseData.js';
import { ResilientImage } from '../assets/images/index.jsx';
import { useScrollReveal } from '../hooks/useScrollReveal.js';

export default function LearningSection({ onSelectModule }) {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      id="course"
      ref={sectionRef}
      className="py-16 lg:py-24 bg-[#FFF8F0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`max-w-2xl mx-auto text-center mb-12 lg:mb-16 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#8B5E3C] uppercase mb-3">
            Hands-On Patisserie Mastery
          </p>
          <h2
            style={{ textWrap: 'balance' }}
            className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3B2118] tracking-tight mb-4"
          >
            WHAT YOU&apos;LL LEARN
          </h2>
          <p className="text-base sm:text-lg text-[#241510]/75 leading-relaxed">
            Build real baking skills through practical, step-by-step lessons.
          </p>
        </div>

        {/* 5 Learning Cards: 1 col mobile, 2 col tablet, 6-col balanced grid on desktop (top 3 cards span 2 cols each, bottom 2 cards span 3 cols each) */}
        {/* Learning Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
          {LEARNING_CARDS.map((card, index) => {
            return (
              <article
                key={card.id}
                style={{ transitionDelay: `${index * 90}ms` }}
                className={`lg:col-span-2 group bg-white rounded-2xl overflow-hidden border border-[#3B2118]/10 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-200 flex flex-col ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                }`}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#3B2118]">
                  <ResilientImage
                    src={card.image}
                    alt={card.alt}
                    loading="lazy"
                    fallbackLabel={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#241510]/60 via-[#241510]/10 to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-200"
                  />

                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-[#FFF8F0]/95 font-medium">
                    <span>{card.recipesCount}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-medium text-[#8B5E3C] mb-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#C47A44] shrink-0" />
                      <span>{card.category}</span>
                    </div>

                    <h3 className="font-serif-display text-2xl sm:text-[26px] font-bold text-[#3B2118] mb-2.5 group-hover:text-[#8B5E3C] transition-colors duration-150">
                      {card.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#241510]/75 leading-relaxed mb-6">
                      {card.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#3B2118]/8 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => onSelectModule(card.moduleIndex)}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#3B2118] group-hover:text-[#C47A44] transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C47A44]"
                    >
                      <span>Explore Module</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1.5" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
