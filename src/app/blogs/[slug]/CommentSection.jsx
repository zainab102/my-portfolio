"use client";

import { useState, useEffect } from "react";

export default function CommentSection({ blogId }) {
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
