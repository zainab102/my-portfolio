// import { connectDB } from "@/lib/mongodb";
// import Comment from "@/models/Comment";

// export async function GET(req) {
//   try {
//     const { searchParams } = new URL(req.url);
//     const blogId = searchParams.get("blogId");

//     if (!blogId) {
//       return new Response(JSON.stringify([]), { status: 400 });
//     }

//     await connectDB();

//     const comments = await Comment.find({ blogId }).sort({ createdAt: -1 });
//     return new Response(JSON.stringify(comments || []), { status: 200 });
//   } catch (error) {
//     console.error("GET /comments error:", error);
//     return new Response(JSON.stringify([]), { status: 500 });
//   }
// }
