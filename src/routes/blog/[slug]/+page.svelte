<script lang="ts">
	export let data
</script>

<article>
	<div class="prose dark:prose-invert py-4 px-4 max-w-none">
		<!-- <Post /> -->
		<svelte:component this={data.content} />
	</div>
</article>
