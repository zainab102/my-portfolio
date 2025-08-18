import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    blogId: { type: mongoose.Schema.Types.ObjectId, ref: "Blog", required: true },
    name: { type: String, required: true },
    email: { type: String },
    content: { type: String, required: true },
    approved: { type: Boolean, default: false }, // Moderation flag
  },
  { timestamps: true }
);

export default mongoose.models.Comment || mongoose.model("Comment", CommentSchema);
