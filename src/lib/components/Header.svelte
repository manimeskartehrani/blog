<script lang="ts">
	import * as config from '$lib/config'
	import DarkmodeButton from '$lib/components/svg/DarkmodeButton.svelte'
</script>

<header class="fixed z-10 top-3 inset-x-0 opacity-50">
	<div
		class="flex items-center justify-between max-w-3xl mx-auto px-4 h-24m-5 bg-black rounded-xl h-16"
	>
		<div>
			<a href="/" class="text-green-500 text-2xl font-bold">{config.title}</a>
		</div>
		<div class="space-x-1">
			<DarkmodeButton />
		</div>
		<div class="mt-1 text-white">
			<a href="/about" class="mx-2">About</a>
			<a href="/" class="mx-2">Contact</a>
			<a href="/blog" class="mx-2">Blog</a>
		</div>
	</div>
</header>
