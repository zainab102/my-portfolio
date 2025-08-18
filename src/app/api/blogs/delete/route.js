import clientPromise from "@lib/mongodb";
import { ObjectId } from "mongodb";

export async function DELETE(req) {
  try {
    const body = await req.json();
    const { id } = body;

    if (!id) {
      return new Response(JSON.stringify({ error: "Blog ID required" }), { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("myPortfolio");
    const blogsCollection = db.collection("blogs");

    const result = await blogsCollection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return new Response(JSON.stringify({ error: "Blog not found" }), { status: 404 });
    }

    return new Response(JSON.stringify({ message: "Blog deleted successfully" }), { status: 200 });
  } catch (error) {
    console.error("Error deleting blog:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
