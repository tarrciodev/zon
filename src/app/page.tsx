import { Banner } from "@/components/banner";
import { BlogContainer } from "@/components/blog/blog-container";
import { CheckTheNumbers } from "@/components/check-the-numbers";
import { Engaje } from "@/components/engaje";
import { Footer } from "@/components/footer";
import { MessageUs } from "@/components/forms/message-us";
import { Header } from "@/components/header";
import MotionContainer from "@/components/motion-container";
import { Services } from "@/components/services";
import { ThoughtsAboutUs } from "@/components/thoughts-about-us";
import { Separator } from "@/components/ui/separator";
import { WhatWeCanOfferYou } from "@/components/what-we-can-offer-you";
import { WhyChooseUs } from "@/components/why-us";
import { blogUrl } from "@/config/blog-url";
import { Send } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Header />
            <div className='sm:px-12 xl:px-40 mt-16 sm:mt-24'>
                <Banner />
                <div className='flex flex-col sm:flex-row'>
                    <WhatWeCanOfferYou />
                    <Services />
                </div>

                <div className='sm:mt-12 flex flex-col sm:flex-row w-full'>
                    <WhyChooseUs />
                    <MotionContainer>
                        <CheckTheNumbers />
                    </MotionContainer>
                </div>
                <div className='mt-5 sm:mt-12 px-2 sm:px-0'>
                    <div>
                        <Separator className='w-24 bg-green-700 h-1 rounded' />
                        <div className='flex justify-between py-3'>
                            <p className='text-blue-950 font-semibold text-xl sm:text-4xl'>
                                Ultimos Posts
                            </p>
                            <Link
                                href={`${blogUrl}`}
                                className='text-green-600'
                            >
                                Ver Todos Os Posts
                            </Link>
                        </div>
                        <BlogContainer />
                    </div>
                </div>
                <Engaje />
                <ThoughtsAboutUs />
                <div className='mt-12 px-2 sm:px-0'>
                    <div className='space-y-5'>
                        <p className='text-4xl font-semibold text-blue-950'>
                            Contacte-nos
                        </p>
                        <p className='w-96 text-balance'>
                            Confie tambem, nos temos qualidade para ajudar seu
                            negocio a cresce.
                        </p>
                    </div>
                    <div className='sm:flex gap-8'>
                        <div className='sm:w-[35vw] '>
                            <MessageUs />
                        </div>
                        <div className='hidden sm:flex'>
                            <Send className='size-72 text-blue-950' />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
