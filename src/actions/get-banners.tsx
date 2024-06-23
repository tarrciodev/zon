import { useClient } from "@/grahql/client";
import { GET_BANNERS } from "@/grahql/queries/banners";
import { unstable_noStore } from "next/cache";

export interface IGetBanners {
    action: string
    description: string
    title: string
    main: boolean
    cover: {
      url: string
    }
}

export async function getBanners(): Promise<IGetBanners[]>{
    unstable_noStore()
    const data = await useClient.request(GET_BANNERS) as { banners: IGetBanners[]}
    return data?.banners
}