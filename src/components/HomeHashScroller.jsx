'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * App Router client navigations to `/#section` do not scroll automatically.
 * Scroll the matching element into view when we're on `/` and the URL has a hash.
 */
export default function HomeHashScroller() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== '/') return undefined;

    const scrollToHash = () => {
      const raw = typeof window !== 'undefined' ? window.location.hash : '';
      if (!raw || raw.length < 2) return;
      const id = decodeURIComponent(raw.slice(1));
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    };

    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);
    return () => window.removeEventListener('hashchange', scrollToHash);
  }, [pathname]);

  return null;
}
