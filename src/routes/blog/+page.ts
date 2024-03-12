
import type { MarkdownPost } from "$lib/types";

export async function load({fetch }) {

    const response = await fetch('/blog/api/posts')
    const posts: MarkdownPost[] = await response.json()
    return { posts} 
    
}