import connectDB from "lib/mongodb";
import Blog from "@/models/blog"; // lowercase file name

export async function PUT(req) {
  try {
    await connectDB();
    const body = await req.json();
    const { id, ...updateData } = body;

    await Blog.findByIdAndUpdate(id, updateData, { new: true });

    return new Response(JSON.stringify({ message: "Blog updated successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to update blog" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
