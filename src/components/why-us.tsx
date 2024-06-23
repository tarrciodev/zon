"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Separator } from "./ui/separator";
export function WhyChooseUs() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    return (
        <motion.div
            className='space-y-6 flex-1'
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
        >
            <Separator className='w-24 bg-green-700 h-1 rounded' />
            <p className='font-semibold text-4xl'>Porque Nos?</p>
            <div className='space-y-6'>
                <p className='w-96 text-balance text-xl'>
                    Na <span>ZON</span>, somos apaixonados por ajudar empresas
                    como a sua a prosperarem no mundo digital.{" "}
                </p>

                <p className='w-96 text-balance text-xl'>
                    Somos uma equipe experiente de profissionais de marketing
                    digital, design e desenvolvimento web, dedicados a criar
                    soluções inovadoras e personalizadas que impulsionam o
                    crescimento dos negócios.
                </p>
            </div>
            <div className='flex gap-4'>
                <button className='rounded py-2 px-2 bg-blue-950 text-blue-50'>
                    Contacte-nos
                </button>
            </div>
        </motion.div>
    );
}
