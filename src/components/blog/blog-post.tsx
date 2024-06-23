import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface IBlogPost {
    cover: any
    title: string
    excerpt: string
    slug: string
}

export default function BlogPost({ cover, title, excerpt, slug}: IBlogPost) {
  return (
      <Link href={`${process.env.Blog_Url}/post/${slug}`} legacyBehavior>
          <span className='rounded-lg overflow-hidden'>
              <Image
                  src={`https://${cover?.file?.url}`}
                  width={200}
                  height={200}
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
