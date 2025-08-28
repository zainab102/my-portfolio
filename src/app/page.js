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
import ThemeToggle from '@/components/ThemeToggle';

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

  if (loading) return <p className="text-center text-gray-500 dark:text-gray-400">Loading blogs...</p>;
  if (!loading && blogs.length === 0) return <p className="text-center text-gray-500 dark:text-gray-400">No blogs found.</p>;

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {blogs.slice(0, limit).map((blog, i) => (
        <div
          key={blog._id || i}
          className="p-6 bg-white/10 dark:bg-gray-800/50 rounded-lg hover:bg-white/20 dark:hover:bg-gray-700/60 transition-colors duration-300"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{blog.title}</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">{blog.summary || blog.excerpt}</p>
          <Link
            href={`/blogs/${blog.slug}`}
            className="text-[var(--color-accent)] mt-2 inline-block font-medium hover:underline"
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
    <main className="scroll-smooth bg-[var(--color-bg)] dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="bg-hero min-h-screen flex items-center justify-center">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 md:px-12">
        <About />
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 md:px-12">
        <Experience />
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 px-6 md:px-12">
        <Certifications />
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-24 px-6 md:px-12">
        <Leadership />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 md:px-12">
        <Projects />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 md:px-12">
        <Skills />
      </section>

      {/* Blogs Section */}
      <section id="blogs" className="py-24 px-6 md:px-12">
        <h2 className="text-4xl font-bold mb-8 text-[var(--color-primary)] dark:text-white text-center">Blogs</h2>
        <BlogsPreview limit={3} />
        <div className="text-center mt-6">
          <Link href="/blogs" className="text-[var(--color-accent)] font-semibold hover:underline">
            View More →
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 md:px-12">
        <Contact />
        <div className="text-center mt-6">
          <Link href="/contact" className="text-[var(--color-accent)] font-semibold hover:underline">
            Contact Me →
          </Link>
        </div>
      </section>

      {/* Footer Placeholder */}
      {/* <Footer /> */}
    </main>
  );
}
