'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';

/** Section ids present on the home page (used for scroll-spy). */
const HOME_SCROLL_IDS = [
  'hero',
  'about',
  'experience',
  'certifications',
  'leadership',
  'projects',
  'skills',
  'contact',
];

const NAV_ITEMS = [
  { id: 'hero', label: 'Home', href: '/' },
  { id: 'about', label: 'About', href: '/#about' },
  { id: 'experience', label: 'Experience', href: '/#experience' },
  { id: 'certifications', label: 'Certifications', href: '/#certifications' },
  { id: 'leadership', label: 'Leadership', href: '/#leadership' },
  { id: 'projects', label: 'Projects', href: '/#projects' },
  { id: 'documents', label: 'Documents', href: '/documents' },
  { id: 'skills', label: 'Skills', href: '/#skills' },
  { id: 'blogs', label: 'Blogs', href: '/blogs' },
  { id: 'contact', label: 'Contact', href: '/#contact' },
];

function navIdForPathname(pathname) {
  if (pathname.startsWith('/blogs')) return 'blogs';
  const map = {
    '/about': 'about',
    '/experience': 'experience',
    '/certifications': 'certifications',
    '/leadership': 'leadership',
    '/projects': 'projects',
    '/skills': 'skills',
    '/contact': 'contact',
    '/documents': 'documents',
  };
  return map[pathname] ?? null;
}

export default function Navbar() {
  const [scrollSection, setScrollSection] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  const routePinned = pathname !== '/' ? navIdForPathname(pathname) : null;
  const active = routePinned ?? scrollSection;

  useEffect(() => {
    if (pathname !== '/') return undefined;

    function onScroll() {
      setScrolled(window.scrollY > 10);
      const scrollPos = window.scrollY + 100;
      let current = 'hero';
      HOME_SCROLL_IDS.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPos) {
          current = id;
        }
      });
      setScrollSection(current);
    }

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  const linkScroll = (href) => !href.includes('#');

  const baseLinkClass = `relative px-3 py-2 rounded-md transition-colors duration-200`;

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-colors duration-300
        ${scrolled ? 'bg-[var(--color-bg)] shadow-md dark:bg-gray-900' : 'bg-transparent'}
      `}
    >
      <div className="container flex items-center justify-between py-4 px-6 md:px-12">
        <Link
          href="/"
          className="text-[var(--color-primary)] dark:text-amber-400 font-bold text-xl"
          onClick={() => setMenuOpen(false)}
        >
          Zainab
        </Link>

        <ul className="hidden md:flex items-center space-x-6 font-medium">
          {NAV_ITEMS.map(({ id, label, href }) => {
            const isActive = active === id;
            return (
              <li key={id}>
                <Link
                  href={href}
                  scroll={linkScroll(href)}
                  onClick={() => setMenuOpen(false)}
                  className={`${baseLinkClass}
                    ${isActive
                      ? 'text-[var(--color-primary)] font-semibold dark:text-amber-400'
                      : 'text-[var(--color-secondary)] hover:text-[var(--color-primary)] dark:text-gray-300 dark:hover:text-amber-400'
                    }`}
                >
                  {label}
                  {isActive ? (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-primary)] dark:bg-amber-400 rounded"
                      aria-hidden="true"
                    />
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          className="md:hidden text-[var(--color-primary)] dark:text-amber-400 text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen ? (
        <div className="md:hidden bg-[var(--color-bg)] dark:bg-gray-900 px-6 py-6 shadow-lg border-t border-gray-200 dark:border-gray-700">
          <ul className="flex flex-col space-y-4 font-medium">
            {NAV_ITEMS.map(({ id, label, href }) => {
              const isActive = active === id;
              return (
                <li key={id}>
                  <Link
                    href={href}
                    scroll={linkScroll(href)}
                    onClick={() => setMenuOpen(false)}
                    className={`${baseLinkClass} block
                      ${isActive
                        ? 'text-[var(--color-primary)] font-semibold dark:text-amber-400'
                        : 'text-[var(--color-secondary)] hover:text-[var(--color-primary)] dark:text-gray-300 dark:hover:text-amber-400'
                      }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </nav>
  );
}
