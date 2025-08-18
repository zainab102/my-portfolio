import connectDB from "lib/mongodb";
import Blog from "@/models/blog"; // lowercase file name

export async function DELETE(req) {
  try {
    await connectDB();
    const { id } = await req.json();

    await Blog.findByIdAndDelete(id);

    return new Response(JSON.stringify({ message: "Blog deleted successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to delete blog" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
