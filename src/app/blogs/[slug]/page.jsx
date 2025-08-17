import clientPromise from "../../../lib/mongodb";
import { ObjectId } from 'mongodb';

export async function generateStaticParams() {
  const client = await clientPromise;
  const db = client.db('myPortfolio');
  const blogs = await db.collection('blogs').find({}, { projection: { slug: 1 } }).toArray();

  return blogs.map(blog => ({ slug: blog.slug }));
}

export default async function BlogPost({ params }) {
  const { slug } = params;

  const client = await clientPromise;
  const db = client.db('myPortfolio');

  const blog = await db.collection('blogs').findOne({ slug });

  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-500 mb-8">{new Date(blog.createdAt).toLocaleDateString()}</p>
      <article className="prose max-w-none">
        {blog.content.split('\n').map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </article>
    </main>
  );
}
