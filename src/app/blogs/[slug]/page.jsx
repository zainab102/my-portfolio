import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Temp";

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
    </main>
  );
}
