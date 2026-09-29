import React from 'react';
import { Instagram, Facebook, Youtube, Linkedin, Mail, MapPin, PhoneCall } from 'lucide-react';

const FOOTER_LINKS = [
  { label: 'Course', href: '#course' },
  { label: 'Curriculum', href: '#curriculum' },
  { label: 'Instructor', href: '#instructor' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
];

const SOCIAL_LINKS = [
  { label: 'Instagram', icon: Instagram, href: '#instagram' },
  { label: 'Facebook', icon: Facebook, href: '#facebook' },
  { label: 'YouTube', icon: Youtube, href: '#youtube' },
  { label: 'LinkedIn', icon: Linkedin, href: '#linkedin' },
];

export default function Footer({ onOpenContact, onOpenPolicy }) {
  const handleScrollLink = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#241510] text-[#FFF8F0] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* LEFT: Brand Logo & Short Description */}
          <div className="md:col-span-5">
            <a
              href="#home"
              onClick={(e) => handleScrollLink(e, '#home')}
              className="inline-block font-serif-display text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3"
            >
              Bakery Academy
            </a>
            <p className="text-sm sm:text-base text-[#FFF8F0]/75 leading-relaxed max-w-sm mb-6">
              Helping aspiring bakers turn their passion into professional baking skills.
            </p>

            <div className="space-y-2 text-xs sm:text-sm text-[#FFF8F0]/70">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C47A44]" />
                <span>bakecookwithnitu@gmail.com</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C47A44]" />
                <span>Pocket-3, DDA Flats, Bindapur, New Delhi, Delhi 110059</span>
              </p>
              <p className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-[#C47A44]" />
                <span>+918920202827</span>
              </p>
            </div>
          </div>

          {/* CENTER: Navigation Links */}
          <div className="md:col-span-4">
            <h3 className="font-serif-display text-lg font-bold text-white tracking-wide mb-4">
              Academy Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-sm">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollLink(e, link.href)}
                    className="text-[#FFF8F0]/75 hover:text-[#C47A44] transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="text-[#FFF8F0]/75 hover:text-[#C47A44] transition-colors duration-150 cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* RIGHT: Social Icons & Community */}
          <div className="md:col-span-3">
            <h3 className="font-serif-display text-lg font-bold text-white tracking-wide mb-4">
              Follow Our Kitchen
            </h3>
            <p className="text-xs sm:text-sm text-[#FFF8F0]/70 leading-relaxed mb-4">
              Daily baking tips, student spotlights, and seasonal patisserie techniques.
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    onClick={(e) => {
                      e.preventDefault();
                      onOpenContact();
                    }}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl bg-white/8 hover:bg-[#C47A44] text-[#FFF8F0] hover:text-white flex items-center justify-center transition-colors duration-150"
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#FFF8F0]/65">
          <p>© 2026 Bakery Academy. All rights reserved. | Designed and Developed by <a  className='text-[#FFF8F0]/90' href="https://topnexmedia.com/" target='_blank'>TopnexMedia</a></p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => onOpenPolicy('privacy')}
              className="hover:text-white transition-colors duration-150 cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => onOpenPolicy('terms')}
              className="hover:text-white transition-colors duration-150 cursor-pointer"
            >
              Terms &amp; Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
