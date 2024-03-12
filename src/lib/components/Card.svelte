<script lang="ts">
	export let href: string
	export let img: string
	export let headerText: string
	export let text: string

	// export let target: '_self' | '_blank' = '_self';
</script>

<!-- <div class="max-w-sm bg-yellow-800 border rounded-lg shadow border-gray-700 max-h-sm"> -->
<!-- <a {href}>
		<img class="rounded-t-lg" src={img} alt="" />
	</a>
	<div class="p-5 h-80">
		<a {href}>
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-white h-24">
				{headerText}
			</h5>
		</a>
		<p class="mb-3 font-normal text-gray-400 h-32">
			{text}
		</p>

		<a
			{href}
			class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
		>
			Read more
			<svg
				class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 14 10"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M1 5h12m0 0L9 1m4 4L9 9"
				/>
			</svg>
		</a> 
	</div>-->
<div class="w-full border rounded-lg shadow border-gray-700">
	<a
		{href}
		class="flex flex-col border rounded-lg shadow border-gray-700 bg-gray-800 hover:bg-gray-700"
	>
		<div class="grid grid-cols-3 h-56">
			<div class="col-span-1">
				<!-- <img class="object-cover rounded-t-lg" src={img} alt="" /> -->
				<img class="object-cover w-fit rounded-t-lg" src={img} alt="" />
			</div>

			<div class="col-span-2 p-4 leading-normal grid grid-rows-2">
				<div class="row-span-2 grid-cols-5">
					<h5 class="mb-2 text-2xl font-bold tracking-tight t text-white">{headerText}</h5>
					<p class="mb-3 font-normal text-gray-400">{text}</p>
				</div>
				<div class=" grid grid-cols-1 place-items-end">
					<a
						{href}
						class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
					>
						Read more
						<svg
							class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 14 10"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M1 5h12m0 0L9 1m4 4L9 9"
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>
	</a>
</div>
