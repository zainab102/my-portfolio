import connectDB from "@/lib/mongodb";
import Blog from "@/models/Blog";

export default async function handler(req, res) {
  if (req.method !== "PUT") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    await connectDB();
    const { id, title, slug, summary, content, image } = req.body;

    if (!id || !title || !slug || !content) {
      return res.status(400).json({ error: "ID, title, slug, and content are required" });
    }

    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    blog.title = title;
    blog.slug = slug;
    blog.summary = summary;
    blog.content = content;
    blog.image = image;

    await blog.save();
    return res.status(200).json({ message: "Blog updated successfully", blog });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
