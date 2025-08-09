import { MongoClient, ObjectId } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 5;

    const client = await clientPromise;
    const db = client.db('my-portfolio-cluster'); // replace with your DB name

    const blogsCollection = db.collection('blogs');

    const total = await blogsCollection.countDocuments();
    const blogs = await blogsCollection
      .find({})
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .toArray();

    return new Response(
      JSON.stringify({
        total,
        blogs: blogs.map(({ _id, title, summary, createdAt }) => ({
          _id: _id.toString(),
          title,
          summary,
          createdAt,
        })),
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Failed to fetch blogs' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
