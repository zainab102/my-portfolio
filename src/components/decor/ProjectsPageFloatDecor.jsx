'use client';

import { PROJECTS_PAGE_BUTTERFLIES } from '@/lib/decorPresets';

export default function ProjectsPageFloatDecor() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {PROJECTS_PAGE_BUTTERFLIES.map((style, i) => (
        <div
          key={`butterfly-${i}`}
          className="absolute animate-float opacity-25"
          style={style}
        >
          <div className="text-lg animate-wing-flutter filter drop-shadow-sm">🦋</div>
        </div>
      ))}
    </div>
  );
}
