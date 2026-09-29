import React from 'react';
import { ShieldCheck, Zap, Award, Infinity as InfinityIcon } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal.js';

const TRUST_PILLARS = [
  {
    title: 'Secure Payment',
    detail: '256-bit encrypted checkout supporting UPI, cards & netbanking.',
    icon: ShieldCheck,
  },
  {
    title: 'Instant Access',
    detail: 'Immediate login credentials sent to your inbox upon enrollment.',
    icon: Zap,
  },
  {
    title: 'Certificate',
    detail: 'Official Bakery Academy credential signed by Chef Sarah.',
    icon: Award,
  },
  {
    title: 'Lifetime Access',
    detail: 'Watch & revisit every lesson and PDF recipe book forever.',
    icon: InfinityIcon,
  },
];

export default function TrustSection() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.15 });

  return (
    <section
      ref={sectionRef}
      className="py-14 lg:py-20 bg-[#FFF8F0] border-b border-[#3B2118]/8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`max-w-2xl mx-auto text-center mb-10 lg:mb-12 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h2
            style={{ textWrap: 'balance' }}
            className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3B2118] tracking-tight mb-3"
          >
            START LEARNING WITH CONFIDENCE
          </h2>
          <p className="text-sm sm:text-base text-[#241510]/75 leading-relaxed">
            Learn at your own pace with clear lessons, practical recipes and lifetime access.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_PILLARS.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={pillar.title}
                style={{ transitionDelay: `${idx * 80}ms` }}
                className={`bg-white/80 rounded-2xl p-6 border border-[#3B2118]/10 flex items-start gap-4 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <div className="w-11 h-11 rounded-xl bg-[#FFF8F0] border border-[#C47A44]/30 flex items-center justify-center shrink-0">
                  <IconComponent className="w-5 h-5 text-[#C47A44]" />
                </div>
                <div>
                  <h3 className="font-serif-display text-xl font-bold text-[#3B2118] mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#241510]/70 leading-relaxed">
                    {pillar.detail}
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
