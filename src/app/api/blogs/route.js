import clientPromise from "@lib/mongodb";

export async function GET(req) {
  try {
    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get("page")) || 1;
    const limit = parseInt(url.searchParams.get("limit")) || 5;
    const skip = (page - 1) * limit;

    const client = await clientPromise;
    const db = client.db("myPortfolio"); // your DB name
    const blogsCollection = db.collection("blogs");

    const total = await blogsCollection.countDocuments();
    const blogs = await blogsCollection
      .find({})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();

    return new Response(
      JSON.stringify({
        blogs,
        total,
        page,
        totalPages: Math.ceil(total / limit),
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    return new Response(
      JSON.stringify({ blogs: [], total: 0, error: error.message }),
      { status: 500 }
    );
  }
}
