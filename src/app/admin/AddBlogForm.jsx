"use client";

import { useState } from "react";

export default function AddBlogForm() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("Submitting...");

    const res = await fetch("/api/blogs/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, slug, summary, content }),
    });

    const data = await res.json();
    setMessage(data.message || data.error || "Unknown error");

    if (res.ok) {
      setTitle("");
      setSlug("");
      setSummary("");
      setContent("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 space-y-4">
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <input
        placeholder="Slug (unique)"
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <input
        placeholder="Summary"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 border rounded"
        required
        rows={8}
      />
      <button
        type="submit"
        className="px-4 py-2 bg-[var(--color-primary)] text-black rounded-md"
      >
        Add Blog
      </button>
      {message && <p>{message}</p>}
    </form>
  );
}
