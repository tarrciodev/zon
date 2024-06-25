import { useClient } from "@/grahql/client";
import { GET_DEEDS } from "@/grahql/queries/deeds";

export interface IGetDeeds {
    description: string
    title: string
    numbers: string
}

export async function getDeeds(): Promise<IGetDeeds[]> {
    const data = await useClient.request(GET_DEEDS) as {
        deeds: IGetDeeds[]
    };

    return data.deeds
}
