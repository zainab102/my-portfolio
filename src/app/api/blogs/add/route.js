import connectDB from "@/lib/mongodb";
import Blog from "@/models/Blog";

export async function POST(req) {
  try {
    await connectDB();
    const { title, slug, summary, content, image } = await req.json();

    if (!title || !slug || !content) {
      return new Response(
        JSON.stringify({ error: "Title, slug, and content are required" }),
        { status: 400 }
      );
    }

    const existing = await Blog.findOne({ slug });
    if (existing) {
      return new Response(JSON.stringify({ error: "Slug already exists" }), { status: 400 });
    }

    const blog = await Blog.create({ title, slug, summary, content, image });

    return new Response(JSON.stringify({ message: "Blog added successfully", blog }), {
      status: 201,
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}
