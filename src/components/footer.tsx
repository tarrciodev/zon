"use client"
import { Copyright } from "lucide-react";
import Link from "next/link";
import { FacebookIcon } from "./svg-icons/facebook";
import { InstagramIcon } from "./svg-icons/isntagram";
import { LinkedinIcon } from "./svg-icons/linkedin";
import { WhatsappIcon } from "./svg-icons/whatsapp";
import { Feedback } from "./feedback";
import { Suspense } from "react";

export function Footer() {
    return (
        <footer className='flex justify-between py-12 border-t mt-4 px-56 bg-gradient-to-r from-green-700 to-blue-950 text-white'>
            <div>
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
            </div>
            <nav className='flex gap-6 items-center'>
                <Link href='/'>Home</Link>
                <Link href='/'>Blog</Link>
                <li className='flex items-center gap-2 ml-12'>
                    <Copyright /> 2024 ZON lda. All rights reserved.
                </li>
            </nav>
        </footer>
    );
}
