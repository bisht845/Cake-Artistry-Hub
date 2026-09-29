import React, { useState } from 'react';
import { X, Award } from 'lucide-react';
import { STUDENT_GALLERY_ITEMS } from '../data/courseData.js';
import { ResilientImage } from '../assets/images/index.jsx';
import { useScrollReveal } from '../hooks/useScrollReveal.js';

const CATEGORIES = ['All Creations', 'Cakes', 'Pastries', 'Bread', 'Cookies'];

export default function StudentGallery() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.08 });
  const [selectedCategory, setSelectedCategory] = useState('All Creations');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems =
    selectedCategory === 'All Creations'
      ? STUDENT_GALLERY_ITEMS
      : STUDENT_GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 bg-[#FFF8F0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading & Filter Bar */}
        <div
          className={`flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div>
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#8B5E3C] uppercase mb-3">
              Verified Student Outcomes
            </p>
            <h2
              style={{ textWrap: 'balance' }}
              className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3B2118] tracking-tight mb-3"
            >
              SEE WHAT OUR STUDENTS CREATE
            </h2>
            <p className="text-base sm:text-lg text-[#241510]/75 leading-relaxed">
              From first attempts to beautiful bakery-quality creations.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div
            role="tablist"
            aria-label="Filter student creations by category"
            className="
              flex items-center gap-1.5
              p-1.5
              bg-[#F7EFE4]
              border border-[#3B2118]/10
              rounded-xl
              max-w-full
              overflow-x-auto
              lg:overflow-x-visible
              scrollbar-hide
            "
          >
              {CATEGORIES.map((category) => {
                const isActive = selectedCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C47A44] ${
                      isActive
                        ? 'bg-[#3B2118] text-white shadow-xs'
                        : 'text-[#241510]/75 hover:text-[#3B2118] hover:bg-white/60'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
          </div>
        </div>

        {/* Responsive Asymmetric / Masonry-Style Grid (2 columns on mobile where practical, 3 columns on desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {filteredItems.map((item, idx) => {
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedItem(item)}
                style={{ transitionDelay: `${idx * 70}ms` }}
                className={`group relative col-span-1 rounded-2xl overflow-hidden bg-[#3B2118] border border-[#3B2118]/10 shadow-xs hover:shadow-xl text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C47A44] transition-all duration-500 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                }`}
              >
                {/* Image */}
                <div className="w-full aspect-[4/3] overflow-hidden">
                  <ResilientImage
                    src={item.image}
                    alt={`${item.title} — ${item.student}`}
                    loading="lazy"
                    fallbackLabel={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Overlay */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#241510]/90 via-[#241510]/30 to-transparent opacity-75 group-hover:opacity-95 transition-opacity duration-200"
                />

                {/* Caption */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 flex flex-col justify-end text-[#FFF8F0]">
                  <p className="text-[11px] sm:text-xs text-[#C47A44] font-semibold tracking-wide mb-1">
                    {item.moduleRef}
                  </p>

                  <h3 className="font-serif-display text-lg sm:text-2xl font-bold text-white leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#FFF8F0]/85 mt-0.5">
                    {item.student} · {item.location}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox Detail Modal for Selected Student Creation */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="gallery-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#241510]/75 backdrop-blur-xs"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-[#FFF8F0] rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl border border-[#3B2118]/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] bg-[#3B2118]">
              <ResilientImage
                src={selectedItem.image}
                alt={selectedItem.title}
                loading="eager"
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                aria-label="Close student creation preview"
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#241510]/80 text-white hover:bg-[#241510] flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 sm:p-7">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#8B5E3C] mb-2">
                <Award className="w-4 h-4 text-[#C47A44]" />
                <span>{selectedItem.moduleRef}</span>
              </div>
              <h3
                id="gallery-modal-title"
                className="font-serif-display text-2xl sm:text-3xl font-bold text-[#3B2118] mb-1"
              >
                {selectedItem.title}
              </h3>
              <p className="text-sm font-medium text-[#8B5E3C] mb-4">
                {selectedItem.student} · {selectedItem.location}
              </p>
              <p className="text-sm sm:text-base text-[#241510]/80 leading-relaxed">
                {selectedItem.note}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
