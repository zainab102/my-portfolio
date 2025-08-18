"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const PAGE_SIZE = 5;

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalBlogs, setTotalBlogs] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchBlogs() {
      setLoading(true);
      try {
        const res = await fetch(`/api/blogs?page=${page}&limit=${PAGE_SIZE}`);
        const data = await res.json();
        setBlogs(data.blogs);
        setTotalBlogs(data.total);
      } catch (err) {
        console.error("Failed to load blogs:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, [page]);

  const totalPages = Math.ceil(totalBlogs / PAGE_SIZE);

  return (
    <section className="bg-[var(--color-projects-bg)] text-white py-20 px-6 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-[var(--color-primary)]">Blogs</h1>

        {loading && <p>Loading blogs...</p>}
        {!loading && Array.isArray(blogs) && blogs.length === 0 && <p>No blogs found.</p>}

        <ul className="space-y-8">
          {blogs.map((blog) => (
            <li key={blog._id} className="border-b border-gray-600 pb-6">
              <Link href={`/blogs/${blog.slug}`}>
                <h2 className="text-2xl font-semibold mb-2 text-[var(--color-accent)] hover:underline">
                  {blog.title}
                </h2>
              </Link>
              <p className="text-gray-300 mb-2">{blog.summary}</p>
              <small className="text-gray-500">
                Published on {new Date(blog.createdAt).toLocaleDateString()}
              </small>
            </li>
          ))}
        </ul>

        {/* Pagination */}
        <div className="flex justify-center mt-12 space-x-4">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            className="px-4 py-2 bg-[var(--color-primary)] text-black rounded-md disabled:opacity-50"
          >
            Previous
          </button>
          <span className="px-4 py-2 text-[var(--color-primary)]">
            Page {page} of {totalPages}
          </span>
          <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            className="px-4 py-2 bg-[var(--color-primary)] text-black rounded-md disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
