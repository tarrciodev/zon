import { Sparkle } from "lucide-react";

export default function CategoryService({category}: {category: {name: string, description: string}}) {
    return (
        <div>
            <p className='mb-2 flex items-center gap-2 text-xl'>
                <Sparkle className='text-green-600' />
                {category.name}
            </p>
            <p className='xl:w-[30rem] text-wrap text-sm line-clamp-3'>
                {category.description}
            </p>
        </div>
    );
}
