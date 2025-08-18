import clientPromise from "@/lib/mongodb";

const dbName = "myPortfolioDB"; // choose your database name
const collectionName = "blogs";

export async function getCollection() {
  const client = await clientPromise;
  const db = client.db(dbName);
  return db.collection(collectionName);
}

export async function getAllBlogs() {
  const collection = await getCollection();
  return collection.find({}).sort({ _id: -1 }).toArray();
}

export async function getBlogBySlug(slug) {
  const collection = await getCollection();
  return collection.findOne({ slug });
}

export async function addBlog(blog) {
  const collection = await getCollection();
  const result = await collection.insertOne(blog);
  return result;
}

export async function updateBlog(id, updatedBlog) {
  const collection = await getCollection();
  const result = await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: updatedBlog }
  );
  return result;
}

export async function deleteBlog(id) {
  const collection = await getCollection();
  const result = await collection.deleteOne({ _id: new ObjectId(id) });
  return result;
}
