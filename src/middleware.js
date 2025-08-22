import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const PUBLIC_PATHS = ["/admin/login", "/api/auth/login"]; // No auth required here

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  // Allow public paths without auth
  if (PUBLIC_PATHS.some(path => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // Get JWT token from cookies
  const token = req.cookies.get("token")?.value;

  if (!token) {
    // Not logged in → redirect to login
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  try {
    // Verify JWT
    await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
    return NextResponse.next();
  } catch (err) {
    console.error("JWT verification failed:", err.message);
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }
}

export const config = {
  matcher: ["/admin/:path*"], // Protect only /admin routes
};
