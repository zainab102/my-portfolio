// src/app/api/blogs/[slug]/route.js
import { connectDB } from "@/lib/mongodb";

export async function GET(req) {
  try {
    const url = new URL(req.url);
    const slug = url.pathname.split("/").pop(); // get slug from URL

    const db = await connectDB();
    const blog = await db.collection("blogs").findOne({ slug });

    if (!blog) {
      return new Response(JSON.stringify({ error: "Blog not found" }), { status: 404 });
    }

    return new Response(JSON.stringify(blog), { status: 200 });
  } catch (error) {
    console.error("GET /api/blogs/[slug] error:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch blog" }), { status: 500 });
  }
}
