/* eslint-disable react-hooks/rules-of-hooks */
/* global use, db */

//
// Connect to the database
//
use('myPortfolio'); // This must match the database name in Atlas

//
// Insert a new blog
//
const newBlog = {
  title: "How to Boost Productivity When Studying",
  slug: "boost-productivity-studying",
  content: `What if I told you that most remote students are sabotaging their own success without even realizing it? 
  ... (paste full content here) ...`,
  author: "Zainab",
  createdAt: new Date(),
  updatedAt: new Date(),
  tags: ["productivity", "remote learning", "study tips"],
};

const result = db.getCollection('blogs').insertOne(newBlog);

console.log(`Blog inserted with ID: ${result.insertedId}`);
