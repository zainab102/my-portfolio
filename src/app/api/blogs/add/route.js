import { addBlog } from "@/models/Blog";

export async function POST(req) {
  try {
    const data = await req.json();

    // Optional: validate required fields
    if (!data.title || !data.slug || !data.content) {
      return new Response(
        JSON.stringify({ error: "Title, slug, and content are required" }),
        { status: 400 }
      );
    }

    await addBlog({
      title: data.title,
      slug: data.slug,
      summary: data.summary || "",
      content: data.content,
      image: data.image || "",
      createdAt: new Date(),
    });

    return new Response(JSON.stringify({ message: "Blog added successfully" }), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
