import dbConnect from "@/lib/dbConnect";
import Comment from "@/models/Comment";

export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();
    const { blogId, name, email, content } = body;

    if (!blogId || !name || !email || !content) {
      return new Response(JSON.stringify({ error: "All fields are required" }), { status: 400 });
    }

    const newComment = await Comment.create({ blogId, name, email, content });
    return new Response(JSON.stringify({ message: "Comment added", comment: newComment }), { status: 201 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to add comment" }), { status: 500 });
  }
}
