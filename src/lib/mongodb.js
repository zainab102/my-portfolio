// lib/mongodb.js
import mongoose from "mongoose";

let isConnected = false;

export async function connectDB() {  // ✅ named export
  if (isConnected) return;

  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "myBlogApp",
    });

    isConnected = true;
    console.log("✅ MongoDB connected:", conn.connection.host);
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    throw new Error("MongoDB connection failed");
  }
}
