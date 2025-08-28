// import { connectDB } from "@/lib/mongodb"; 
// import Comment from "@/models/Comment";

// export async function POST(req) {
//   try {
//     const data = await req.json();
//     const { blogId, name, text } = data;

//     if (!blogId || !name || !text) {
//       return new Response(JSON.stringify({ error: "All fields are required" }), { status: 400 });
//     }

//     await connectDB();

//     const newComment = await Comment.create({
//       blogId,
//       name,
//       text,
//       createdAt: new Date(),
//     });

//     return new Response(JSON.stringify(newComment), { status: 201 });
//   } catch (error) {
//     console.error("POST /comments error:", error);
//     return new Response(JSON.stringify({ error: "Failed to add comment" }), { status: 500 });
//   }
// }
