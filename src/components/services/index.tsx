import { getCategoryServices } from "@/actions/get-category-services";
import CategoryService from "./category-service";

export async function Services() {
    const category = await getCategoryServices();
    return (
        <div className='bg-white py-12 px-6 flex-1 border border-slate-100'>
            <p className='text-4xl text-slate-500 tracking-widest'>SERVIÇOS</p>
            {category.map((category) => (
                <CategoryService category={category} key={category.name} />
            ))}
        </div>
    );
}
