"use client";
import * as React from "react";
import Image from 'next/image'
import Autoplay from "embla-carousel-autoplay";
import heroIlustration from "@/assets/hero.json";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { IGetBanners } from "@/actions/get-banners";
import { LottieServer } from "./lottie-server";
import { Separator } from "./ui/separator";

export function CarouselCN({
    banners
}: {
    banners: IGetBanners[]
}) {
    const plugin = React.useRef(
        Autoplay({ delay: 8000, stopOnInteraction: true })
    );

    return (
        <Carousel
            plugins={[plugin.current]}
            opts={{
                align: "start",
            }}
            className='w-full'
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent className='pl-4'>
                {banners?.map((banner) => {
                    if (banner.main) {
                        return (
                            <CarouselItem className='flex' key={banner?.title}>
                                <div className='flex flex-col max-w-[40vw]'>
                                    <Separator className='w-24 bg-green-700 h-1 rounded' />
                                    <div className='py-4 space-y-6'>
                                        <h1 className='text-5xl font-semibold text-gray-800'>
                                            Sua Presença Digital:
                                            <span className='block text-balance'>
                                                Construindo O Sucesso Online
                                            </span>
                                        </h1>
                                        <p className='line-clamp-2 text-balance'>
                                            Marketing Digital, Design e
                                            Desenvolvimento Web para Impulsionar
                                            o Crescimento do Seu Negócio
                                        </p>
                                        <div className='flex gap-4'>
                                            <button className='rounded py-2 px-2 bg-blue-950 text-blue-50'>
                                                Contacte-nos
                                            </button>
                                            <button className='rounded py-2 px-2 gb-green-700 border border-blue-950 text-blue-950'>
                                                Quem Somos
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='w-[35rem] -mt-24'>
                                        <LottieServer
                                            animationData={heroIlustration}
                                        />
                                    </div>
                                </div>
                            </CarouselItem>
                        );
                    }

                    return (
                        <CarouselItem className='flex' key={banner?.title}>
                            <div className='flex flex-col max-w-[40vw]'>
                                <Separator className='w-24 bg-green-700 h-1 rounded' />
                                <div className='py-4 space-y-6'>
                                    <h1 className='text-5xl font-semibold text-gray-800'>
                                        {banner.title}
                                    </h1>
                                    <p className='line-clamp-2 text-balance'>
                                        {banner.description}
                                    </p>
                                    <div className='flex gap-4'>
                                        <button className='rounded-lg py-3 px-4 gb-green-700 border bg-blue-950 text-white'>
                                            Saber mais
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='w-[35rem] -mt-24'>
                                    <Image
                                        src={banner.cover.url}
                                        width={500}
                                        height={500}
                                        alt='t'
                                    />
                                </div>
                            </div>
                        </CarouselItem>
                    );
                })}
            </CarouselContent>
        </Carousel>
    );
}
