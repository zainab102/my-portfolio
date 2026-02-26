const WORDPRESS_BASE_URL =
  process.env.WORDPRESS_API_URL || "https://blog.zainabedu.com/wp-json/wp/v2";

function stripHtml(html = "") {
  return String(html).replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

function mapWordPressPost(post) {
  const image = post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";

  return {
    id: String(post.id),
    slug: post.slug,
    title: stripHtml(post?.title?.rendered || ""),
    summary: stripHtml(post?.excerpt?.rendered || ""),
    excerpt: stripHtml(post?.excerpt?.rendered || ""),
    content: post?.content?.rendered || "",
    createdAt: post?.date || "",
    image,
  };
}

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const page = Number(searchParams.get("page")) || 1;
    const perPage =
      Number(searchParams.get("limit")) ||
      Number(searchParams.get("per_page")) ||
      10;

    const apiUrl = new URL(`${WORDPRESS_BASE_URL}/posts`);
    apiUrl.searchParams.set("page", String(page));
    apiUrl.searchParams.set("per_page", String(Math.min(Math.max(perPage, 1), 100)));
    apiUrl.searchParams.set("_embed", "1");

    const res = await fetch(apiUrl.toString(), {
      method: "GET",
      cache: "no-store",
      headers: { Accept: "application/json" },
    });

    if (!res.ok) {
      return new Response(JSON.stringify([]), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    const posts = await res.json();
    const blogs = Array.isArray(posts) ? posts.map(mapWordPressPost) : [];

    return new Response(JSON.stringify(blogs), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("GET /api/blogs error:", error);
    return new Response(JSON.stringify([]), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
}
