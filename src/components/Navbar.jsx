'use client';

import { useState, useEffect } from 'react';

const navItems = [
  { id: 'hero', label: 'Zainab', color: 'text-yellow-400' },
  { id: 'about', label: 'About', color: 'text-pink-400' },
  { id: 'projects', label: 'Projects', color: 'text-green-400' },
  { id: 'skills', label: 'Skills', color: 'text-blue-400' },
  { id: 'contact', label: 'Contact', color: 'text-orange-400' },
];

export default function Navbar() {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      let current = 'hero';
      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section && section.offsetTop <= scrollPos) {
          current = item.id;
        }
      }
      setActive(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 w-full z-50 shadow-lg bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Branding */}
        <a
          href="#hero"
          className="text-2xl font-bold text-yellow-400 drop-shadow-md hover:opacity-90 transition"
        >
          Zainab’s Portfolio
        </a>

        {/* Navigation */}
        <ul className="flex space-x-8 font-semibold text-lg">
          {navItems.map(({ id, label, color }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? 'page' : undefined}
                className={`${color} px-3 py-2 rounded-lg transition-all duration-300 ${
                  active === id
                    ? 'bg-white/20 shadow-md'
                    : 'hover:bg-white/10'
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
      </div>
    </nav>
  );
}
