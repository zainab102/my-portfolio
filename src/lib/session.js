import { verifyToken } from "@/lib/jwt";
import cookie from "cookie";

export function getServerSession(req) {
  const cookies = cookie.parse(req.headers.get("cookie") || "");
  const token = cookies.token;

  if (!token) return null;

  const payload = verifyToken(token);
  if (payload?.role === "admin") return payload;
  return null;
}
