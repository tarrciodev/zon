import { getBanners } from "@/actions/get-banners";

import { CarouselCN } from "./carouselCN";

export const revalidate = 120

export async function Banner() {
    const banners = await getBanners();
    return (
        <>
            <CarouselCN banners={banners} />
        </>
    );
}
