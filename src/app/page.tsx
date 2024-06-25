import heroIlustration from "@/assets/hero.json";
import { Banner } from "@/components/banner";
import { BlogContainer } from "@/components/blog/blog-container";
import { CheckTheNumbers } from "@/components/check-the-numbers";
import { Engaje } from "@/components/engaje";
import { Footer } from "@/components/footer";
import { MessageUs } from "@/components/forms/message-us";
import { Header } from "@/components/header";
import { LottieServer } from "@/components/lottie-server";
import MotionContainer from "@/components/motion-container";
import { Services } from "@/components/services";
import { ThoughtsAboutUs } from "@/components/thoughts-about-us";
import { Separator } from "@/components/ui/separator";
import { WhatWeCanOfferYou } from "@/components/what-we-can-offer-you";
import { WhyChooseUs } from "@/components/why-us";
import { Send } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <main className='h-screen bg-slate-200'>
            <Header />
            <div className='px-56 bg-white mt-24'>
              <Banner/>
                <div className='flex'>
                    <WhatWeCanOfferYou />
                    <Services />
                </div>

                <div className='mt-12 flex'>
                    <WhyChooseUs />
                    <MotionContainer>
                        <CheckTheNumbers/>
                    </MotionContainer>
                </div>
                <div className='mt-12'>
                    <div>
                        <Separator className='w-24 bg-green-700 h-1 rounded' />
                        <div className='flex justify-between py-3'>
                            <p className='text-blue-950 font-semibold text-4xl'>
                                Ultimos Posts
                            </p>
                            <Link
                                href={`${process.env.Blog_Url}`}
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
                <div className='mt-12'>
                    <div className='space-y-5'>
                        <p className='text-4xl font-semibold text-blue-950'>
                            Contacte-nos
                        </p>
                        <p className='w-96 text-balance'>
                            Confie tambem, nos temos qualidade para ajudar seu
                            negocio a cresce.
                        </p>
                    </div>
                    <div className='flex gap-8'>
                        <div className='w-[35vw]'>
                            <MessageUs />
                        </div>
                        <div>
                            <Send className='size-72 text-blue-950' />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
