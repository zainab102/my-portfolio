// src/app/blogs/page.jsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const PAGE_SIZE = 9;

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  useEffect(() => {
    let cancelled = false;

    async function fetchBlogs() {
      setLoading(true);
      setError('');
      try {
        const res = await fetch(`/api/blogs?page=${page}&limit=${PAGE_SIZE}`, { cache: 'no-store' });
        if (!res.ok) throw new Error('Failed to fetch blogs');
        const data = await res.json();
        if (!cancelled) {
          setBlogs(Array.isArray(data.blogs) ? data.blogs : []);
          setTotal(Number(data.total) || 0);
        }
      } catch (e) {
        if (!cancelled) {
          console.error(e);
          setError('Failed to load blogs. Please try again later.');
          setBlogs([]);
          setTotal(0);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchBlogs();
    return () => { cancelled = true; };
  }, [page]);

  const excerpt = (s, n = 160) => {
    if (!s) return '';
    return s.length > n ? s.slice(0, n) + '…' : s;
  };

  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-white py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-[var(--color-primary)] mb-4">
          All Blogs
        </h1>
        <p className="text-center text-gray-300 mb-12">
          Explore articles on productivity, learning, tech, and more.
        </p>

        {loading && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: PAGE_SIZE }).map((_, i) => (
              <div key={i} className="rounded-2xl overflow-hidden bg-white/5 animate-pulse">
                <div className="h-44 bg-white/10" />
                <div className="p-5 space-y-3">
                  <div className="h-6 w-3/4 bg-white/10 rounded" />
                  <div className="h-4 w-full bg-white/10 rounded" />
                  <div className="h-4 w-2/3 bg-white/10 rounded" />
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && error && <p className="text-center text-gray-400">{error}</p>}
        {!loading && !error && blogs.length === 0 && (
          <p className="text-center text-gray-400">No blogs yet.</p>
        )}

        {!loading && !error && blogs.length > 0 && (
          <>
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {blogs.map((blog) => (
                <li
                  key={blog._id}
                  className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-[var(--color-accent)] hover:bg-white/10 transition"
                >
                  {/* Image */}
                  {blog.image ? (
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="h-44 bg-gradient-to-br from-white/10 to-white/5" />
                  )}

                  {/* Content */}
                  <div className="p-5 space-y-3">
                    <Link href={`/blogs/${blog.slug}`} className="block">
                      <h3 className="text-xl font-semibold tracking-tight group-hover:underline">
                        {blog.title}
                      </h3>
                    </Link>

                    <p className="text-sm text-gray-300">
                      {excerpt(blog.summary || blog.content, 160)}
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

            {/* Pagination */}
            <div className="mt-10 flex items-center justify-center gap-3">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-4 py-2 rounded-lg bg-white/10 disabled:opacity-40"
              >
                ← Prev
              </button>
              <span className="text-sm text-gray-300">
                Page {page} of {totalPages}
              </span>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page >= totalPages}
                className="px-4 py-2 rounded-lg bg-white/10 disabled:opacity-40"
              >
                Next →
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
