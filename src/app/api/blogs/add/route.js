// /src/app/api/blogs/add/route.js
import clientPromise from "@lib/mongodb";
import formidable from "formidable";

// Disable default body parser
export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {
  const form = new formidable.IncomingForm();
  
  return new Promise((resolve, reject) => {
    form.parse(req, async (err, fields, files) => {
      if (err) return resolve(new Response(JSON.stringify({ error: err.message }), { status: 500 }));

      try {
        const { title, slug, summary, content } = fields;

        // Example: convert uploaded file to base64 string
        let imageUrl = "";
        if (files.image) {
          const file = files.image[0]; // formidable returns array
          const buffer = await fs.promises.readFile(file.filepath);
          imageUrl = `data:${file.mimetype};base64,${buffer.toString("base64")}`;
        }

        const client = await clientPromise;
        const db = client.db("myPortfolio");
        const blogsCollection = db.collection("blogs");

        const result = await blogsCollection.insertOne({
          title,
          slug,
          summary,
          content,
          image: imageUrl,
          createdAt: new Date(),
        });

        resolve(new Response(JSON.stringify({ message: "Blog added!", blogId: result.insertedId }), { status: 200 }));
      } catch (error) {
        resolve(new Response(JSON.stringify({ error: error.message }), { status: 500 }));
      }
    });
  });
}
