'use client';

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Comments from "@/components/Comments";

export default function BlogPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchBlog() {
    setLoading(true);
    try {
      const res = await fetch(`/api/blogs/${slug}`);
      const data = await res.json();
      setBlog(data.blog || null);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (slug) fetchBlog();
  }, [slug]);

  if (loading) return <p>Loading...</p>;
  if (!blog) return <p>Blog not found.</p>;

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-400 mb-6">{blog.summary}</p>
      {blog.image && <img src={blog.image} alt={blog.title} className="mb-6 rounded shadow-md" />}
      <div className="prose max-w-none mb-10" dangerouslySetInnerHTML={{ __html: blog.content }} />

      {/* Comments Section */}
      <Comments blogId={blog._id} />
    </div>
  );
}
