// src/components/BlogsPreview.jsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function BlogsPreview({ limit = 6 }) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;

    async function fetchBlogs() {
      try {
        const res = await fetch(`/api/blogs?page=1&limit=${limit}`, { cache: 'no-store' });
        if (!res.ok) throw new Error('Failed to load blogs');
        const data = await res.json();
        if (!cancelled) setBlogs(Array.isArray(data.blogs) ? data.blogs : []);
      } catch (e) {
        if (!cancelled) {
          console.error(e);
          setError('Failed to load blogs. Please try again later.');
          setBlogs([]);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchBlogs();
    return () => { cancelled = true; };
  }, [limit]);

  const excerpt = (s, n = 140) => {
    if (!s) return '';
    return s.length > n ? s.slice(0, n) + '…' : s;
  };

  return (
    <section id="blogs" className="py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center text-[var(--color-primary)]">
          Latest Blogs
        </h2>

        {loading && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: Math.min(limit, 6) }).map((_, i) => (
              <div key={i} className="rounded-2xl overflow-hidden bg-white/5 animate-pulse">
                <div className="h-40 bg-white/10" />
                <div className="p-5 space-y-3">
                  <div className="h-6 w-3/4 bg-white/10 rounded" />
                  <div className="h-4 w-full bg-white/10 rounded" />
                  <div className="h-4 w-2/3 bg-white/10 rounded" />
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && error && (
          <p className="text-center text-gray-400">{error}</p>
        )}

        {!loading && !error && blogs.length === 0 && (
          <p className="text-center text-gray-400">No blogs found.</p>
        )}

        {!loading && !error && blogs.length > 0 && (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <li
                key={blog._id}
                className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-[var(--color-accent)] hover:bg-white/10 transition"
              >
                {/* Image */}
                {blog.image ? (
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="h-40 bg-gradient-to-br from-white/10 to-white/5" />
                )}

                {/* Content */}
                <div className="p-5 space-y-3">
                  <Link href={`/blogs/${blog.slug}`} className="block">
                    <h3 className="text-xl font-semibold tracking-tight group-hover:underline">
                      {blog.title}
                    </h3>
                  </Link>

                  <p className="text-sm text-gray-300">
                    {excerpt(blog.summary || blog.content, 140)}
                  </p>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-gray-400">
                      {blog.createdAt ? new Date(blog.createdAt).toLocaleDateString() : ''}
                    </span>
                    <Link
                      href={`/blogs/${blog.slug}`}
                      className="text-sm font-medium text-[var(--color-accent)] hover:opacity-80"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-10 text-center">
          <Link
            href="/blogs"
            className="inline-block px-6 py-3 rounded-xl bg-[var(--color-primary)] text-black font-semibold hover:opacity-90 transition"
          >
            View All Blogs
          </Link>
        </div>
      </div>
    </section>
  );
}
