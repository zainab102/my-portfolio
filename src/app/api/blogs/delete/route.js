import { deleteBlog } from "@/models/Blog";

export async function DELETE(req) {
  try {
    const data = await req.json();
    if (!data.id) {
      return new Response(JSON.stringify({ error: "Blog ID is required" }), {
        status: 400,
      });
    }

    await deleteBlog(data.id);

    return new Response(JSON.stringify({ message: "Blog deleted successfully" }), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
