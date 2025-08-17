// /scripts/seedBlogs.js
import clientPromise from "../lib/mongodb.js";

async function seedBlogs() {
  try {
    const client = await clientPromise;
    const db = client.db("my-portfolio-cluster");
    const blogsCollection = db.collection("blogs");

    const sampleBlogs = [
      {
        title: "Introduction to React.js",
        summary: "Learn the basics of React.js for building UIs.",
        content: "Full blog content here...",
        createdAt: new Date(),
      },
      {
        title: "Getting Started with MongoDB Atlas",
        summary: "Beginner's guide to using MongoDB Atlas.",
        content: "Full blog content here...",
        createdAt: new Date(),
      },
      // Add more blogs here...
    ];

    const result = await blogsCollection.insertMany(sampleBlogs);
    console.log(`✅ Inserted ${result.insertedCount} blogs.`);
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

seedBlogs();
