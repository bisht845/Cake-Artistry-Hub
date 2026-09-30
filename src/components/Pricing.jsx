import React from 'react';
import { ArrowRight, Check, MessageCircle, ShieldCheck } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal.js';

const COURSE_BENEFITS = [
  '30+ Video Lessons',
  '50+ Recipes',
  'Downloadable Recipes',
  'Certificate Included',
  'Lifetime Access',
  'Mobile & Desktop Access',
  'Beginner Friendly',
  'Practical Techniques',
];

export default function Pricing({ onEnrollClick }) {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.12 });

  const handleWhatsAppEnquiry = () => {
    const message = `Hello Cake Artistry Hub,

I am interested in the Complete Baking Course.

Please share the complete course details, curriculum, learning process, and enrollment information with me.

Thank you.`;

    const whatsappUrl = `https://wa.me/918920202827?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="py-16 lg:py-24 bg-[#F7EFE4] border-t border-[#3B2118]/8 relative overflow-hidden"
    >
      {/* Subtle ambient copper glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-[#C47A44]/12 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Heading */}
        <div
          className={`max-w-2xl mx-auto text-center mb-12 lg:mb-16 transition-all duration-500 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#8B5E3C] uppercase mb-3">
            COURSE ENQUIRY · WHATSAPP SUPPORT
          </p>

          <h2
            style={{ textWrap: 'balance' }}
            className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3B2118] tracking-tight mb-4"
          >
            READY TO START BAKING?
          </h2>

          <p className="text-base sm:text-lg text-[#241510]/75 leading-relaxed">
            Everything you need to build your baking skills in one complete
            course. Contact us on WhatsApp to learn more about the course.
          </p>
        </div>

        {/* Course Information Card */}
        <div
          className={`max-w-3xl mx-auto transition-all duration-700 delay-100 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="relative bg-white rounded-3xl border-2 border-[#C47A44]/45 shadow-xl overflow-hidden">

            {/* Top Header */}
            <div className="bg-[#3B2118] text-[#FFF8F0] px-6 sm:px-10 py-6 sm:py-8 border-b border-[#8B5E3C]/30">
              <div>
                <p className="text-xs font-bold tracking-widest text-[#C47A44] uppercase mb-1.5">
                  PROFESSIONAL BAKING TRAINING
                </p>

                <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-white tracking-wide">
                  COMPLETE BAKING COURSE
                </h3>

                <p className="text-sm sm:text-base text-[#FFF8F0]/75 mt-2 leading-relaxed">
                  Learn practical baking techniques, recipes, and skills with
                  step-by-step lessons designed for beginners and aspiring
                  bakers.
                </p>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6 sm:p-10">

              <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#8B5E3C] uppercase mb-5">
                WHAT YOU WILL GET:
              </p>

              {/* Benefits */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-8 mb-9">
                {COURSE_BENEFITS.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-center gap-3 text-sm sm:text-base text-[#241510] font-medium"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#C47A44]/15 text-[#8B5E3C] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-[#3B2118]" />
                    </span>

                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* WhatsApp CTA */}
              <button
                type="button"
                onClick={handleWhatsAppEnquiry}
                className="group w-full py-4 sm:py-5 px-8 text-base sm:text-lg font-semibold text-white bg-[#25D366] hover:bg-[#1DA851] rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150 flex items-center justify-center gap-3 cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C47A44]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>CHAT ON WHATSAPP</span>

                <ArrowRight className="w-5 h-5 transition-transform duration-150 group-hover:translate-x-1.5" />
              </button>

              {/* WhatsApp Information */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs sm:text-sm text-[#241510]/70 font-medium">

                <span className="inline-flex items-center gap-1.5">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  WhatsApp: +91 89202 02827
                </span>

                <span aria-hidden="true">•</span>

                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#C47A44]" />
                  Course Enquiry Support
                </span>

              </div>

              {/* Small Supporting Text */}
              <p className="text-center text-xs sm:text-sm text-[#241510]/60 mt-5 leading-relaxed">
                Click the button above to start a WhatsApp conversation with
                Cake Artistry Hub and receive complete course information.
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

