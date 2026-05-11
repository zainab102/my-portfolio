'use client';

import { BLOGS_PREVIEW_BUTTERFLIES } from '@/lib/decorPresets';

export default function BlogsPreviewFloatDecor() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {BLOGS_PREVIEW_BUTTERFLIES.map((style, i) => (
        <div
          key={`blogs-butterfly-${i}`}
          className="absolute animate-float opacity-30"
          style={style}
        >
          <div className="text-lg animate-wing-flutter filter drop-shadow-sm">🦋</div>
        </div>
      ))}
    </div>
  );
}
