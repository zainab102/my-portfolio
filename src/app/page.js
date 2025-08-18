// src/app/page.js
'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Certifications from '@/components/Certifications';
import Leadership from '@/components/Leadership';
import BlogsPreview from '@/components/BlogsPreview';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="scroll-smooth bg-[var(--color-bg)] text-white">
      {/* Header / Navbar */}
      <Navbar />

      {/* Hero / Home Section */}
      <section
        id="hero"
        className="bg-hero min-h-screen flex items-center justify-center"
        tabIndex={-1}
      >
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="bg-about py-24 px-6 md:px-12">
        <About />
        <div className="text-center mt-6">
          <a href="/about" className="text-[var(--color-accent)] font-semibold hover:underline">
            View More &rarr;
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-projects py-24 px-6 md:px-12">
        <Projects />
        <div className="text-center mt-6">
          <a href="/projects" className="text-[var(--color-accent)] font-semibold hover:underline">
            View More &rarr;
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-skills py-24 px-6 md:px-12">
        <Skills />
        <div className="text-center mt-6">
          <a href="/skills" className="text-[var(--color-accent)] font-semibold hover:underline">
            View More &rarr;
          </a>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-white/5 py-24 px-6 md:px-12">
        <Experience />
        <div className="text-center mt-6">
          <a href="/experience" className="text-[var(--color-accent)] font-semibold hover:underline">
            View More &rarr;
          </a>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="bg-white/5 py-24 px-6 md:px-12">
        <Certifications />
        <div className="text-center mt-6">
          <a href="/certifications" className="text-[var(--color-accent)] font-semibold hover:underline">
            View More &rarr;
          </a>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="bg-white/5 py-24 px-6 md:px-12">
        <Leadership />
        <div className="text-center mt-6">
          <a href="/leadership" className="text-[var(--color-accent)] font-semibold hover:underline">
            View More &rarr;
          </a>
        </div>
      </section>

      {/* Blogs Section */}
      <section id="blogs" className="bg-blogs py-24 px-6 md:px-12">
        <BlogsPreview limit={3} />
        <div className="text-center mt-6">
          <a href="/blogs" className="text-[var(--color-accent)] font-semibold hover:underline">
            View More &rarr;
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-contact py-24 px-6 md:px-12">
        <Contact />
        <div className="text-center mt-6">
          <a href="/contact" className="text-[var(--color-accent)] font-semibold hover:underline">
            Contact Me &rarr;
          </a>
        </div>
      </section>
      
    </main>
  );
}
