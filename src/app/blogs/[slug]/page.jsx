'use client';

import { connectDB } from '@/lib/mongodb'; 
import Blog from "@/models/Temp";
import { useState, useEffect } from "react";

// Your component code

export async function generateStaticParams() {
  await connectDB();
  const blogs = await Blog.find({}, { slug: 1 });
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export default async function BlogPost({ params }) {
  const { slug } = params;
  await connectDB();
  const blog = await Blog.findOne({ slug });

  if (!blog) return <p>Blog not found</p>;

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-500 mb-8">{new Date(blog.createdAt).toLocaleDateString()}</p>
      <article className="prose max-w-none">
        {blog.content.split("\n").map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </article>

      <CommentSection blogId={blog._id} />
    </main>
  );
}

function CommentSection({ blogId }) {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    async function fetchComments() {
      const res = await fetch(`/api/comments/get?blogId=${blogId}`);
      const data = await res.json();
      setComments(data);
    }
    fetchComments();
  }, [blogId]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/comments/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ blogId, name, text }),
    });

    if (res.ok) {
      setText("");
      setName("");
      // Re-fetch comments after adding a new one
      const newComments = await fetch(`/api/comments/get?blogId=${blogId}`);
      setComments(await newComments.json());
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      <form onSubmit={handleCommentSubmit} className="space-y-4 mb-6">
        <input
          type="text"
          placeholder="Your Name"
          className="border p-2 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Comment"
          className="border p-2 w-full h-20"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Add Comment
        </button>
      </form>

      <ul className="space-y-4">
        {comments.map((comment) => (
          <li key={comment._id} className="border-b border-gray-300 pb-2">
            <p className="font-semibold">{comment.name}</p>
            <p>{comment.text}</p>
            <small className="text-gray-500">{new Date(comment.createdAt).toLocaleDateString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
