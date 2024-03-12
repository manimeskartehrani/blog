<script lang="ts">
	import Card from '$lib/components/Card.svelte'

	export let data
	const { posts } = data
</script>

<h1 class="mb-5 text-5xl text-white">Welcome My Blog Page</h1>

<!-- <div class="container w-full p-6 grid grid-cols-3 gap-8">
	<div class="row-span-2 flex flex-col p-1">
		<Card
			href="/blog/posts/svelte-learning"
			img="img/cover.jpg"
			text="Hello"
			headerText="Noteworthy technology acquisitions 2021"
		/>
	</div>
	<div class="row-span-2">
		<Card
			href="/blog/posts/svelte-kit"
			img="img/cover.jpg"
			text="Hello Noteworthy technology acquisitions 2021 Noteworthy technology acquisitions 2021"
			headerText="Noteworthy technology acquisitions 2021"
		/>
	</div>
	<div class="row-span-2">
		<Card href="/blog/posts/svelte" img="img/cover.jpg" text="Hello" headerText="Noteworthy " />
	</div>
	<div class="row-span-2">
		<Card href="/blog/posts/svelte" img="img/cover.jpg" text="Hello" headerText="Noteworthy " />
	</div>
</div> -->

<div class="flex flex-col">
	{#each posts as post}
		<div class="mb-4 w-full">
			<Card
				href={'blog/' + post.slug}
				img={post.imgUrl}
				text={post['summary']}
				headerText={post.title}
			/>
		</div>
	{/each}
</div>
