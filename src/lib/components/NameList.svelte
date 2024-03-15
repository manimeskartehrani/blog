<script lang="ts">
	const names = [
		{
			firstName: 'mani',
			lastName: 'tehrani'
		},
		{
			firstName: 'ali',
			lastName: 'godarzi'
		},
		{
			firstName: 'reza',
			lastName: 'delvari'
		}
	]
</script>

{#each names as name (name)}
	<slot name="hero" firstName={name.firstName} lastName={name.lastName} />
{/each}
