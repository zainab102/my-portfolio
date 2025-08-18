import { updateBlog } from "@/models/Blog";
import { ObjectId } from "mongodb";

export async function PUT(req) {
  try {
    const data = await req.json();
    if (!data.id) {
      return new Response(JSON.stringify({ error: "Blog ID is required" }), {
        status: 400,
      });
    }

    const updatedData = {
      title: data.title,
      slug: data.slug,
      summary: data.summary || "",
      content: data.content,
      image: data.image || "",
      updatedAt: new Date(),
    };

    await updateBlog(data.id, updatedData);

    return new Response(JSON.stringify({ message: "Blog updated successfully" }), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
