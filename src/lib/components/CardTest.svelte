<script lang="ts">
	export let img: string
	export let head: string
	export let button: string
</script>

<main>
	<div class="card">
		<div class="card-header">
			<!-- <slot name="header" /> -->
			<h3 class="text-3xl mb-6">{head}</h3>
		</div>

		<div class="card-content">
			<!-- <slot name="content">Default Content</slot> -->

			<img src={img} alt="" />
		</div>
		<!-- {#if $$slots.footer} -->
		<hr class="h-px bg-black border-0 dark:bg-gray-700 mt-8" />
		<div class="card-footer">
			<!-- <slot name="footer" /> -->
			<button class="bg-slate-400 h-10 w-40">{button}</button>
		</div>
		<!-- {/if} -->
	</div>
</main>

<style>
	.card {
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
		transition: 0.3s;
		padding: 16px;
		margin-bottom: 20px;
		width: 400px;
		height: 500px;
	}

	button {
		margin-top: 30px;
		border: 1rem;
	}
	main {
		text-align: center;
		padding: 1rem;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
