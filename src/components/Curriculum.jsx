import React from 'react';
import { Plus, Check, Clock, BookOpen } from 'lucide-react';
import { CURRICULUM_MODULES } from '../data/curriculum.js';
import { useScrollReveal } from '../hooks/useScrollReveal.js';

export default function Curriculum({ activeModuleIndex, setActiveModuleIndex, onEnrollClick }) {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.08 });

  const handleToggle = (index) => {
    setActiveModuleIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section
      id="curriculum"
      ref={sectionRef}
      className="py-16 lg:py-24 bg-[#FFF8F0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Sticky Summary Column on Desktop */}
          <div
            className={`lg:col-span-4 lg:sticky lg:top-28 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#8B5E3C] uppercase mb-3">
              Structured 6-Module Syllabus
            </p>
            <h2
              style={{ textWrap: 'balance' }}
              className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3B2118] tracking-tight mb-4"
            >
              COURSE CURRICULUM
            </h2>
            <p className="text-base sm:text-lg text-[#241510]/75 leading-relaxed mb-6">
              Everything you need to go from beginner to confident baker.
            </p>

            {/* Unboxed Course Summary Metrics */}
            <div className="py-5 border-y border-[#3B2118]/12 space-y-3 text-sm text-[#241510]/85 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-[#241510]/70">Total Modules</span>
                <span className="font-semibold text-[#3B2118] tabular-nums">06 Comprehensive Modules</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#241510]/70">Video Lessons</span>
                <span className="font-semibold text-[#3B2118] tabular-nums">30+ HD Step-by-Step Lessons</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#241510]/70">Included Recipes</span>
                <span className="font-semibold text-[#3B2118] tabular-nums">50+ Printable Recipe Guides</span>
              </div>
            </div>

            <button
              type="button"
              onClick={onEnrollClick}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-[#3B2118] hover:bg-[#241510] rounded-xl shadow-sm hover:shadow transition-all duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C47A44]"
            >
              Unlock Full Curriculum
            </button>
          </div>

          {/* Right Accordion Column */}
          <div className="lg:col-span-8 space-y-4">
            {CURRICULUM_MODULES.map((mod, index) => {
              const isOpen = activeModuleIndex === index;
              const contentId = `curriculum-panel-${mod.id}`;
              const triggerId = `curriculum-trigger-${mod.id}`;

              return (
                <div
                  key={mod.id}
                  style={{ transitionDelay: `${index * 60}ms` }}
                  className={`rounded-2xl border transition-all duration-200 ${
                    isOpen
                      ? 'bg-white border-[#8B5E3C]/40 shadow-md'
                      : 'bg-white/75 hover:bg-white border-[#3B2118]/10 shadow-2xs'
                  } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                >
                  <h3>
                    <button
                      id={triggerId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={contentId}
                      onClick={() => handleToggle(index)}
                      className="w-full text-left p-5 sm:p-6 lg:p-7 flex items-start sm:items-center justify-between gap-4 cursor-pointer rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C47A44]"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                        {/* Desktop Module Number on Left */}
                        <span className="font-serif-display text-2xl sm:text-3xl font-bold text-[#C47A44] tabular-nums shrink-0">
                          Module {mod.number}
                        </span>

                        <div>
                          <span className="block font-serif-display text-xl sm:text-2xl font-bold text-[#3B2118]">
                            {mod.title}
                          </span>
                          <span className="mt-1 flex items-center gap-2 text-xs text-[#8B5E3C] font-medium tabular-nums">
                            <Clock className="w-3.5 h-3.5 shrink-0" />
                            <span>{mod.duration}</span>
                          </span>
                        </div>
                      </div>

                      {/* Rotating Plus Icon */}
                      <span
                        aria-hidden="true"
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-150 ${
                          isOpen
                            ? 'bg-[#3B2118] text-white'
                            : 'bg-[#FFF8F0] text-[#3B2118] border border-[#3B2118]/10'
                        }`}
                      >
                        <Plus
                          className={`w-5 h-5 transition-transform duration-200 ${
                            isOpen ? 'rotate-45' : 'rotate-0'
                          }`}
                        />
                      </span>
                    </button>
                  </h3>

                  {/* Smooth Height Accordion Content */}
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={triggerId}
                    className={`grid transition-all duration-200 ease-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 sm:px-6 lg:px-7 pb-6 lg:pb-7 pt-2 border-t border-[#3B2118]/8 sm:pl-[132px]">
                        <p className="text-sm sm:text-base text-[#241510]/80 mb-4 leading-relaxed">
                          {mod.summary}
                        </p>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-5">
                          {mod.lessons.map((lesson) => (
                            <li
                              key={lesson}
                              className="flex items-start gap-2.5 text-sm text-[#241510]"
                            >
                              <Check className="w-4 h-4 text-[#C47A44] shrink-0 mt-0.5" />
                              <span>{lesson}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="pt-3 border-t border-[#3B2118]/8 flex items-center gap-2 text-xs sm:text-sm text-[#8B5E3C] font-medium">
                          <BookOpen className="w-4 h-4 text-[#C47A44] shrink-0" />
                          <span>
                            <strong className="text-[#3B2118]">Practical Outcome:</strong> {mod.deliverable}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
