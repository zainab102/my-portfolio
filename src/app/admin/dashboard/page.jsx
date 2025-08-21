"use client";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch("/api/blogs");
      const data = await res.json();
      setBlogs(data);
    };
    fetchBlogs();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <a
        href="/admin/panel"
        className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded"
      >
        Add Blog
      </a>
      <ul className="mt-6">
        {blogs.map((blog) => (
          <li key={blog._id} className="border-b py-2">
            <h2 className="font-semibold">{blog.title}</h2>
            <p>{blog.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
