// src/app/api/admin/blogs/delete/route.js
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";

export async function DELETE(req) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Blog ID is required." },
        { status: 400 }
      );
    }

    const deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deletedBlog) {
      return NextResponse.json(
        { success: false, message: "Blog not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, message: "Blog deleted." });
  } catch (err) {
    console.error("❌ Error deleting blog:", err);
    return NextResponse.json(
      { success: false, message: "Failed to delete blog." },
      { status: 500 }
    );
  }
}
