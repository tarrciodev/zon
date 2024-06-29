import { getServiceBySlug } from "@/actions/get-service-by-slug";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PlanCard } from "@/components/plan-card";
import type { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }):Promise<Metadata>{
    const service = await getServiceBySlug(params.slug)
    return {
        title: `zon | ${service.title}`,
        description: service.description,
        keywords: `zon, zon ${service.title}, ${service.title}`
    }
};

export const revalidate = 120

export default async function Service({ params }: { params: { slug: string } }) {
    const service = await getServiceBySlug(params.slug);
    return (
        <main className="flex flex-col h-screen">
            <Header />
            <div className='px-4 xl:px-40 space-y-2 mt-24 flex-1'>
                <h1 className='text-center text-3xl font-medium'>Princing</h1>
                <p className='text-center text-lg px-2 sm:px-0'>
                    Escolha um plano e veje a magia acontecer
                </p>
                <div>
                    <p className='text-center text-3xl sm:text-xl font-medium py-2'>
                        {service?.title}
                    </p>
                    <div className='flex flex-col sm:flex-row justify-center gap-3 lg:gap-12 sm:px-0'>
                        {service?.plans?.map((plan) => {
                            const parsedPlan = {
                                ...plan,
                                service: service.title,
                            };
                            return (
                                <PlanCard plan={parsedPlan} key={plan.title} />
                            );
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
