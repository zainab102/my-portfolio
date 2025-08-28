// src/app/api/blogs/[slug]/route.js
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";

export async function GET(req, { params }) {
  try {
    await connectDB();

    const { slug } = params;
    const blog = await Blog.findOne({ slug });

    if (!blog) {
      return new Response(JSON.stringify({ error: "Blog not found" }), { status: 404 });
    }

    return new Response(JSON.stringify(blog), { status: 200 });
  } catch (error) {
    console.error("GET /api/blogs/[slug] error:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch blog" }), { status: 500 });
  }
}
