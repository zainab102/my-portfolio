"use client";
import { useEffect, useState } from "react";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch(`/api/blogs?page=${page}&limit=5`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.blogs);
        setTotalPages(data.totalPages);
      });
  }, [page]);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Blogs</h1>
      {blogs.map((blog) => (
        <div key={blog._id} className="mb-6 border-b pb-4">
          <h2 className="text-xl font-semibold">{blog.title}</h2>
          <p className="text-gray-600">{blog.summary}</p>
        </div>
      ))}
      <div className="flex justify-between mt-6">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>Page {page} of {totalPages}</span>
        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
