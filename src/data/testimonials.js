// Custom SVG portrait data URLs ensure crisp, warm editorial student portraits with zero external dependency failures
const createAvatarSvg = (initials, bgHex, accentHex) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
      <rect width="120" height="120" rx="60" fill="${bgHex}" />
      <circle cx="60" cy="46" r="22" fill="${accentHex}" fill-opacity="0.25" />
      <path d="M24 108 C24 84 96 84 96 108" fill="${accentHex}" fill-opacity="0.25" />
      <text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" fill="#FFF8F0" font-family="Georgia, serif" font-size="34" font-weight="600" letter-spacing="1">${initials}</text>
    </svg>
  `)}`;

export const TESTIMONIALS_DATA = [
  {
    id: 'testimonial-priya',
    name: 'Priya S.',
    role: 'Home Baker & Custom Cake Studio Founder · Mumbai',
    outcome: 'Baked 40+ celebration cakes in her first 3 months',
    rating: 5,
    quote:
      'This course completely changed the way I bake. The lessons are very easy to follow and the recipes are amazing.',
    favoriteModule: 'Module 02 · Cakes & Sponges',
    avatar: createAvatarSvg('PS', '#3B2118', '#C47A44'),
  },
  {
    id: 'testimonial-neha',
    name: 'Neha M.',
    role: 'Boutique Order Baker · Bengaluru',
    outcome: 'Launched weekend custom cake orders from home',
    rating: 5,
    quote:
      'I started from zero and now I confidently take custom cake orders. The step-by-step teaching made everything easier.',
    favoriteModule: 'Module 03 · Frosting & Cake Decoration',
    avatar: createAvatarSvg('NM', '#8B5E3C', '#FFF8F0'),
  },
  {
    id: 'testimonial-rahul',
    name: 'Rahul K.',
    role: 'Artisan Bread & Pastry Enthusiast · Delhi NCR',
    outcome: 'Mastered laminated croissants & sourdough fermentation',
    rating: 5,
    quote:
      'Excellent explanations, beautiful recipes and very practical lessons. I would definitely recommend this course to anyone who loves baking.',
    favoriteModule: 'Module 04 · Breads & Pastries',
    avatar: createAvatarSvg('RK', '#523024', '#C47A44'),
  },
  {
    id: 'testimonial-ananya',
    name: 'Ananya V.',
    role: 'Weekend Patisserie Creator · Pune',
    outcome: 'Consistent French macarons on her very first batch',
    rating: 5,
    quote:
      'Chef Sarah explains the why behind every step. Once I understood oven temperatures and meringue stages, my macarons came out with perfect feet every time.',
    favoriteModule: 'Module 05 · Cookies & Desserts',
    avatar: createAvatarSvg('AV', '#3B2118', '#8B5E3C'),
  },
];
