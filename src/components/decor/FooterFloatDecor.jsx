'use client';

import { FOOTER_BUTTERFLIES } from '@/lib/decorPresets';

export default function FooterFloatDecor() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {FOOTER_BUTTERFLIES.map((style, i) => (
        <div
          key={`footer-butterfly-${i}`}
          className="absolute animate-float opacity-20"
          style={style}
        >
          <div className="text-lg animate-wing-flutter filter drop-shadow-sm">🦋</div>
        </div>
      ))}
    </div>
  );
}
