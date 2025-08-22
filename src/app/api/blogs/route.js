// src/app/api/blogs/route.js
import { connectDB } from "@/lib/mongodb";

export async function GET(req) {
  try {
    const db = await connectDB();
    const blogs = await db
      .collection("blogs")
      .find({})
      .sort({ createdAt: -1 }) // newest first
      .toArray();

    return new Response(JSON.stringify(blogs), { status: 200 });
  } catch (error) {
    console.error("GET /api/blogs error:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch blogs" }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    const db = await connectDB();
    const data = await req.json();

    // Basic validation
    if (!data.title || !data.content) {
      return new Response(JSON.stringify({ error: "Title and content are required" }), { status: 400 });
    }

    const blog = {
      title: data.title,
      slug: data.slug || data.title.toLowerCase().replace(/\s+/g, "-"),
      content: data.content,
      author: data.author || "Zainab",
      createdAt: new Date(),
      tags: data.tags || []
    };

    const result = await db.collection("blogs").insertOne(blog);

    return new Response(JSON.stringify({ message: "Blog added!", id: result.insertedId }), { status: 201 });
  } catch (error) {
    console.error("POST /api/blogs error:", error);
    return new Response(JSON.stringify({ error: "Failed to add blog" }), { status: 500 });
  }
}
