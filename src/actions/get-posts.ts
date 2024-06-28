"use server";

import { useClient } from "@/grahql/client";
import { GET_POSTS } from "@/grahql/queries/posts";

export interface IPost {
    title: string;
    slug: string;
    cover: {
        url: string;
    };
    excerpt: string;
    createdAt: any;
    content: any;
}

export async function getPosts(take: number): Promise<IPost[]> {
    const data = await useClient.request(GET_POSTS, { take }) as {
        posts: IPost[];
    };
    return data.posts;
}
