import React, { useState } from 'react';
import { Croissant } from 'lucide-react';

// Generated high-resolution bakery photography stored in src/assets/images/
// Replace any of these imports with your own local image files in src/assets/images/
import heroBakingImg from './hero_professional_baking_1790594892654.jpg';
import spongeCakeImg from './bakery_sponge_cake_1790594909041.jpg';
import goldenCroissantsImg from './bakery_golden_croissants_1790594921610.jpg';
import artisanBreadImg from './bakery_artisan_bread_1790594938211.jpg';
import cakeDecorationImg from './bakery_cake_decoration_1790594950596.jpg';
import cookiesMacaronsImg from './bakery_cookies_macarons_1790594962267.jpg';
import instructorSarahImg from './instructor_chef_sarah_1790594976861.jpg';

export const COURSE_IMAGES = {
  hero: heroBakingImg,
  cakeMaking: spongeCakeImg,
  pastries: goldenCroissantsImg,
  artisanBread: artisanBreadImg,
  cakeDecoration: cakeDecorationImg,
  cookiesDesserts: cookiesMacaronsImg,
  instructor: instructorSarahImg,
  benefitsShowcase: cakeDecorationImg,
  finalCtaBg: heroBakingImg,
  gallery: {
    chocolateCake: heroBakingImg,
    croissants: goldenCroissantsImg,
    bread: artisanBreadImg,
    cupcakes: cakeDecorationImg,
    macarons: cookiesMacaronsImg,
    spongeCake: spongeCakeImg,
  },
};

/**
 * ResilientImage enforces referrerPolicy="no-referrer", descriptive alt text,
 * and a styled warm patisserie fallback if an image ever fails to load.
 */
export function ResilientImage({
  src,
  alt,
  className = '',
  loading = 'lazy',
  fallbackLabel = 'Bakery Academy',
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#3B2118] via-[#523024] to-[#8B5E3C] text-[#FFF8F0] p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <Croissant className="w-10 h-10 text-[#C47A44] mb-2 opacity-90" />
        <span className="font-serif-display text-lg font-semibold tracking-wide">
          {fallbackLabel}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
