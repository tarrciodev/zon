import { Copyright } from "lucide-react";
import Link from "next/link";
import { FacebookIcon } from "./svg-icons/facebook";
import { InstagramIcon } from "./svg-icons/isntagram";
import { LinkedinIcon } from "./svg-icons/linkedin";
import { WhatsappIcon } from "./svg-icons/whatsapp";
import { Feedback } from "./feedback";
import { Suspense } from "react";
import { blogUrl } from "@/config/blog-url";
import { getZonContacts } from "@/actions/zon";

export async function Footer() {
    const contacts = await getZonContacts()
    return (
        <footer className='flex flex-col gap-5 sm:flex-row justify-between py-12 border-t mt-4 px-2 xl:px-40 bg-gradient-to-r from-green-700 to-blue-950 text-white'>
            <div className='flex gap-6'>
                <nav className='flex gap-4'>
                    <Link
                        href={contacts.whatsappLink}
                        className='flex items-center gap-2 hover:rotate-12 transition duration-500'
                        target='_blank'
                    >
                        <WhatsappIcon />
                    </Link>
                    <Link
                        href={contacts.facebook}
                        className='flex items-center gap-2 hover:rotate-12 transition duration-500'
                        target='_blank'
                    >
                        <FacebookIcon />
                    </Link>
                    <Link
                        href={contacts.instagram}
                        className='flex items-center gap-2 hover:rotate-12 transition duration-500'
                        target='_blank'
                    >
                        <InstagramIcon />
                    </Link>
                    <Link
                        href={contacts.linkedin}
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
                    <Link href={`${blogUrl}`} target='_blank'>
                        Blog
                    </Link>
                </nav>
            </div>
            <div className='flex items-center justify-center gap-2 sm:ml-12'>
                <Copyright /> 2024 ZON lda. All rights reserved.
            </div>
        </footer>
    );
}
