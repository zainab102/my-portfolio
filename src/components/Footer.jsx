// src/components/Footer.jsx
'use client';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-contact-bg)] text-white py-10 px-6 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-[var(--color-accent)]">Zainab.dev</h2>
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/zainab102"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center space-x-2 hover:text-[var(--color-accent)] transition transform hover:scale-110"
          >
            <FaGithub size={28} />
            <span className="hidden sm:inline">GitHub</span>
          </a>

          <a
            href="https://linkedin.com/in/zainab-22243b366"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center space-x-2 hover:text-[var(--color-accent)] transition transform hover:scale-110"
          >
            <FaLinkedin size={28} />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>

          <a
            href="mailto:zainab@example.com"
            aria-label="Email"
            className="flex items-center space-x-2 hover:text-[var(--color-accent)] transition transform hover:scale-110"
          >
            <FaEnvelope size={28} />
            <span className="hidden sm:inline">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
