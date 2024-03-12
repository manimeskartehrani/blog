<script>
	import { Car, Check } from 'lucide-svelte'
	import CardTest from '$lib/components/CardTest.svelte'
</script>

<!-- <script lang="ts">
	let count: number = 0

	let handleClick = (event: object, stepSize: number) => {
		console.log(event)
		count += stepSize
	}
	type formValues = {
		name: string
		profileSummary: string
		country: string
		jobLocation: string[]
		remoteWork: boolean
	}
	let formValues: any = {
		name: '',
		profileSummary: '',
		country: '',
		jobLocation: [],
		remoteWork: false,
		skillSet: [],
		yearsOfExperience: ''
	}

	let submitForm = () => {
		console.log(formValues)
	}
</script>


<h2 class="dark:text-white text-gray-700 text-3xl">hi</h2>


	<button class="text-white text-4xl shadow bg-slate-500" on:click={handleClick}>
		count {count}</button
	> 
	<button
		class="text-white text-4xl shadow bg-slate-500"
		on:click={(event) => handleClick(event, 5)}
	>
		count {count}</button
	> 
<main class="text-gray-300">
	<pre>{JSON.stringify(formValues, null, 2)}</pre>
	<form>
		<div>
			<label for="name"> Name </label>
			<input class="text-black" type="text" id="name" bind:value={formValues.name} />
		</div>
		<br />
		<div>
			<label for="profile">Profile Summary</label>
			<textarea class="text-black" id="profile" bind:value={formValues.profileSummary} />
		</div>
		<br />
		<div>
			<label for="country">Country</label>
			<select class="text-black" id="country" bind:value={formValues.country}>
				<option value="">Select a country</option>
				<option value="india">India</option>
				<option value="vietnam">Vietnam</option>
				<option value="singapor">Singapor</option>
			</select>
		</div>
		<br />
		<div>
			<label for="job-location">Job Location</label>
			<select class="text-black" id="job-location" bind:value={formValues.jobLocation} multiple>
				<option value="">Select a country</option>
				<option value="india">India</option>
				<option value="vietnam">Vietnam</option>
				<option value="singapor">Singapor</option>
			</select>
		</div>
		<br />
		<div>
			<input type="checkbox" id="remotework" bind:checked={formValues.remoteWork} />
			<label for="remotework">Open to remote work?</label>
		</div>
		<br />
		<div>
			<label for="test">Skill Set:</label>
			<br />
			<input type="checkbox" id="html" value="html" bind:group={formValues.skillSet} />
			<label for="html">HTML</label>
			<input type="checkbox" id="css" value="css" bind:group={formValues.skillSet} />
			<label for="css">CSS</label>
			<input type="checkbox" id="javascript" value="javascript" bind:group={formValues.skillSet} />
			<label for="javascript">JavaScript</label>
		</div>
		<div>
			<label for="test">Years of Experience:</label>
			<br />
			<input type="radio" id="0-2" value="0-2" bind:group={formValues.yearsOfExperience} />
			<label for="0-2">0-2</label>
			<input type="radio" id="3-5" value="3-5" bind:group={formValues.yearsOfExperience} />
			<label for="3-5">3-5</label>
			<input type="radio" id="6-10" value="6-10" bind:group={formValues.yearsOfExperience} />
			<label for="6-10">6-10</label>
			<input type="radio" id="10+" value="10+" bind:group={formValues.yearsOfExperience} />
			<label for="10+">10+</label>
		</div>
		<br />
		<div>
			<button type="submit" on:submit|preventDefault={submitForm}>Submit</button>
		</div>
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
	</form>
</main>

<style>
</style> -->

<!-- Slot name-->
<main>
	<CardTest>
		<div slot="header">
			<h3>Header</h3>
		</div>
		<div slot="content"><img src="cover.jpg" alt="" /></div>
		<div slot="footer"><button>View Details</button></div>
	</CardTest>
</main>
