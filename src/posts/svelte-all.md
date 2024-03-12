---
title: 'svelte basics'
imgUrl: './img/cover.jpg'
youtubeId: ''
publishedAt: '2024-04-28'
summary: 'This is my supplementary blog post to learning all about svelte!'
---

## Routes Folder

<span style="font-size:20px;">This folder is essential for any svelte application.
Svelte is file base routing framework.
The home page URL correspondes with routes folder. It should contain a </span>

```bash
+page.svelte
```

<span style="font-size:20px;">
to render the page or the URL.</span>

<span style="font-size:20px;">For example, example.com/about, is represent the folder about in our app within + page.svelte.</span>

<span style="font-size:20px;">As the result for each page we need to build the +page.svelte to show that page.</span>

## Senarios

1. **Normal situation:** <span style="font-size:20px;">we create a forlder for each page a +page.svelte file. It can be one or as many as we want. For home page or root page we don't need to create a folder.</span>
2. **Nested route:** <span style="font-size:20px;">for each of the nested URL we can create a folder within the +page.svelte.</span>
3. **Dynamic Routes:** <span style="font-size:20px;">In this senario, we consider situation like when we want to have many pages under one category. example of this could be /product/1, /product/2 , ... or blog/posts/post-one, blog/posts/post-two, ... . In this situation we use an square brucket ([]) with the name of our folder. So, in our product folder we create a productId like [productId] and then we add our +page.svelte file. In this way, svelte capture all of the /product/ directory within any productId follows after it. For implimentation we need to import page module as follow:</span>

```bash
import { page } from '$app/stores'
const productId = $page.params.productId
```

4. **Nested Dynamic Routes:** <span style="font-size:20px;">There is a situation when you need to have another dynamic route inside another dynamic route. Previously we have /products/1 URl now we want to have pages such as /products/1/reviews/1. In this case we have nested dynamic routes. To overcome this chanllenge, we need to create another folder named "reviews" inside the "[productId]" folder and then create another folder inside the "reviews" folder, named "[reviewsId]" and then we can have our "+page.svelte". In order to access both "productId' and "reviewsId" we need to destructure of our params variable as follow:</span>

```bash
import { page } from '$app/stores'
const {productId, reviewId} = $page.params
```

5. **Catch All Routes:** <span style="font-size:20px;">let's imagine the previous senario have multiple nested routes such as:
   /products/1/reviews/1/examples/1,  
   /products/1/reviews/1/examples/2,  
   /products/1/reviews/2/examples/1,  
   /products/1/reviews/2/examples/2,  
   for this senario if we use previous method then we need several [] folder and then we need to have number of folders for each products and 1 folder for each reviews and it can continue. So, we can benefit from another svelte feature named catch all routes. This feature, captures all of the directories with the same name. For our situation above, it captures all the URLs inside the /products/ and it doesn't matter how many folder we have inside it. Therefore, we need to have an array of all the URLs we want and then conditionally change the content. The structure of our file would be like: products folder and then [...slug] folder. Inside the slug folder we create +page.svelte and use the following code to access all of our URLs.</span>

```bash
import { page } from '$app/stores'
const slugArr = $page.params.slug.split('/')
```

6. **Optional Parameters:**<span style="font-size:20px;">There is a situation when some URLs could be optional such as language pages. In these cases, we need to create a [[lang]] folder inside the routes folder and then create +page.svelte. In this case we face an error that this URL and home URL match the same. First solution would be delete +page.svelte of home and the second option would be to create another folder and move the [[lang]] folder inside it. Then we destructure it and set the default value to 'en' language as follow: </span>

```bash
import { page } from '$app/stores';
	const greetings: any = {
		en: 'Hello!',
		es: 'Hola!',
		fr: 'Bonjour'
	};

	const { lang = 'en' } = $page.params;
	const greeting = greetings[lang];
```

## Layout
