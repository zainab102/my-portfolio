// 'use client';

// import { useEffect, useState } from "react";

// export default function Comments({ blogId }) {
//   const [comments, setComments] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [form, setForm] = useState({ name: "", email: "", content: "" });
//   const [message, setMessage] = useState("");

//   async function fetchComments() {
//     setLoading(true);
//     try {
//       const res = await fetch(`/api/comments/get?blogId=${blogId}`);
//       const data = await res.json();
//       setComments(data.comments || []);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     if (blogId) fetchComments();
//   }, [blogId]);

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setMessage("Submitting...");

//     try {
//       const res = await fetch("/api/comments/add", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...form, blogId }),
//       });

//       const data = await res.json();
//       setMessage(data.message || data.error || "Unknown error");

//       if (res.ok) {
//         setForm({ name: "", email: "", content: "" });
//         fetchComments();
//       }
//     } catch (err) {
//       console.error(err);
//       setMessage("Failed to submit comment");
//     }
//   }

//   return (
//     <div className="mt-10 border-t pt-6">
//       <h3 className="text-xl font-semibold mb-4">Comments ({comments.length})</h3>

//       {/* Comment Form */}
//       <form onSubmit={handleSubmit} className="space-y-4 mb-6">
//         <input
//           type="text"
//           placeholder="Your Name"
//           value={form.name}
//           onChange={(e) => setForm({ ...form, name: e.target.value })}
//           className="w-full p-2 border rounded"
//           required
//         />
//         <input
//           type="email"
//           placeholder="Your Email"
//           value={form.email}
//           onChange={(e) => setForm({ ...form, email: e.target.value })}
//           className="w-full p-2 border rounded"
//           required
//         />
//         <textarea
//           placeholder="Your Comment"
//           value={form.content}
//           onChange={(e) => setForm({ ...form, content: e.target.value })}
//           className="w-full p-2 border rounded"
//           rows={4}
//           required
//         />
//         <button type="submit" className="px-4 py-2 bg-[var(--color-primary)] text-black rounded-md">
//           Submit Comment
//         </button>
//       </form>

//       {message && <p className="mb-4">{message}</p>}

//       {/* List of Comments */}
//       {loading ? (
//         <p>Loading comments...</p>
//       ) : (
//         <ul className="space-y-4">
//           {comments.map((c) => (
//             <li key={c._id} className="border-b pb-2">
//               <p className="font-semibold">{c.name}</p>
//               <p className="text-gray-400 text-sm">{new Date(c.createdAt).toLocaleString()}</p>
//               <p>{c.content}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }
