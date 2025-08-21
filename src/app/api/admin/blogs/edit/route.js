// src/app/api/admin/blogs/edit/route.js
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Temp";

export async function PUT(req) {
  try {
    await connectDB();

    const body = await req.json();
    const { id, title, slug, content, author, tags } = body;

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Blog ID is required." },
        { status: 400 }
      );
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { title, slug, content, author, tags },
      { new: true }
    );

    if (!updatedBlog) {
      return NextResponse.json(
        { success: false, message: "Blog not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, blog: updatedBlog });
  } catch (err) {
    console.error("❌ Error editing blog:", err);
    return NextResponse.json(
      { success: false, message: "Failed to edit blog." },
      { status: 500 }
    );
  }
}
