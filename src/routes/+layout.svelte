<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import '../app.css';
</script>

<!-- <div class="bg-gradient-to-r from-cyan-500 to-blue-500"> -->

<!-- </div> -->

<Header />

<main class="pt-24 max-w-5xl mx-auto">
	<slot />
</main>
<Footer />
