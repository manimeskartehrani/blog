<script lang="ts">
	import * as config from '$lib/config';
</script>

<!-- <footer class="text-xl max-w-5xl mx-auto border-t bottom-0 mt-96">
	<p class="sticky bottom-0">{config.title}&copy {new Date().getFullYear()}</p>
</footer> -->
<footer
	class="fixed bottom-0 z-20 w-full p-4 bg-gray-500 opacity-50 rounded-xl border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600"
>
	<span class="flex items-center justify-between text-sm text-white sm:text-center dark:text-white"
		>{config.title}&copy {new Date().getFullYear()} . All Rights Reserved.
		<!-- <a href="/" class="hover:underline">{config.title}</a> -->
	</span>
	<ul
		class="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-white sm:mt-0"
	>
		<li>
			<a href="/" class="hover:font-bold me-4 md:me-6">About</a>
		</li>
		<li>
			<a href="/" class="hover:font-bold me-4 md:me-6">Privacy Policy</a>
		</li>
		<li>
			<a href="/" class="hover:font-bold me-4 md:me-6">Licensing</a>
		</li>
		<li>
			<a href="/" class="hover:font-bold">Contact</a>
		</li>
	</ul>
</footer>
