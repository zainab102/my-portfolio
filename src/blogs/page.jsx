"use client";

import { useState, useEffect } from "react";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch(`/api/blogs?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.blogs);
        setTotalPages(data.totalPages);
      });
  }, [page]);

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Blogs</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog._id} className="mb-6 border-b pb-4">
            <h2 className="text-2xl font-semibold">{blog.title}</h2>
            <p>{blog.content.substring(0, 200)}...</p>
          </li>
        ))}
      </ul>

      <div className="flex justify-center mt-6 space-x-4">
        <button
          disabled={page === 1}
          className="btn"
          onClick={() => setPage((p) => p - 1)}
        >
          Prev
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          disabled={page === totalPages}
          className="btn"
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </main>
  );
}
