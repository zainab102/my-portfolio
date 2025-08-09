export async function GET() {
  const sitemapUrl = "https://my-portfolio-xi-lilac-23.vercel.app/sitemap.xml";

  const robotsTxt = `
User-agent: *
Allow: /

Sitemap: ${sitemapUrl}
`.trim();

  return new Response(robotsTxt, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
