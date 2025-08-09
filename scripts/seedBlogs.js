require('dotenv').config();
const clientPromise = require('../lib/mongodb.js');

async function seed() {
  const client = await clientPromise;
  const db = client.db('myPortfolio');

  const blogs = [
    {
      title: "Getting Started with Next.js",
      slug: "getting-started-nextjs",
      content: "Next.js is a React framework for production that makes building performant web apps easy.",
      createdAt: new Date(),
    },
    {
      title: "Understanding React Hooks",
      slug: "understanding-react-hooks",
      content: "React Hooks let you use state and lifecycle methods in functional components.",
      createdAt: new Date(),
    },
    {
      title: "Introduction to MongoDB Atlas",
      slug: "introduction-mongodb-atlas",
      content: "MongoDB Atlas is a cloud-hosted NoSQL database service perfect for modern web apps.",
      createdAt: new Date(),
    },
    {
      title: "Building REST APIs with Next.js",
      slug: "building-rest-apis-nextjs",
      content: "Next.js API routes allow you to build serverless REST APIs with ease.",
      createdAt: new Date(),
    },
    {
      title: "Styling in Next.js with Tailwind CSS",
      slug: "styling-nextjs-tailwind",
      content: "Tailwind CSS offers utility-first styling to quickly build beautiful UIs in Next.js.",
      createdAt: new Date(),
    },
    {
      title: "Deploying Next.js Apps on Vercel",
      slug: "deploying-nextjs-vercel",
      content: "Vercel is the best platform to deploy Next.js apps with automatic optimizations.",
      createdAt: new Date(),
    },
    {
      title: "Pagination Techniques in React",
      slug: "pagination-techniques-react",
      content: "Implementing pagination in React apps improves performance and user experience.",
      createdAt: new Date(),
    },
    {
      title: "Using Environment Variables in Next.js",
      slug: "using-env-vars-nextjs",
      content: "Securely manage sensitive data and configuration with environment variables in Next.js.",
      createdAt: new Date(),
    },
    {
      title: "SEO Best Practices for Next.js",
      slug: "seo-best-practices-nextjs",
      content: "Improve search rankings by using Next.js features like SSR, metadata, and sitemap.xml.",
      createdAt: new Date(),
    },
    {
      title: "Introduction to Serverless Functions",
      slug: "introduction-serverless-functions",
      content: "Serverless functions run backend code without managing servers, great with Next.js API routes.",
      createdAt: new Date(),
    },
  ];

  // Clear previous blogs
  await db.collection('blogs').deleteMany({});

  // Insert new blogs
  const result = await db.collection('blogs').insertMany(blogs);
  console.log(`Inserted ${result.insertedCount} blogs`);
  process.exit();
}

seed().catch(console.error);
