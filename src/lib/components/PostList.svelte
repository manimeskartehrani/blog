<!-- <script lang="ts">
	import { onMount } from 'svelte'

	let posts = []

	onMount(async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts')
		posts = await response.json()
		// console.log(posts)
	})
</script>

{#each posts as post (post.id)}
	<h3>{post.id}, {post.title}</h3>
	<p>{post.body}</p>
	<hr />
{/each} -->
<script lang="ts">
	import { onMount } from 'svelte'
	let inputref

	onMount(() => {
		inputref.focus()
	})
</script>

<label>input</label>
<input type="text" class="bg-slate-200 border-emerald-600 border text-black" bind:this={inputref} />
