// // src/pages/api/auth/login.js
// import jwt from "jsonwebtoken";

// export default function handler(req, res) {
//   if (req.method !== "POST") return res.status(405).end();

//   const { email, password } = req.body;

//   if (
//     email === process.env.ADMIN_EMAIL &&
//     password === process.env.ADMIN_PASSWORD
//   ) {
//     const token = jwt.sign({ email }, process.env.JWT_SECRET, {
//       expiresIn: "1h",
//     });

//     // Set cookie (not secure on localhost!)
//     res.setHeader(
//       "Set-Cookie",
//       `token=${token}; HttpOnly; Path=/; Max-Age=3600; SameSite=Strict`
//     );

//     return res.status(200).json({ success: true });
//   }

//   return res.status(401).json({ success: false, message: "Invalid credentials" });
// }
