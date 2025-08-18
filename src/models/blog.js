import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

const DB_NAME = "myPortfolioDB"; // Change if needed
const COLLECTION_NAME = "blogs";

export async function addBlog(blog) {
  const client = await clientPromise;
  const db = client.db(DB_NAME);
  const collection = db.collection(COLLECTION_NAME);
  return await collection.insertOne(blog);
}

export async function updateBlog(id, updatedBlog) {
  const client = await clientPromise;
  const db = client.db(DB_NAME);
  const collection = db.collection(COLLECTION_NAME);
  return await collection.updateOne({ _id: new ObjectId(id) }, { $set: updatedBlog });
}

export async function deleteBlog(id) {
  const client = await clientPromise;
  const db = client.db(DB_NAME);
  const collection = db.collection(COLLECTION_NAME);
  return await collection.deleteOne({ _id: new ObjectId(id) });
}

export async function getBlogs(page = 1, limit = 10) {
  const client = await clientPromise;
  const db = client.db(DB_NAME);
  const collection = db.collection(COLLECTION_NAME);

  const blogs = await collection
    .find({})
    .sort({ createdAt: -1 })
    .skip((page - 1) * limit)
    .limit(limit)
    .toArray();

  return blogs;
}

export async function getBlogBySlug(slug) {
  const client = await clientPromise;
  const db = client.db(DB_NAME);
  const collection = db.collection(COLLECTION_NAME);

  return await collection.findOne({ slug });
}
