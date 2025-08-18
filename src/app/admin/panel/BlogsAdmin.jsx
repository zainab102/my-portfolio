'use client';

import { useEffect, useState } from "react";

export default function BlogsAdmin() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    slug: "",
    summary: "",
    content: "",
    image: "",
    id: "",
  });
  const [message, setMessage] = useState("");

  // Fetch blogs with pagination
  async function fetchBlogs(page = 1, limit = 100) {
    setLoading(true);
    try {
      const res = await fetch(`/api/blogs?page=${page}&limit=${limit}`);
      if (!res.ok) throw new Error("Failed to fetch blogs");
      const data = await res.json();
      setBlogs(data.blogs || []);
    } catch (err) {
      console.error(err);
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Add or Edit blog
  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("Submitting...");

    try {
      const method = form.id ? "PUT" : "POST";
      const url = form.id ? "/api/blogs/edit" : "/api/blogs/add";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setMessage(data.message || data.error || "Unknown error");

      if (res.ok) {
        setForm({ title: "", slug: "", summary: "", content: "", image: "", id: "" });
        fetchBlogs();
      }
    } catch (err) {
      console.error(err);
      setMessage("Server error");
    }
  }

  // Delete blog
  async function handleDelete(id) {
    if (!confirm("Are you sure you want to delete this blog?")) return;

    try {
      const res = await fetch("/api/blogs/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      setMessage(data.message || data.error);
      fetchBlogs();
    } catch (err) {
      console.error(err);
      setMessage("Failed to delete");
    }
  }

  // Fill form for editing
  function editBlog(blog) {
    setForm({
      id: blog._id,
      title: blog.title,
      slug: blog.slug,
      summary: blog.summary,
      content: blog.content,
      image: blog.image || "",
    });
  }

  // Handle image file upload
  function handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setForm({ ...form, image: reader.result }); // store Base64 string
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Blog Admin Panel</h1>

      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
        <input
          placeholder="Slug (unique)"
          value={form.slug}
          onChange={(e) => setForm({ ...form, slug: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
        <input
          placeholder="Summary"
          value={form.summary}
          onChange={(e) => setForm({ ...form, summary: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Content"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          className="w-full p-2 border rounded"
          rows={6}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full p-2 border rounded"
        />
        {form.image && (
          <img
            src={form.image}
            alt="Preview"
            className="my-2 max-h-48 rounded shadow-md"
          />
        )}
        <button type="submit" className="px-4 py-2 bg-[var(--color-primary)] text-black rounded-md">
          {form.id ? "Update Blog" : "Add Blog"}
        </button>
      </form>

      {message && <p className="mb-6">{message}</p>}

      <h2 className="text-2xl font-bold mb-4">All Blogs</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="space-y-4">
          {blogs.map((blog) => (
            <li key={blog._id} className="border p-4 rounded flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{blog.title}</h3>
                <p className="text-sm text-gray-400">{blog.slug}</p>
                {blog.image && (
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="my-2 max-h-32 rounded shadow-sm"
                  />
                )}
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => editBlog(blog)}
                  className="px-3 py-1 bg-yellow-500 text-black rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(blog._id)}
                  className="px-3 py-1 bg-red-600 text-white rounded"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
