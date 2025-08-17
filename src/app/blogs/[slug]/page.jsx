import clientPromise from "@lib/mongodb";

export default async function BlogPost({ params }) {
  const { slug } = params;

  try {
    const client = await clientPromise;
    const db = client.db("myPortfolio");

    const blog = await db.collection("blogs").findOne({ slug });

    if (!blog) {
      return <p>Blog not found</p>;
    }

    return (
      <main className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <p className="text-gray-500 mb-8">
          {blog.createdAt
            ? new Date(blog.createdAt).toLocaleDateString()
            : ""}
        </p>
        <article className="prose max-w-none">
          {blog.content
            ? blog.content.split("\n").map((line, idx) => (
                <p key={idx}>{line}</p>
              ))
            : ""}
        </article>
      </main>
    );
  } catch (error) {
    console.error("Error loading blog:", error);
    return <p>Failed to load blog.</p>;
  }
}
