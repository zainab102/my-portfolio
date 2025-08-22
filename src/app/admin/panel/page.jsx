"use client";
import { useState } from "react";

export default function AddBlogPage() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/admin/blogs/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, slug, content, tags: tags.split(",") }),
    });

    if (res.ok) {
      alert("Blog added successfully!");
      window.location.href = "/admin/dashboard"; // Redirect to dashboard after adding
    } else {
      alert("Error adding blog.");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Add New Blog</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          className="border p-2 w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Slug"
          className="border p-2 w-full"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          className="border p-2 w-full h-40"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Tags (comma separated)"
          className="border p-2 w-full"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Add Blog
        </button>
      </form>
    </div>
  );
}
