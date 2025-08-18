'use client';

import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import BlogsPreview from '@/components/BlogsPreview';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="scroll-smooth">
      {/* Hero Section */}
      <section id="hero" className="bg-hero min-h-screen flex items-center justify-center">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="bg-about py-24 px-6 md:px-12">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-projects py-24 px-6 md:px-12">
        <Projects />
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-skills py-24 px-6 md:px-12">
        <Skills />
      </section>

      {/* Blogs Preview Section */}
      <BlogsPreview limit={3} />

      {/* Contact Section */}
      <section id="contact" className="bg-contact py-24 px-6 md:px-12">
        <Contact />
      </section>

      {/* Footer */}
      <footer className="bg-footer py-6 text-center text-sm text-gray-300 select-none">
        <Footer />
        <p className="mt-4 opacity-70">© {new Date().getFullYear()} Zainab Tariq. All rights reserved.</p>
      </footer>
    </main>
  );
}
