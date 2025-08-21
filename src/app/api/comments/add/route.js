import connectDB from "@/lib/mongodb";
import Comment from "@/models/Comment";

export async function POST(req) {
  try {
    const { blogId, name, text } = await req.json();
    await connectDB();

    const newComment = new Comment({ blogId, name, text });
    await newComment.save();

    return new Response(JSON.stringify(newComment), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
