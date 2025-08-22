import { NextResponse } from "next/server";
import { connectDB } from '@/lib/mongodb'; 
import Blog from "@/models/Temp";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const { title, slug, content, author, tags } = body;

    if (!title || !slug || !content) {
      return NextResponse.json(
        { success: false, message: "Title, slug, and content are required." },
        { status: 400 }
      );
    }

    const existing = await Blog.findOne({ slug });
    if (existing) {
      return NextResponse.json(
        { success: false, message: "Slug already exists." },
        { status: 400 }
      );
    }

    const newBlog = await Blog.create({
      title,
      slug,
      content,
      author: author || "Admin",
      tags: tags || [],
    });

    return NextResponse.json(
      { success: true, blog: newBlog },
      { status: 201 }
    );
  } catch (err) {
    console.error("❌ Error adding blog:", err);
    return NextResponse.json(
      { success: false, message: "Failed to add blog." },
      { status: 500 }
    );
  }
}
