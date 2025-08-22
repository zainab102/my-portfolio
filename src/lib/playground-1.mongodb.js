// lib/mongodb.js
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

if (!uri) throw new Error("Please define the MONGODB_URI in .env.local");

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Export a function to get the database
export async function connectDB() {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB || "myPortfolio");
  return db;
}

export default clientPromise;
