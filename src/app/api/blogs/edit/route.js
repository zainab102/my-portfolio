import connectDB from "@/lib/mongodb";
import Blog from "@/models/Blog";

export async function PUT(req) {
  try {
    await connectDB();
    const { id, title, slug, summary, content, image } = await req.json();

    if (!id || !title || !slug || !content) {
      return new Response(
        JSON.stringify({ error: "ID, title, slug, and content are required" }),
        { status: 400 }
      );
    }

    const blog = await Blog.findById(id);
    if (!blog) {
      return new Response(JSON.stringify({ error: "Blog not found" }), { status: 404 });
    }

    blog.title = title;
    blog.slug = slug;
    blog.summary = summary;
    blog.content = content;
    blog.image = image;

    await blog.save();

    return new Response(JSON.stringify({ message: "Blog updated successfully", blog }), {
      status: 200,
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}
