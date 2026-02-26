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

export async function GET(_req, { params }) {
  try {
    const slug = params?.slug;

    if (!slug) {
      return new Response(JSON.stringify({ error: "Missing slug" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const apiUrl = new URL(`${WORDPRESS_BASE_URL}/posts`);
    apiUrl.searchParams.set("slug", slug);
    apiUrl.searchParams.set("_embed", "1");

    const res = await fetch(apiUrl.toString(), {
      method: "GET",
      cache: "no-store",
      headers: { Accept: "application/json" },
    });

    if (!res.ok) {
      return new Response(JSON.stringify({ error: "WordPress API failed" }), {
        status: 502,
        headers: { "Content-Type": "application/json" },
      });
    }

    const posts = await res.json();
    const post = Array.isArray(posts) ? posts[0] : null;

    if (!post) {
      return new Response(JSON.stringify({ error: "Blog not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    const blog = mapWordPressPost(post);

    return new Response(JSON.stringify(blog), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("GET /api/blogs/[slug] error:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch blog" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
