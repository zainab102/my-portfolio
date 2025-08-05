'use client';

import { useState, useEffect } from 'react';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        setScrolled(window.scrollY > 20);

        const scrollPos = window.scrollY + 100;
        let current = 'hero';
        for (const item of navItems) {
          const section = document.getElementById(item.id);
          if (section && section.offsetTop <= scrollPos) {
            current = item.id;
          }
        }
        setActive(current);
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initialize on mount

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      aria-label="Primary Navigation"
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-[var(--color-contact-bg)] shadow-lg' : 'bg-transparent'
      }`}
    >
      <ul className="max-w-7xl mx-auto flex justify-center space-x-8 p-4 font-semibold text-white cursor-pointer">
        {navItems.map(({ id, label }) => (
          <li key={id} tabIndex={-1}>
            <a
              href={`#${id}`}
              aria-current={active === id ? 'page' : undefined}
              className={`hover:text-[var(--color-accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 rounded ${
                active === id ? 'text-[var(--color-accent)] underline underline-offset-4' : ''
              }`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                setActive(id);
              }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
