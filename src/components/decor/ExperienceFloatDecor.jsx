'use client';

import { EXPERIENCE_SECTION_BUTTERFLIES } from '@/lib/decorPresets';

export default function ExperienceFloatDecor() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {EXPERIENCE_SECTION_BUTTERFLIES.map((style, i) => (
        <div
          key={`experience-butterfly-${i}`}
          className="absolute animate-float opacity-25"
          style={style}
        >
          <div className="text-lg animate-wing-flutter filter drop-shadow-sm">🦋</div>
        </div>
      ))}
    </div>
  );
}
