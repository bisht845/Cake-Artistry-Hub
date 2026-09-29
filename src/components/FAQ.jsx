import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { FAQ_ITEMS } from '../data/faq.js';
import { useScrollReveal } from '../hooks/useScrollReveal.js';

export default function FAQ() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-16 lg:py-24 bg-[#FFF8F0]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div
          className={`text-center mb-12 lg:mb-16 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#8B5E3C] uppercase mb-3">
            Common Questions Answered
          </p>
          <h2
            style={{ textWrap: 'balance' }}
            className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3B2118] tracking-tight"
          >
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            const contentId = `faq-answer-${item.id}`;
            const triggerId = `faq-question-${item.id}`;

            return (
              <div
                key={item.id}
                style={{ transitionDelay: `${idx * 50}ms` }}
                className={`rounded-2xl border transition-all duration-200 ${
                  isOpen
                    ? 'bg-white border-[#8B5E3C]/40 shadow-sm'
                    : 'bg-white/75 hover:bg-white border-[#3B2118]/10'
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                <h3>
                  <button
                    id={triggerId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => handleToggle(idx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C47A44]"
                  >
                    <span className="font-serif-display text-xl sm:text-2xl font-bold text-[#3B2118]">
                      {item.question}
                    </span>

                    <span
                      aria-hidden="true"
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-150 ${
                        isOpen
                          ? 'bg-[#3B2118] text-white'
                          : 'bg-[#FFF8F0] text-[#3B2118] border border-[#3B2118]/10'
                      }`}
                    >
                      <Plus
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isOpen ? 'rotate-45' : 'rotate-0'
                        }`}
                      />
                    </span>
                  </button>
                </h3>

                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={triggerId}
                  className={`grid transition-all duration-200 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#241510]/80 leading-relaxed border-t border-[#3B2118]/8">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
