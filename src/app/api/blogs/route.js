// src/app/api/blogs/route.js
import { connectDB } from "@/lib/mongodb";

export async function GET(req) {
  try {
    const db = await connectDB();

    const blogs = await db
      .collection("blogs")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return new Response(JSON.stringify(Array.isArray(blogs) ? blogs : []), { status: 200 });
  } catch (error) {
    console.error("GET /api/blogs error:", error);
    return new Response(JSON.stringify([]), { status: 200 });
  }
}
