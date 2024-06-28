"use client";
import { ICategoriesAndServices } from "@/actions/get-category-services";
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";

export function MenuMobileServices({
    categories,
}: {
    categories: ICategoriesAndServices[] | null;
}) {
    return (
        <Drawer>
            <DrawerTrigger>Serviços</DrawerTrigger>
            <DrawerContent className='h-[calc(100vh-100px)]'>
                <DrawerHeader className="py-4">
                    <DrawerTitle>Nossos Serviços</DrawerTitle>
                </DrawerHeader>
                <div className='flex sm:hidden px-8'>
                    <ul className="space-y-3">
                        {categories?.map((category) => (
                            <li key={category.name}>
                                <span className="text-xl font-medium">{category.name}</span>
                                <ul className='space-y-3 flex flex-col pt-4'>
                                    {category.services.map((service: any) => (
                                        <Link
                                            key={service.slug}
                                            href={`/services/${service.slug}`}
                                            className="text-lg text-blue-500"
                                        >
                                            {service.title}
                                        </Link>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </DrawerContent>
        </Drawer>
    );
}
