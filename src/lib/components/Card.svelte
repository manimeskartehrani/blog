<script lang="ts">
	export let href: string;
	export let img: string;
	export let headerText: string;
	export let text: string;
	// export let target: '_self' | '_blank' = '_self';
</script>

<div
	class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
>
	<a {href}>
		<img class="rounded-t-lg" src={img} alt="" />
	</a>
	<div class="p-5">
		<a {href}>
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{headerText}
			</h5>
		</a>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
			{text}
		</p>
		<a
			{href}
			class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg"
		>
			Read more
		</a>
	</div>
</div>

<!-- class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" -->
