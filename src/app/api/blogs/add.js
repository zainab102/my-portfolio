import connectDB from "lib/mongodb";
import Blog from "@/models/blog";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    await connectDB();
    const { title, slug, summary, content, image } = req.body;

    if (!title || !slug || !content) {
      return res.status(400).json({ error: "Title, slug, and content are required" });
    }

    const existing = await Blog.findOne({ slug });
    if (existing) {
      return res.status(400).json({ error: "Slug already exists" });
    }

    const blog = await Blog.create({ title, slug, summary, content, image });
    return res.status(201).json({ message: "Blog added successfully", blog });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
