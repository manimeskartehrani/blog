import { json } from "@sveltejs/kit";
import type { MarkdownPost } from "$lib/types";


async function getPost(){
    let posts: MarkdownPost[] = []
    

    const paths = import.meta.glob('/src/posts/*.md', { eager: true})


 for(const path in paths){

    const file = paths[path]
    const slug = path.split('/').at(-1)?.replace('.md','')


    if(file && typeof file === 'object' && 'metadata' in file && slug){

        const metadata = file.metadata as Omit<MarkdownPost, 'slug'>
    
        const post = { ...metadata, slug} satisfies MarkdownPost
    
        posts.push(post)
    }

 
}

posts = posts.sort((first, second) =>
    new Date(second.publishedAt).getTime() - new Date(first.publishedAt).getTime()

)

    return posts

}

export async function GET() {

    const posts = await getPost()

    return json(posts)
    
}
