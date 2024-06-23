import React from 'react'
import { blogData } from "@/utils/blog-data"
import BlogPost from './blog-post';
import { getPosts } from '@/actions/get-posts';

export async function BlogContainer() {

  const posts = await getPosts()
  return (
    <div className='grid grid-cols-3 gap-5'>
        {posts?.map(post => (
            <BlogPost key={post.slug} title={post.title} cover={post.cover} excerpt={post.excerpt} slug={post.slug} />
        ))}
  </div>
  )
}
