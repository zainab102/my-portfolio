/**
 * Generates src/lib/decorPresets.js — literal floating-decor styles (no runtime RNG).
 * Run: node scripts/generate-decor-presets.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function stable01(seed) {
  let h = Math.imul(seed >>> 0, 0x9e3779b1);
  h ^= h >>> 16;
  h = Math.imul(h, 0x85ebca6b);
  h ^= h >>> 13;
  return (h >>> 0) / 4294967296;
}

function stableRange(seed, min, max) {
  const v = min + stable01(seed) * (max - min);
  return Math.round(v * 10000) / 10000;
}

function row(leftSeed, topSeed, durSeed, i, delayFn, durMin, durMax) {
  return {
    left: `${stableRange(leftSeed + i, 0, 100)}%`,
    top: `${stableRange(topSeed + i, 0, 100)}%`,
    animationDelay: delayFn(i),
    animationDuration: `${stableRange(durSeed + i, durMin, durMax)}s`,
  };
}

function heroBirds() {
  return [...Array(6)].map((_, i) => ({
    left: `${-10 + i * 18}%`,
    top: `${stableRange(1000 + i, 15, 85)}%`,
    animationDelay: `${i * 3}s`,
    animationDuration: `${stableRange(2000 + i, 18, 30)}s`,
  }));
}

function heroButterflies() {
  return [...Array(10)].map((_, i) =>
    row(3000, 4000, 5000, i, (j) => `${j * 2}s`, 10, 18)
  );
}

function heroTwinkles() {
  return [...Array(8)].map((_, i) => ({
    left: `${stableRange(6000 + i, 0, 100)}%`,
    top: `${stableRange(7000 + i, 0, 100)}%`,
    animationDelay: `${stableRange(8000 + i, 0, 6)}s`,
    animationDuration: `${stableRange(9000 + i, 4, 8)}s`,
  }));
}

function sectionRows(count, leftBase, topBase, durBase, delayFn, durMin, durMax) {
  return [...Array(count)].map((_, i) =>
    row(leftBase, topBase, durBase, i, delayFn, durMin, durMax)
  );
}

const presets = {
  HERO_BIRD_STYLES: heroBirds(),
  HERO_BUTTERFLY_STYLES: heroButterflies(),
  HERO_TWINKLE_STYLES: heroTwinkles(),
  ABOUT_SECTION_BUTTERFLIES: sectionRows(6, 11000, 12000, 13000, (i) => `${i * 3}s`, 12, 20),
  EXPERIENCE_SECTION_BUTTERFLIES: sectionRows(4, 31000, 32000, 33000, (i) => `${i * 4}s`, 14, 20),
  EXPERIENCE_PAGE_BUTTERFLIES: sectionRows(6, 41000, 42000, 43000, (i) => `${i * 3}s`, 12, 18),
  CERTIFICATIONS_SECTION_BUTTERFLIES: sectionRows(5, 131000, 132000, 133000, (i) => `${i * 3}s`, 15, 23),
  CERTIFICATIONS_PAGE_BUTTERFLIES: sectionRows(7, 111000, 112000, 113000, (i) => `${i * 2}s`, 15, 23),
  LEADERSHIP_SECTION_BUTTERFLIES: sectionRows(5, 121000, 122000, 123000, (i) => `${i * 4}s`, 16, 24),
  PROJECTS_SECTION_BUTTERFLIES: sectionRows(6, 61000, 62000, 63000, (i) => `${i * 3}s`, 12, 20),
  PROJECTS_PAGE_BUTTERFLIES: sectionRows(6, 71000, 72000, 73000, (i) => `${i * 3}s`, 12, 20),
  SKILLS_SECTION_BUTTERFLIES: sectionRows(5, 91000, 92000, 93000, (i) => `${i * 4}s`, 14, 22),
  SKILLS_PAGE_BUTTERFLIES: sectionRows(5, 101000, 102000, 103000, (i) => `${i * 4}s`, 14, 22),
  CONTACT_SECTION_BUTTERFLIES: sectionRows(4, 51000, 52000, 53000, (i) => `${i * 5}s`, 18, 26),
  FOOTER_BUTTERFLIES: [...Array(3)].map((_, i) => ({
    left: `${stableRange(81000 + i * 17, 0, 100)}%`,
    top: `${stableRange(82000 + i * 17, 0, 100)}%`,
    animationDelay: `${i * 6}s`,
    animationDuration: `${stableRange(83000 + i * 17, 20, 30)}s`,
  })),
  BLOGS_PREVIEW_BUTTERFLIES: sectionRows(4, 141000, 142000, 143000, (i) => `${i * 5}s`, 16, 24),
};

const header = `/**\n * Precomputed decorative animation styles (SSR-safe).\n * Regenerate: node scripts/generate-decor-presets.mjs\n */\n\n`;

const body = Object.entries(presets)
  .map(([name, val]) => `export const ${name} = ${JSON.stringify(val, null, 2)};\n`)
  .join('\n');

const outPath = path.join(__dirname, '../src/lib/decorPresets.js');
fs.writeFileSync(outPath, header + body);
console.log('Wrote', outPath);
