'use client';

import { EXPERIENCE_PAGE_BUTTERFLIES } from '@/lib/decorPresets';

export default function ExperiencePageFloatDecor() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden>
      {EXPERIENCE_PAGE_BUTTERFLIES.map((style, i) => (
        <div
          key={i}
          className="absolute animate-float opacity-25"
          style={style}
        >
          <div className="text-lg animate-wing-flutter drop-shadow-sm">🦋</div>
        </div>
      ))}
    </div>
  );
}
