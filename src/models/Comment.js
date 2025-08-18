import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  blogId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Blog" },
  name: { type: String, required: true },
  email: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Prevent model overwrite upon hot reload in Next.js
export default mongoose.models.Comment || mongoose.model("Comment", CommentSchema);
