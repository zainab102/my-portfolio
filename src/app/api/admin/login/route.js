import jwt from "jsonwebtoken";

export async function POST(req) {
  const { email, password } = await req.json();

  // Example hardcoded admin credentials
  const ADMIN_EMAIL = "admin@example.com";
  const ADMIN_PASSWORD = "1234";

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const token = jwt.sign(
      { email },
      process.env.JWT_SECRET || "fallback_secret",
      { expiresIn: "1h" }
    );

    return new Response(JSON.stringify({ token }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ message: "Invalid credentials" }), {
    status: 401,
    headers: { "Content-Type": "application/json" },
  });
}
