"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch("/api/blogs");
        if (!res.ok) throw new Error("Failed to fetch blogs");
        const data = await res.json();

        // Ensure it's an array
        if (!Array.isArray(data)) throw new Error("Invalid data format");
        setBlogs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  if (loading) return <p>Loading blogs...</p>;
  if (error) return <p>{error}</p>;
  if (blogs.length === 0) return <p>No blogs found.</p>;

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">All Blogs</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {blogs.map((blog, i) => (
          <div
            key={blog._id || i}
            className="p-6 bg-white/10 rounded-lg hover:bg-white/20 transition"
          >
            <h3 className="text-xl font-semibold">{blog.title}</h3>
            <p className="mt-2">{blog.summary || blog.excerpt || ""}</p>
            <Link
              href={`/blogs/${blog.slug}`}
              className="text-[var(--color-accent)] mt-2 inline-block"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
