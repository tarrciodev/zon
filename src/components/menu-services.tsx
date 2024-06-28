"use client";
import { ICategoriesAndServices, getCategoriesAndServices } from "@/actions/get-category-services";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { MenuMobileServices } from "./mobile/menu-mobile-services";
import { useEffect, useState } from "react";

export function MenuServices() {

    const [categoryAndServices, setCategoryAndServices]= useState<ICategoriesAndServices[] | null>(null)

    useEffect(()=> {
        (async()=> {
            const data = await getCategoriesAndServices();
            setCategoryAndServices(data);
        })()
        
    },[])

    return (
        <>
            <NavigationMenu className='hidden sm:flex'>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>
                            <span>Serviços</span>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className='grid gap-3 p-6 grid-cols-3 min-w-[50vw]'>
                                {categoryAndServices?.map((category: any) => (
                                    <ul
                                        className='row-span-3'
                                        key={category.name}
                                    >
                                        <li className='flex h-full w-full select-none flex-col rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'>
                                            <span className='text-lg font-medium'>
                                                {category.name}
                                            </span>
                                            <ul className='space-y-1 flex flex-col'>
                                                {category.services.map(
                                                    (service: any) => (
                                                        <Link
                                                            key={service.slug}
                                                            href={`/services/${service.slug}`}
                                                        >
                                                            {service.title}
                                                        </Link>
                                                    )
                                                )}
                                            </ul>
                                        </li>
                                    </ul>
                                ))}
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <div className='sm:hidden'>
                <MenuMobileServices categories={categoryAndServices} />
            </div>
        </>
    );
}
