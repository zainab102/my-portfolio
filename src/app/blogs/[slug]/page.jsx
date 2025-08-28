"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function BlogPost() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loadingBlog, setLoadingBlog] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const res = await fetch(`/api/blogs/${slug}`);
        if (!res.ok) throw new Error("Blog not found");
        const data = await res.json();

        // Ensure content is a string
        if (data && data.content) data.content = String(data.content);

        setBlog(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoadingBlog(false);
      }
    }
    fetchBlog();
  }, [slug]);

  if (loadingBlog) return <p>Loading blog...</p>;
  if (error) return <p>{error}</p>;
  if (!blog) return <p>No blog found.</p>;

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-500 mb-8">
        {blog.createdAt ? new Date(blog.createdAt).toLocaleDateString() : ""}
      </p>

      <article className="prose max-w-none">
        <ReactMarkdown
          components={{
            code({ inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  style={oneDark}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code
                  className="bg-gray-800 text-white px-1 rounded"
                  {...props}
                >
                  {children}
                </code>
              );
            },
          }}
        >
          {blog.content || ""}
        </ReactMarkdown>
      </article>
    </main>
  );
}
