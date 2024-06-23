"use server";

import { useClient } from "@/grahql/client";
import { GET_SERVICE_BY_SLUG } from "@/grahql/queries/services";
import { unstable_noStore } from "next/cache";

export interface IServices {
    title: string;
    description: string;
    slug: string;
    plans: {
        title: string;
        price: string;
        description: string;
        recomendation: string;
    }[];
}

export async function getServiceBySlug(slug: string): Promise<IServices> {
    const data = await useClient.request(GET_SERVICE_BY_SLUG, { slug }) as {
        service: IServices;
    };

    console.log(data.service)

    return data?.service;
}
