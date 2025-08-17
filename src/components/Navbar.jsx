'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // for App Router
import { FaBars, FaTimes } from 'react-icons/fa';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'blogs', label: 'Blogs' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);

      const scrollPos = window.scrollY + 100;
      let current = 'hero';
      for (const item of NAV_ITEMS) {
        if (item.id === 'blogs') continue; // blogs is a separate page
        const section = document.getElementById(item.id);
        if (section && section.offsetTop <= scrollPos) {
          current = item.id;
        }
      }
      setActive(current);
    }

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // If user is on /blogs page, highlight Blogs
  useEffect(() => {
    if (pathname === '/blogs') {
      setActive('blogs');
    }
  }, [pathname]);

  function handleClick(e, id) {
    e.preventDefault();
    setMenuOpen(false);

    if (id === 'blogs') {
      window.location.href = '/blogs';
      return;
    }

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActive(id);
    } else {
      window.location.href = `/#${id}`;
    }
  }

  const renderLink = (id, label) => {
    const isActive = active === id;
    return id === 'blogs' ? (
      <Link
        href="/blogs"
        className={`px-3 py-2 rounded-md transition-colors duration-200 ${
          isActive
            ? 'text-[var(--color-primary)] font-semibold'
            : 'text-[var(--color-secondary)] hover:text-[var(--color-primary)]'
        }`}
      >
        {label}
      </Link>
    ) : (
      <a
        href={`#${id}`}
        onClick={(e) => handleClick(e, id)}
        aria-current={isActive ? 'page' : undefined}
        className={`relative px-3 py-2 rounded-md transition-colors duration-200 ${
          isActive
            ? 'text-[var(--color-primary)] font-semibold'
            : 'text-[var(--color-secondary)] hover:text-[var(--color-primary)]'
        }`}
      >
        {label}
        {isActive && id !== 'blogs' && (
          <span
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-primary)] rounded"
            aria-hidden="true"
          />
        )}
      </a>
    );
  };

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-[var(--color-bg)] shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between py-4 px-6 md:px-12">
        {/* Logo */}
        <a
          href="#hero"
          className="text-[var(--color-primary)] font-bold text-xl"
          onClick={(e) => handleClick(e, 'hero')}
        >
          Zainab
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {NAV_ITEMS.map(({ id, label }) => (
            <li key={id}>{renderLink(id, label)}</li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[var(--color-primary)] text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--color-bg)] px-6 py-6 shadow-lg">
          <ul className="flex flex-col space-y-4 font-medium">
            {NAV_ITEMS.map(({ id, label }) => (
              <li key={id}>{renderLink(id, label)}</li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
