import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.dennyferdiansyah.my.id";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/private/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // AI Crawlers - Allow for GEO optimization
      {
        userAgent: "GPTBot",
        allow: ["/", "/llms.txt"],
      },
      {
        userAgent: "ChatGPT-User",
        allow: ["/", "/llms.txt"],
      },
      {
        userAgent: "Google-Extended",
        allow: ["/", "/llms.txt"],
      },
      {
        userAgent: "PerplexityBot",
        allow: ["/", "/llms.txt"],
      },
      {
        userAgent: "Anthropic-AI",
        allow: ["/", "/llms.txt"],
      },
      {
        userAgent: "Claude-Web",
        allow: ["/", "/llms.txt"],
      },
      {
        userAgent: "cohere-ai",
        allow: ["/", "/llms.txt"],
      },
      {
        userAgent: "CCBot",
        allow: ["/", "/llms.txt"],
      },
      {
        userAgent: "meta-externalagent",
        allow: ["/", "/llms.txt"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
