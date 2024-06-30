import { Sparkle } from "lucide-react";

export function WhatWeCanOfferYou() {
    return (
        <div className='bg-blue-950 py-12 px-6 space-y-6 flex-1'>
            <p className='text-4xl text-blue-50 font-medium '>
                O que Podemos Te Oferecer?
            </p>
            <div className='space-y-3 text-blue-100'>
                <div className='flex gap-2 xl:w-[30rem] text-wrap text-lg justify-between'>
                    <span>
                        <Sparkle className='text-green-600' />
                    </span>
                    <p className='text-balance  flex flex-col'>
                        <b className='font-medium text-xl'>
                            Soluções Personalizadas{" "}
                        </b>
                        Entendemos que cada empresa é única, por isso oferecemos
                        soluções sob medida que se alinham com seus objetivos e
                        desafios específicos.
                    </p>
                </div>
                <div className='flex gap-2 xl:w-[30rem] text-wrap text-lg justify-between'>
                    <span>
                        <Sparkle className='text-green-600' />
                    </span>
                    <p className='text-balance flex flex-col'>
                        <b className='font-medium text-xl'>
                            Resultados Mensuráveis{" "}
                        </b>
                        Focamos em estratégias que entregam resultados
                        tangíveis, utilizando métricas claras para medir o
                        sucesso e ajustar as abordagens conforme necessário.
                    </p>
                </div>
                <div className='flex items-center gap-2 xl:w-[30rem] text-wrap text-lg justify-between'>
                    <span>
                        <Sparkle className='text-green-600' />
                    </span>
                    <p className='text-balance flex flex-col'>
                        <b className='font-medium text-xl'>Inovação</b>
                        Desbloqueie o Potencial do Seu Negócio com Soluções
                        Digitais Inovadoras
                    </p>
                </div>
            </div>
        </div>
    );
}
