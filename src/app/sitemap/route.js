// src/app/sitemap/route.js

export async function GET() {
  const baseUrl = "https://my-portfolio-xi-lilac-23.vercel.app";

  // List all your site paths here (without leading slashes)
  const pages = [
    "",           // home
    "about",
    "projects",
    "skills",
    "contact"
  ];

  // Generate XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map((page) => {
        const loc = page ? `${baseUrl}/${page}` : baseUrl;
        return `
          <url>
            <loc>${loc}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>${page === "" ? "1.0" : "0.8"}</priority>
          </url>
        `;
      })
      .join("")}
  </urlset>`;

  return new Response(sitemap.trim(), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
