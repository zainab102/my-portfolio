// models/Blog.js
import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  title: String,
  slug: String,
  content: String,
  author: String,
  createdAt: { type: Date, default: Date.now },
  tags: [String],
});

const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);

export default Blog;
