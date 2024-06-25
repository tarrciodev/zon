import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: ["/","/services"],
            disallow: "/(auth)/",
        },
        sitemap: "https://zon-digital.com/sitemap.xml",
    };
}
