import logo from "@/assets/logo.png";
import { blogUrl } from "@/config/blog-url";
import Image from "next/image";
import Link from "next/link";
import { MenuServices } from "../menu-services";
import UserMenuItem from "./user-menu-item";

export function MobileHeader() {
    return (
        <div className='px-2 flex items-center bg-white fixed inset-x-0  w-[100dvw] z-50 shadow sm:hidden justify-between min-h-20'>
            <div className='flex justify-between items-center w-full flex-1'>
                <Link href='/'>
                    <Image src={logo} alt='logo' width={80} height={50} />
                </Link>
                <nav className='flex flex-1'>
                    <ul className='flex gap-5 items-center justify-center pl-6 sm:pl-0'>
                        <MenuServices />
                        <Link href={`/${blogUrl}`}>Blog</Link>
                    </ul>
                </nav>
                <div className='flex gap-5 items-center justify-center'>
                    <UserMenuItem />
                </div>
            </div>
        </div>
    );
}
