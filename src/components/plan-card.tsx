import { getZonWhatSapp } from "@/actions/zon";
import { WhatsappIcon } from "./svg-icons/whatsapp";

interface IPlan {
    service: string;
    title: string;
    price: string;
    description: string;
    recomendation: string
}

export async function PlanCard({ plan }: { plan: IPlan }) {
    const zonWhatsapp = await getZonWhatSapp();
    const message = encodeURIComponent(`Olá, equipe ZON.\n
Tenho interesse no serviço ${plan.service} com o pacote ${plan.title}. Quais são os próximos passos?\n
Obrigado(a)!`);
    return (
        <div className='bg-gradient-to-r from-green-700 to-blue-950 rounded-xl p-1 hover:from-purple-900 hover:to-pink-900'>
            <div className='rounded-xl py-12 px-6 xl:px-16 border border-gray-100 bg-white'>
                <div className="flex flex-col justify-center items-center">
                    <p className='text-center text-2xl font-semibold'>
                        {plan.title}
                    </p>
                    <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-blue-950 text-center text-xl sm:text-3xl'>
                        {`${new Intl.NumberFormat("pt-BR").format(
                            Number(plan?.price)
                        )}`}{" "}
                        AOA
                    </span>
                </div>
                <ul className='text-center border-t-2 border-gray-100 mt-2 pt-3 font-light text-lg mb-6'>
                    {plan.description}
                </ul>
                <p className="text-cente mb-4 text-blue-950 font-medium">{plan?.recomendation}</p>
                <a
                    className='rounded-lg bg-gradient-to-r from-blue-green-700 to-blue-950 text-white w-ful flex justify-center items-center gap-2 py-2'
                    href={`https://wa.me/${zonWhatsapp}?text=${message}`}
                >
                    <WhatsappIcon size='1.5rem' /> Solicitar Serviço
                </a>
            </div>
        </div>
    );
}
