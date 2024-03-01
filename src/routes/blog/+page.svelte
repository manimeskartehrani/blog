<script lang="ts">
	import Card from '../../lib/components/Card.svelte';
</script>

<h1 class="mb-5 text-5xl text-white">Welcome My Blog Page</h1>

<div class="grid grid-rows-3 grid-flow-col gap-4">
	<div class="row-span-3">
		<Card href="/blog/posts/svelte" img="img/cover.jpg" text="Hello" headerText="Learning Svelte" />
	</div>
	<div class="row-span-3">
		<Card href="/blog/posts/svelte" img="img/cover.jpg" text="Hello" headerText="Learning Svelte" />
	</div>
	<div class="row-span-3">
		<Card href="/blog/posts/svelte" img="img/cover.jpg" text="Hello" headerText="Learning Svelte" />
	</div>
</div>
