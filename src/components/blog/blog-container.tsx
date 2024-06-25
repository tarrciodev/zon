import { getPosts } from "@/actions/get-posts";
import BlogPost from "./blog-post";

export async function BlogContainer() {
    const posts = await getPosts(3);
    return (
        <div className='grid grid-cols-3 gap-5'>
            {posts?.map((post) => (
                <BlogPost
                    key={post.slug}
                    title={post.title}
                    cover={post.cover}
                    excerpt={post.excerpt}
                    slug={post.slug}
                />
            ))}
        </div>
    );
}
