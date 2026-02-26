'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function BlogPost() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const res = await fetch(`/api/blogs/${slug}`);
        if (!res.ok) throw new Error('Blog not found');
        const data = await res.json();
        setBlog(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchBlog();
  }, [slug]);

  if (loading) return <p>Loading blog...</p>;
  if (error) return <p>{error}</p>;
  if (!blog) return <p>No blog found.</p>;

  return (
    <main className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-12">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-400 mb-8 text-sm sm:text-base">
        {blog.createdAt ? new Date(blog.createdAt).toLocaleDateString() : ''}
      </p>

      <article
        className="prose max-w-none sm:prose sm:prose-lg md:prose-xl lg:prose-2xl mx-auto"
        dangerouslySetInnerHTML={{ __html: blog.content || '' }}
      />
    </main>
  );
}
