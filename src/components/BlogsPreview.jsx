'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function BlogsPreview({ limit = 3 }) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch(`/api/blogs?page=1&limit=${limit}`);
        const data = await res.json();
        setBlogs(Array.isArray(data.blogs) ? data.blogs : []);
      } catch (err) {
        console.error('Failed to fetch blogs:', err);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, [limit]);

  return (
    <section id="blogs" className="bg-blogs py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-[var(--color-primary)]">
          Blogs
        </h2>

        {loading && <p>Loading blogs...</p>}
        {!loading && blogs.length === 0 && <p>No blogs found.</p>}

        <ul className="space-y-8">
          {blogs.map((blog) => (
            <li key={blog._id} className="border-b border-gray-600 pb-6 flex gap-4">
              {blog.image && (
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-32 h-20 object-cover rounded"
                />
              )}
              <div>
                <Link href={`/blogs/${blog.slug}`}>
                  <h3 className="text-2xl font-semibold mb-2 text-[var(--color-accent)] hover:underline">
                    {blog.title}
                  </h3>
                </Link>
                <p className="text-gray-300">{blog.summary}</p>
                <small className="text-gray-500">
                  {blog.createdAt && new Date(blog.createdAt).toLocaleDateString()}
                </small>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <Link
            href="/blogs"
            className="px-4 py-2 bg-[var(--color-primary)] text-black rounded-md"
          >
            View All Blogs
          </Link>
        </div>
      </div>
    </section>
  );
}
