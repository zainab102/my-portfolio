import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "supersecret";

export function signToken(payload, expiresIn = "1d") {
  return jwt.sign(payload, SECRET, { expiresIn });
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET);
  } catch (err) {
    return null;
  }
}
