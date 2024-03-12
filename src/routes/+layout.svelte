<script lang="ts">
	import Header from '$lib/components/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import ThemeInitializer from '$lib/components/ThemeInitializer.svelte'

	import '../app.css'
</script>

<!-- <div class="bg-gradient-to-r from-cyan-500 to-blue-500"> -->

<!-- </div> -->

<Header />
<ThemeInitializer>
	<main class="pt-24 max-w-5xl mx-auto mb-40 max-h-full">
		<slot />
	</main>
</ThemeInitializer>
<Footer />
