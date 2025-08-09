// src/app/robots.txt/route.js

export async function GET() {
  const sitemapUrl = "https://my-portfolio-xi-lilac-23.vercel.app/sitemap";

  const robotsTxt = `
User-agent: *
Allow: /

Sitemap: ${sitemapUrl}
  `.trim();

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
