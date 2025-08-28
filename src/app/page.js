'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Certifications from '@/components/Certifications';
import Leadership from '@/components/Leadership';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function BlogsPreview({ limit = 3 }) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchBlogs() {
      setLoading(true);
      try {
        const res = await fetch(`/api/blogs?limit=${limit}`);
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        console.error('Failed to load blogs:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, [limit]);

  if (loading) return <p>Loading blogs...</p>;
  if (!loading && blogs.length === 0) return <p>No blogs found.</p>;

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {blogs.slice(0, limit).map((blog, i) => (
        <div
          key={blog._id || i}
          className="p-6 bg-white/10 rounded-lg hover:bg-white/20 transition"
        >
          <h3 className="text-xl font-semibold">{blog.title}</h3>
          <p className="mt-2">{blog.summary || blog.excerpt}</p>
          <Link
            href={`/blogs/${blog.slug}`}
            className="text-[var(--color-accent)] mt-2 inline-block"
          >
            Read More →
          </Link>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="scroll-smooth bg-[var(--color-bg)] text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="bg-hero min-h-screen flex items-center justify-center">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="bg-about py-24 px-6 md:px-12">
        <About />
        <div className="text-center mt-6">
          <Link href="/about" className="text-[var(--color-accent)] font-semibold hover:underline">
            Learn More →
          </Link>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-white/5 py-24 px-6 md:px-12">
        <Experience />
        <div className="text-center mt-6">
          <Link href="/experience" className="text-[var(--color-accent)] font-semibold hover:underline">
            View Experience →
          </Link>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="bg-white/5 py-24 px-6 md:px-12">
        <Certifications />
        <div className="text-center mt-6">
          <Link href="/certifications" className="text-[var(--color-accent)] font-semibold hover:underline">
            View Certifications →
          </Link>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="bg-white/5 py-24 px-6 md:px-12">
        <Leadership />
        <div className="text-center mt-6">
          <Link href="/leadership" className="text-[var(--color-accent)] font-semibold hover:underline">
            View Leadership →
          </Link>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-projects py-24 px-6 md:px-12">
        <Projects />
        <div className="text-center mt-6">
          <Link href="/projects" className="text-[var(--color-accent)] font-semibold hover:underline">
            View Projects →
          </Link>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-skills py-24 px-6 md:px-12">
        <Skills />
        <div className="text-center mt-6">
          <Link href="/skills" className="text-[var(--color-accent)] font-semibold hover:underline">
            View Skills →
          </Link>
        </div>
      </section>

      {/* Blogs Section */} 
      <section id="blogs" className="bg-blogs py-24 px-6 md:px-12">
        <h2 className="text-4xl font-bold mb-8 text-[var(--color-primary)]">Blogs</h2>
        <BlogsPreview limit={3} />
        <div className="text-center mt-6">
          <Link href="/blogs" className="text-[var(--color-accent)] font-semibold hover:underline">
            View More →
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-contact py-24 px-6 md:px-12">
        <Contact />
        <div className="text-center mt-6">
          <Link href="/contact" className="text-[var(--color-accent)] font-semibold hover:underline">
            Contact Me →
          </Link>
        </div>
      </section>

      {/* Footer */}
      {/* <Footer /> */}
    </main>
  );
}
