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
                <p className='text-balance text-lg'>
                    <b className="font-medium text-lx">Experiência Comprovada: </b>
                    Nossa equipe é composta por profissionais experientes e
                    apaixonados por marketing, comprometidos com o sucesso dos
                    nossos clientes.
                </p>

                <p className='text-balance text-lg'>
                    <b className="font-medium text-xl">Soluções Personalizadas: </b>
                    Entendemos que cada empresa é única, por isso oferecemos
                    soluções sob medida que se alinham com seus objetivos e
                    desafios específicos.
                </p>

                <p className='text-balance text-lg'>
                    <b className="font-medium text-xl">Resultados Mensuráveis: </b>
                    Focamos em estratégias que entregam resultados tangíveis,
                    utilizando métricas claras para medir o sucesso e ajustar as
                    abordagens conforme necessário.
                </p>

                <p className='text-balance text-lg'>
                    <b className="font-medium text-xl">Soluções Personalizadas: </b>
                    Entendemos que cada empresa é única, por isso oferecemos
                    soluções sob medida que se alinham com seus objetivos e
                    desafios específicos.
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
