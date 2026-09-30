import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "../assets/images/logo.png"
const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Course', href: '#course' },
  { label: 'Curriculum', href: '#curriculum' },
  { label: 'Instructor', href: '#instructor' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar({ onEnrollClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['home', 'course', 'curriculum', 'instructor', 'reviews', 'faq'];
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: '-30% 0px -55% 0px', threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetId);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled || mobileMenuOpen
          ? 'bg-[#FFF8F0]/95 backdrop-blur-md border-b border-[#3B2118]/10 shadow-sm'
          : 'bg-[#FFF8F0]/80 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-20 flex items-center justify-between">
        {/* Zone 1: Single text element Brand Wordmark */}
      <a
        href="#home"
        onClick={(e) => handleNavClick(e, "#home")}
        className="shrink-0 flex items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C47A44]"
      >
        <img
          src={logo}
          alt="Cake Artistry Hub"
          className="w-[250px] lg:w-[200px] h-auto max-h-[80px] object-contain"
        />
      </a>

        {/* Zone 2: Desktop Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-6 lg:gap-8"
        >
          {NAV_LINKS.map((link) => {
            const isCurrent = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative py-1 text-sm font-medium transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C47A44] ${
                  isCurrent
                    ? 'text-[#3B2118] font-semibold'
                    : 'text-[#241510]/75 hover:text-[#3B2118]'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-[#C47A44] transition-transform duration-200 origin-left ${
                    isCurrent ? 'scale-x-100' : 'scale-x-0 hover:scale-x-100'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary CTA Action & Mobile Menu Button */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onEnrollClick}
            className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[#3B2118] hover:bg-[#241510] rounded-xl shadow-sm hover:shadow hover:-translate-y-0.5 transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C47A44]"
          >
            Enroll Now
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl text-[#3B2118] hover:bg-[#3B2118]/5 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[#C47A44]"
          >
            <span className="relative w-6 h-6 flex items-center justify-center">
              <Menu
                className={`w-6 h-6 absolute transition-all duration-200 ${
                  mobileMenuOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
                }`}
              />
              <X
                className={`w-6 h-6 absolute transition-all duration-200 ${
                  mobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Animated Mobile Navigation Drawer */}
      <div
        id="mobile-navigation-drawer"
        className={`md:hidden grid transition-all duration-200 ease-out bg-[#FFF8F0] border-b border-[#3B2118]/10 ${
          mobileMenuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
        }`}
      >
        <div className="overflow-hidden">
          <nav
            aria-label="Mobile Navigation"
            className="px-4 pt-2 pb-6 flex flex-col gap-1"
          >
            {NAV_LINKS.map((link) => {
              const isCurrent = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-colors duration-150 ${
                    isCurrent
                      ? 'bg-[#3B2118]/8 text-[#3B2118] font-semibold'
                      : 'text-[#241510]/80 hover:bg-[#3B2118]/5 hover:text-[#3B2118]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-3 mt-2 border-t border-[#3B2118]/10">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onEnrollClick();
                }}
                className="w-full py-3.5 px-5 text-center text-sm font-semibold text-white bg-[#3B2118] hover:bg-[#241510] rounded-xl shadow-sm transition-all duration-150 whitespace-nowrap"
              >
                Enroll Now
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
