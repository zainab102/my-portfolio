import dbConnect from "@/lib/dbConnect";
import Comment from "@/models/Comment";

export async function GET(req) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const blogId = searchParams.get("blogId");

    if (!blogId) {
      return new Response(JSON.stringify({ error: "blogId is required" }), { status: 400 });
    }

    const comments = await Comment.find({ blogId }).sort({ createdAt: -1 });
    return new Response(JSON.stringify({ comments }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to fetch comments" }), { status: 500 });
  }
}
