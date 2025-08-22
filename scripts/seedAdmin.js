// scripts/seedBlogs.js
import mongoose from "mongoose";
import Blog from "../src/models/Blog.js";
import connectDB from "../src/lib/mongodb.js";

const blogs = [
  {
    title: "My First Blog",
    slug: "my-first-blog",
    content: "This is my first blog post, added via script!",
    author: "Zainab",
    createdAt: new Date(),
  },
  {
    title: "Second Blog Post",
    slug: "second-blog",
    content: "Another blog seeded directly into MongoDB.",
    author: "Zainab",
    createdAt: new Date(),
  }
];

const seedBlogs = async () => {
  await connectDB();
  await Blog.deleteMany();
  await Blog.insertMany(blogs);
  console.log("✅ Blogs seeded!");
  mongoose.connection.close();
};

seedBlogs();
