import connectDB from "lib/mongodb";
import Comment from "@/models/Comment";
import Blog from "@/models/blog"; // lowercase file name


connectDB();

export async function POST(req) {
  try {
    const body = await req.json();
    // Force approved to false for moderation
    body.approved = false;
    const comment = await Comment.create(body);
    return new Response(JSON.stringify({ message: "Comment submitted and awaiting approval", comment }), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
