export async function POST(req) {
  try {
    const body = await req.json();
    const { username, password } = body;

    if (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      return new Response(JSON.stringify({ message: "Login successful" }), { status: 200 });
    } else {
      return new Response(JSON.stringify({ error: "Invalid credentials" }), { status: 401 });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
