import connectDB from "lib/mongodb";
import Blog from "@/models/blog"; // lowercase file name

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    const blog = await Blog.create(body);

    return new Response(JSON.stringify({ message: "Blog added successfully", blog }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to add blog" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
