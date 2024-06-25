import Link from "next/link";
import { BluredImage } from "../blured-image";

interface IBlogPost {
    cover: any;
    title: string;
    excerpt: string;
    slug: string;
}

export default function BlogPost({ cover, title, excerpt, slug }: IBlogPost) {
    return (
        <Link href={`${process.env.Blog_Url}/post/${slug}`} legacyBehavior>
            <span className='rounded-lg overflow-hidden'>
                <BluredImage
                    src={cover?.url}
                    alt='blog image'
                    className='w-full object-cover h-[30vh]'
                />
                <div className='flex flex-col gap-5 pt-4'>
                    <p className='font-semibold line-clamp-1'>{title}</p>
                    <p className='line-clamp-2 text-sm'>{excerpt}</p>
                    <span className='text-green-600 cursor-pointer'>
                        LER ARTIGO
                    </span>
                </div>
            </span>
        </Link>
    );
}
