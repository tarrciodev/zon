"use client"
import { Copyright } from "lucide-react";
import Link from "next/link";
import { FacebookIcon } from "./svg-icons/facebook";
import { InstagramIcon } from "./svg-icons/isntagram";
import { LinkedinIcon } from "./svg-icons/linkedin";
import { WhatsappIcon } from "./svg-icons/whatsapp";
import { Feedback } from "./feedback";
import { Suspense } from "react";
import { blogUrl } from "@/config/blog-url";

export function Footer() {
    return (
        <footer className='flex flex-col gap-5 sm:flex-row justify-between py-12 border-t mt-4 px-2 xl:px-40 bg-gradient-to-r from-green-700 to-blue-950 text-white'>
            <div className='flex gap-6'>
                <nav className='flex gap-4'>
                    <Link
                        href='https://wa.link/dqe6fu'
                        className='flex items-center gap-2 hover:rotate-12 transition duration-500'
                        target='_blank'
                    >
                        <WhatsappIcon />
                    </Link>
                    <Link
                        href='https://web.facebook.com/people/ZON-Ag%C3%AAncia-de-Marketing-Digital/100095432717051/'
                        className='flex items-center gap-2 hover:rotate-12 transition duration-500'
                        target='_blank'
                    >
                        <FacebookIcon />
                    </Link>
                    <Link
                        href='https://www.instagram.com/zon.marketingdigital.ao/'
                        className='flex items-center gap-2 hover:rotate-12 transition duration-500'
                        target='_blank'
                    >
                        <InstagramIcon />
                    </Link>
                    <Link
                        href='https://www.linkedin.com/in/zon-digital-marketing-ao-592358296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
                        className='flex items-center gap-2 hover:rotate-12 transition duration-500'
                        target='_blank'
                    >
                        <LinkedinIcon />
                    </Link>
                    <Suspense>
                        <Feedback />
                    </Suspense>
                </nav>
                <nav className='flex gap-6 items-center'>
                    <Link href={`${blogUrl}`}>Blog</Link>
                </nav>
            </div>
            <div className='flex items-center justify-center gap-2 sm:ml-12'>
                <Copyright /> 2024 ZON lda. All rights reserved.
            </div>
        </footer>
    );
}
