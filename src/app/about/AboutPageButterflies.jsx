'use client';

/** Fixed positions — never computed at render time (avoids any SSR/client drift). */
const BUTTERFLY_STYLES = [
  { left: '54.3447%', top: '92.06%', animationDelay: '0s', animationDuration: '14.5476s' },
  { left: '75.0411%', top: '46.2577%', animationDelay: '2s', animationDuration: '16.4687s' },
  { left: '92.6163%', top: '70.8236%', animationDelay: '4s', animationDuration: '10.526s' },
  { left: '58.4232%', top: '37.9772%', animationDelay: '6s', animationDuration: '15.6267s' },
  { left: '90.0398%', top: '0.928%', animationDelay: '8s', animationDuration: '15.7246s' },
  { left: '2.2722%', top: '75.5533%', animationDelay: '10s', animationDuration: '13.0154s' },
  { left: '83.0175%', top: '85.5682%', animationDelay: '12s', animationDuration: '17.3416s' },
  { left: '74.5552%', top: '42.0611%', animationDelay: '14s', animationDuration: '13.3975s' },
];

export default function AboutPageButterflies() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden>
      {BUTTERFLY_STYLES.map((style, i) => (
        <div
          key={`about-page-butterfly-${i}`}
          className="absolute animate-float opacity-30"
          style={style}
        >
          <div className="text-lg animate-wing-flutter drop-shadow-sm">🦋</div>
        </div>
      ))}
    </div>
  );
}
