import connectDB from "@/lib/mongodb";
import Comment from "@/models/Comment";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const blogId = searchParams.get("blogId");

    await connectDB();
    const comments = await Comment.find({ blogId }).sort({ createdAt: -1 });

    return new Response(JSON.stringify(comments), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
