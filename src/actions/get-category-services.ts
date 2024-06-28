"use server";

import { useClient } from "@/grahql/client";
import {
    GET_CATEGORIES,
    GET_CATEGORIES_AND_SERVICES,
} from "@/grahql/queries/categories";

export interface ICategoryServices {
    name: string;
    description: string;
}

export interface ICategoriesAndServices {
    name: string;
    description: string;
    services: {
        title: string;
        slug: string;
    }[];
}

export async function getCategoryServices(): Promise<ICategoryServices[]> {
    const data = await useClient.request(GET_CATEGORIES) as {
        servicesCategories: ICategoryServices[];
    };
    return data?.servicesCategories;
}

export async function getCategoriesAndServices(): Promise<
    ICategoriesAndServices[]
> {
    const data = await useClient.request(GET_CATEGORIES_AND_SERVICES) as {
        servicesCategories: ICategoriesAndServices[];
    };
    return data.servicesCategories;
}
