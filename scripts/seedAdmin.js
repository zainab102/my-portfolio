// scripts/seedAdmin.js
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import Admin from "../src/models/Admin.js";

dotenv.config();

const seedAdmin = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI, { dbName: "myBlogApp" });
    console.log("✅ Connected to MongoDB");

    // Remove existing admin with same username/email
    await Admin.deleteMany({ username: "admin" });
    console.log("🗑️ Existing admin removed (if any)");

    // Hash password
    const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);

    // Create new admin
    const admin = new Admin({
      username: "admin",
      email: process.env.ADMIN_EMAIL,
      password: hashedPassword,
    });

    await admin.save();
    console.log("🎉 Admin created successfully:", admin.email);

    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding admin:", error);
    process.exit(1);
  }
};

seedAdmin();
