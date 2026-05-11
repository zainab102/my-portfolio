'use client';

import Link from 'next/link';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Certifications from '@/components/Certifications';
import Leadership from '@/components/Leadership';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import BlogsPreview from '@/components/BlogsPreview';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  return (
    <div className="scroll-smooth bg-[var(--color-bg)] dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
      <ThemeToggle />

      <section className="bg-hero min-h-screen flex items-center justify-center">
        <Hero />
      </section>

      <section className="py-24 px-6 md:px-12">
        <About />
      </section>

      <section className="py-24 px-6 md:px-12">
        <Experience />
      </section>

      <section className="py-24 px-6 md:px-12">
        <Certifications />
      </section>

      <section className="py-24 px-6 md:px-12">
        <Leadership />
      </section>

      <section className="py-24 px-6 md:px-12">
        <Projects />
      </section>

      <section className="py-24 px-6 md:px-12">
        <Skills />
      </section>

      <section className="py-24 px-6 md:px-12">
        <h2 className="text-4xl font-bold mb-8 text-[var(--color-primary)] dark:text-white text-center">Blogs</h2>
        <BlogsPreview limit={3} />
        <div className="text-center mt-6">
          <Link href="/blogs" className="text-[var(--color-accent)] font-semibold hover:underline">
            View More →
          </Link>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12">
        <Contact />
        <div className="text-center mt-6">
          <Link href="/contact" className="text-[var(--color-accent)] font-semibold hover:underline">
            Contact Me →
          </Link>
        </div>
      </section>
    </div>
  );
}
