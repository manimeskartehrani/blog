<script lang="ts">
	import AnimationTyping from '$lib/components/AnimationTyping.svelte'

	let serviceBtn: boolean = true
	let aboutBtn: boolean = false

	let handleAboutClick = () => {
		serviceBtn = true
		aboutBtn = false
	}

	let handleServicClick = () => {
		serviceBtn = false
		aboutBtn = true
	}
	export let aboutMe: string
</script>

<h1
	class="bg-gradient-to-r from-red-600 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text"
>
	Hello, I&apos;m Mani <AnimationTyping
		sentences={['SEO Specialist', 'Data Analyst', 'NLP Aspiring']}
	/>
</h1>
<div class="w-full border rounded-lg shadow bg-gray-800 border-gray-700">
	<ul
		class="flex flex-wrap text-sm font-medium text-center border-gray-200 rounded-t-lg text-gray-400 bg-gray-800"
		id="defaultTab"
		data-tabs-toggle="#defaultTabContent"
		role="tablist"
	>
		<li class="me-2">
			<button
				on:click={handleAboutClick}
				id="about-tab"
				data-tabs-target="#about"
				type="button"
				role="tab"
				aria-controls="about"
				aria-selected="true"
				class="{serviceBtn ? ' text-blue-600' : ''}  inline-block p-4 rounded-ss-lg
					  bg-gray-800 hover:bg-gray-500"
				>About
			</button>
		</li>
		<li class="me-2">
			<button
				on:click={handleServicClick}
				id="services-tab"
				data-tabs-target="#services"
				type="button"
				role="tab"
				aria-controls="services"
				aria-selected="false"
				class=" {aboutBtn ? ' text-blue-600' : ''}  inline-block p-4
				 bg-gray-800 hover:bg-gray-500">Services</button
			>
		</li>
	</ul>
	<div id="defaultTabContent">
		<div
			class=" {aboutBtn ? 'hidden' : ''} p-4 rounded-lg md:p-8 bg-gray-800"
			id="about"
			role="tabpanel"
			aria-labelledby="about-tab"
		>
			<h2 class="mb-3 text-3xl font-extrabold tracking-tight text-white">About Me</h2>
			<p class="mb-5 text-gray-400">
				{aboutMe}
			</p>
			<a
				href="/about"
				class="inline-flex items-center font-medium
				 text-blue-500 hover:text-blue-700"
			>
				Learn more
			</a>
		</div>

		<div
			class="{serviceBtn ? 'hidden' : ''} p-4 rounded-lg md:p-8 bg-gray-800"
			id="services"
			role="tabpanel"
			aria-labelledby="services-tab"
		>
			<h2 class="mb-5 text-2xl font-extrabold tracking-tight text-white">
				I focus on cutting-edge technology to
			</h2>

			<ul role="list" class="space-y-4 text-gray-400">
				<li class="flex space-x-2 rtl:space-x-reverse items-center">
					<svg
						class="flex-shrink-0 w-3.5 h-3.5 text-blue-500"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path
							d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
						/>
					</svg>
					<span class="leading-tight">Dynamic reports and dashboards</span>
				</li>
				<li class="flex space-x-2 rtl:space-x-reverse items-center">
					<svg
						class="flex-shrink-0 w-3.5 h-3.5 text-blue-500"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path
							d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
						/>
					</svg>
					<span class="leading-tight">Templates for everyone</span>
				</li>
				<li class="flex space-x-2 rtl:space-x-reverse items-center">
					<svg
						class="flex-shrink-0 w-3.5 h-3.5 text-blue-500"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path
							d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
						/>
					</svg>
					<span class="leading-tight">Development workflow</span>
				</li>
				<li class="flex space-x-2 rtl:space-x-reverse items-center">
					<svg
						class="flex-shrink-0 w-3.5 h-3.5 text-blue-500"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path
							d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
						/>
					</svg>
					<span class="leading-tight">Limitless business automation</span>
				</li>
			</ul>
		</div>
	</div>
</div>

<style>
	h1 {
		font-weight: var(--font-weight-5);
		/* color: var(--gray-5); */
		font-size: var(--font-size-8);
	}

	p {
		line-height: var(--font-lineheight-5);
	}
</style>
