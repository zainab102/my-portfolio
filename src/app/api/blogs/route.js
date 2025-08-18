import connectDB from "@/lib/mongodb";
import Blog from "@/models/Blog";

export async function GET(req) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 20;

    const skip = (page - 1) * limit;

    const totalBlogs = await Blog.countDocuments();
    const blogs = await Blog.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    return new Response(
      JSON.stringify({
        blogs,
        page,
        totalPages: Math.ceil(totalBlogs / limit),
        totalBlogs,
      }),
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to fetch blogs" }), { status: 500 });
  }
}
