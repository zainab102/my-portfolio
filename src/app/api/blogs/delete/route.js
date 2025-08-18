import connectDB from "@/lib/mongodb";
import Blog from "@/models/Blog";

export async function DELETE(req) {
  try {
    await connectDB();
    const { id } = await req.json();

    if (!id) {
      return new Response(JSON.stringify({ error: "Blog ID is required" }), { status: 400 });
    }

    const blog = await Blog.findById(id);
    if (!blog) {
      return new Response(JSON.stringify({ error: "Blog not found" }), { status: 404 });
    }

    await blog.remove();

    return new Response(JSON.stringify({ message: "Blog deleted successfully" }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}
