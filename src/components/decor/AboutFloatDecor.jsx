'use client';

import { ABOUT_SECTION_BUTTERFLIES } from '@/lib/decorPresets';

export default function AboutFloatDecor() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {ABOUT_SECTION_BUTTERFLIES.map((style, i) => (
        <div
          key={`about-butterfly-${i}`}
          className="absolute animate-float opacity-30"
          style={style}
        >
          <div className="text-lg animate-wing-flutter filter drop-shadow-sm">🦋</div>
        </div>
      ))}
    </div>
  );
}
