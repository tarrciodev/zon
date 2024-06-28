"use client"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { User2 } from "lucide-react";
import { Separator } from "../ui/separator";
import { FacebookIcon } from "../svg-icons/facebook";
import { GoogleIcon } from "../svg-icons/google";

export default function UserMenuItem() {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <button className='size-12 rounded-full flex justify-center items-center bg-slate-100'>
                    <User2 />
                </button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Crie uma conta agora</DrawerTitle>
                    <DrawerDescription>
                        Aproveite todos os beneficios que a ZON lhe oferece
                    </DrawerDescription>
                </DrawerHeader>
                <div className='px-4 w-full'>
                    <Button className='w-full text-md'>Signup</Button>
                </div>
                <Separator className='h-1 bg-gray-100 w-full my-5' />
                <DrawerFooter>
                    <div className='px-4 space-y-2 w-full'>
                        <p className='text-center text-xl font-semibold py-4'>
                            Já tenho uma Conta
                        </p>
                        <Button
                            variant='outline'
                            className='w-full flex items-center gap-2 text-md'
                        >
                            <GoogleIcon /> login with google
                        </Button>
                        <Button className='bg-blue-700 w-full flex items-center gap-2 text-md'>
                            <FacebookIcon size='1rem' /> login with facebook
                        </Button>
                    </div>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}
