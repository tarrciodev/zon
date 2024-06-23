"use server";

import { useQuery } from "@/config/contentful/client-query";

export interface IPost {
    title: string;
    slug: string;
    cover: any;
    excerpt: string;
    createdAt: any;
    content: any;
}

export async function getPosts(): Promise<IPost[]> {
    const response = await useQuery?.getEntries({
        content_type: "posts",
        skip: 0,
        limit: 3,
    });

    const posts = response?.items?.map((item: any) => {
        const category = item.fields?.category as any;
        const cover = item.fields?.cover as any;

        return {
            title: item.fields.title as string,
            slug: item.fields.slug as string,
            excerpt: item.fields.excerpt as string,
            createdAt: item.fields.createdAt as any,
            cover: cover?.fields as any,
            content: item.fields.content as any,
        };
    });

    return posts;
}
