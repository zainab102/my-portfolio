'use client';

import { SKILLS_SECTION_BUTTERFLIES } from '@/lib/decorPresets';

export default function SkillsFloatDecor() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {SKILLS_SECTION_BUTTERFLIES.map((style, i) => (
        <div
          key={`skills-butterfly-${i}`}
          className="absolute animate-float opacity-25"
          style={style}
        >
          <div className="text-lg animate-wing-flutter filter drop-shadow-sm">🦋</div>
        </div>
      ))}
    </div>
  );
}
