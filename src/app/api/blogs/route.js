// Example: src/app/api/blogs/route.js
import { NextResponse } from 'next/server';

// Dummy blogs
const blogs = [
  {
    _id: '1',
    title: 'Test Blog 1',
    slug: 'test-blog-1',
    summary: 'This is a test blog excerpt.',
    createdAt: new Date().toISOString(),
  },
  {
    _id: '2',
    title: 'Test Blog 2',
    slug: 'test-blog-2',
    summary: 'Another sample blog content.',
    createdAt: new Date().toISOString(),
  },
  {
    _id: '3',
    title: 'Test Blog 3',
    slug: 'test-blog-3',
    summary: 'More dummy blog text.',
    createdAt: new Date().toISOString(),
  },
];

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page')) || 1;
  const limit = parseInt(searchParams.get('limit')) || 3;

  const start = (page - 1) * limit;
  const end = start + limit;
  const paginatedBlogs = blogs.slice(start, end);

  return NextResponse.json({ blogs: paginatedBlogs });
}
