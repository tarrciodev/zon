import logo from "@/assets/logo.png";
import { blogUrl } from "@/config/blog-url";
import Image from "next/image";
import Link from "next/link";
import { MenuServices } from "./menu-services";
import { MobileHeader } from "./mobile/header";
import { Button } from "./ui/button";

export async function Header() {
    return (
        <>
            <div className='px-4 xl:px-40 items-center bg-white fixed top-0 left-0 right-0 z-50 shadow hidden sm:flex min-h-20'>
                <Link href='/'>
                    <Image src={logo} alt='logo' width={100} height={50} />
                </Link>
                <nav className='flex justify-end flex-1'>
                    <ul className='mr-72 flex gap-5 items-center'>
                        <MenuServices />
                        <Link href={`${blogUrl}`} target='blank'>
                            Blog
                        </Link>
                    </ul>
                    <div className='flex gap-5 items-center pr-12'>
                        <button>login</button>
                        <Button>cadastrar-se</Button>
                    </div>
                </nav>
            </div>
            <MobileHeader />
        </>
    );
}
