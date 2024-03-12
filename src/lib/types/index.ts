// import type { ComponentType } from "svelte";

export type Categories = 'Sveltekit' | 'Svelte'

export type MarkdownPost = {
    
        title: string;
        imgUrl: string;
        youtubeId?: string;
        publishedAt: string;
        summary: string
        categories: Categories[]
        slug: string

    
    // default: ComponentType,
}