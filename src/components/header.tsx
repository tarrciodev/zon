import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { MenuServices } from "./menu-services";
import { Button } from "./ui/button";

export function Header() {
    return (
        <header className='px-56 flex items-center bg-white'>
            <Link href='/'>
                <Image src={logo} alt='logo' width={100} height={50} />
            </Link>
            <nav className='flex justify-end flex-1'>
                <ul className='mr-72 flex gap-5 items-center'>
                    <Link href='/'>Home</Link>
                    <MenuServices />
                    <Link href='/'>Blog</Link>
                </ul>
                <div className='flex gap-5 items-center pr-12'>
                    <button>login</button>
                    <Button>cadastrar-se</Button>
                </div>
            </nav>
        </header>
    );
}
