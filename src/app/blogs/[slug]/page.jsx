"use client";

import { useEffect, useState } from "react";

export default function BlogPage({ params }) {
  const { slug } = params;

  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", content: "" });
  const [message, setMessage] = useState("");

  // Fetch blog
  async function fetchBlog() {
    try {
      const res = await fetch(`/api/blogs?slug=${slug}`);
      const data = await res.json();
      setBlog(data.blog || null);
    } catch (err) {
      console.error(err);
    }
  }

  // Fetch comments
  async function fetchComments() {
    try {
      const res = await fetch(`/api/comments/get?blogId=${blog?._id}`);
      const data = await res.json();
      setComments(data.comments || []);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchBlog();
  }, [slug]);

  useEffect(() => {
    if (blog) fetchComments();
  }, [blog]);

  // Submit comment
  async function handleComment(e) {
    e.preventDefault();
    setMessage("Submitting...");

    try {
      const res = await fetch("/api/comments/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, blogId: blog._id }),
      });

      const data = await res.json();
      setMessage(data.message || "Comment submitted");

      if (res.ok) {
        setForm({ name: "", email: "", content: "" });
        fetchComments();
      }
    } catch (err) {
      console.error(err);
      setMessage("Failed to submit comment");
    }
  }

  if (!blog) return <p>Loading blog...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-400 mb-6">{blog.summary}</p>
      <div className="prose mb-12" dangerouslySetInnerHTML={{ __html: blog.content }} />

      {/* Comments */}
      <h2 className="text-2xl font-bold mb-4">Comments ({comments.length})</h2>
      <ul className="space-y-4 mb-6">
        {comments.map((c) => (
          <li key={c._id} className="border p-4 rounded">
            <p className="font-semibold">{c.name}</p>
            <p>{c.content}</p>
            <p className="text-gray-400 text-sm">{new Date(c.createdAt).toLocaleString()}</p>
          </li>
        ))}
      </ul>

      {/* Add Comment */}
      <form onSubmit={handleComment} className="space-y-4 mb-6">
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
        <input
          placeholder="Email (optional)"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Your comment"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          className="w-full p-2 border rounded"
          rows={4}
          required
        />
        <button type="submit" className="px-4 py-2 bg-[var(--color-primary)] text-black rounded-md">
          Submit Comment
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}
