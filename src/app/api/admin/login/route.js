import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const ADMIN_USER = {
  email: process.env.ADMIN_EMAIL,
  password: process.env.ADMIN_PASSWORD, // plain for dev, hash for prod
};

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password required" }, { status: 400 });
    }

    // Check credentials
    const isValid = email === ADMIN_USER.email && password === ADMIN_USER.password;

    if (!isValid) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // Generate JWT
    const token = jwt.sign({ email: ADMIN_USER.email }, process.env.JWT_SECRET, { expiresIn: "1d" });

    return NextResponse.json({ message: "Login successful", token });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
