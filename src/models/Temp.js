import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    author: { type: String, default: "Admin" },
    tags: { type: [String], default: [] },
  },
  { timestamps: true }
);

// Use existing model if it exists (Next.js hot reload safe)
export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
