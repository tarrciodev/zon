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
            className='space-y-6 flex-1 px-2 sm:px-0'
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
        >
            <Separator className='w-24 bg-green-700 h-1 rounded' />
            <p className='font-semibold text-4xl'>Porque Nós?</p>
            <div className='space-y-6'>
                <p className='text-balance text-lg flex flex-col'>
                    <b className='font-medium text-lx'>COMPROMISSO </b>
                    Na ZON, ajudamos as empresas a crescer e a alcançar
                    novos patamares de sucesso através de estratégias de
                    marketing inovadoras e personalizadas. Oferecemos uma ampla
                    gama de serviços para atender às necessidades específicas do
                    seu negócio, com resultados garantidos.
                </p>
                <p className='text-balance text-lg flex flex-col'>
                    <b className='font-medium text-lx'>EXPERIÊNCIA: </b>
                    Nossa equipe é composta por profissionais experientes e
                    apaixonados por inovação digital. Profissionais que
                    acreditam e entendem que o sucesso dos nossos clientes é o
                    sucesso da <em>ZON</em>
                </p>
                <p className='text-balance text-lg flex flex-col'>
                    <b className='font-medium text-xl'>Tempo de Resposta: </b>
                    Nosso tempo médio de resposta é inferior a 24 horas,
                    garantindo que você sempre tenha suporte quando precisar.
                </p>
            </div>
        </motion.div>
    );
}
