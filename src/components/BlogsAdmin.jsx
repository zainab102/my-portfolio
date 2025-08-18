'use client';

import { useState, useEffect } from "react";

export default function BlogsAdmin() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ title: "", slug: "", summary: "", content: "", imageFile: null, id: "" });
  const [message, setMessage] = useState("");

  // Fetch blogs from API
  async function fetchBlogs() {
    setLoading(true);
    try {
      const res = await fetch("/api/blogs?page=1&limit=100");
      const data = await res.json();
      setBlogs(data.blogs || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Add/Edit Blog
  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("Submitting...");

    const url = form.id ? "/api/blogs/edit" : "/api/blogs/add";
    const method = form.id ? "PUT" : "POST";

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("slug", form.slug);
    formData.append("summary", form.summary);
    formData.append("content", form.content);
    if (form.imageFile) formData.append("image", form.imageFile);

    const res = await fetch(url, { method, body: formData });
    const data = await res.json();

    setMessage(data.message || data.error || "Unknown error");

    if (res.ok) {
      setForm({ title: "", slug: "", summary: "", content: "", imageFile: null, id: "" });
      fetchBlogs();
    }
  }

  // Delete blog
  async function handleDelete(id) {
    if (!confirm("Are you sure you want to delete this blog?")) return;

    const res = await fetch("/api/blogs/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    const data = await res.json();
    setMessage(data.message || data.error);
    fetchBlogs();
  }

  // Fill form for editing
  function editBlog(blog) {
    setForm({
      id: blog._id,
      title: blog.title,
      slug: blog.slug,
      summary: blog.summary,
      content: blog.content,
      imageFile: null,
    });
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
          onChange={(e) => setForm({ ...form, imageFile: e.target.files[0] })}
          className="w-full p-2 border rounded"
        />
        {form.imageFile && (
          <img
            src={URL.createObjectURL(form.imageFile)}
            alt="Preview"
            className="w-32 h-20 object-cover rounded mb-2"
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
