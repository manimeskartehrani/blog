import type {PageLoad} from "./$types";
import { error } from "@sveltejs/kit";

export const load: PageLoad = (async ({params}) => {
    const slug = params.slug
try {
    
   
    const markdownPost = await import(`../../../posts/${slug}.md`)

    return {
        meta: markdownPost.metadata,
        content: markdownPost.default,
        
    }
} catch (e) {
    throw error(404, `Could not find ${slug}`)
}

}) satisfies PageLoad



