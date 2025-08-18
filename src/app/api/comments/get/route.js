import connectDB from "lib/mongodb";
import Comment from "@/models/Comment";
import Blog from "@/models/blog"; // lowercase file name


connectDB();

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const blogId = searchParams.get("blogId");
    if (!blogId) return new Response(JSON.stringify({ comments: [] }));

    // Only approved comments
    const comments = await Comment.find({ blogId, approved: true }).sort({ createdAt: -1 });
    return new Response(JSON.stringify({ comments }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
