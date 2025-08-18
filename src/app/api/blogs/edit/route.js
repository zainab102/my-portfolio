import clientPromise from "@lib/mongodb";

export async function PUT(req) {
  try {
    const body = await req.json();
    const { id, title, slug, summary, content } = body;

    if (!id || !title || !slug || !content) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("myPortfolio");
    const blogsCollection = db.collection("blogs");

    const result = await blogsCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { title, slug, summary, content } }
    );

    if (result.matchedCount === 0) {
      return new Response(JSON.stringify({ error: "Blog not found" }), { status: 404 });
    }

    return new Response(JSON.stringify({ message: "Blog updated successfully" }), { status: 200 });
  } catch (error) {
    console.error("Error updating blog:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
