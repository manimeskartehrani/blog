<script lang="ts">
	import './prism-night-owl.css';
	import type { PageData } from './$types';

	export let data: PageData;

	const { metadata, post: Post } = data;
</script>

<article>
	<div class="prose dark:prose-invert py-4 px-4 max-w-none">
		<Post />
	</div>
</article>
