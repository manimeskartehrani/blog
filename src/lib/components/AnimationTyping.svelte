<script lang="ts">
	import { onMount } from 'svelte'

	const TYPING_SPEED_MS: number = 200
	const PAUSE_TIME_MS: number = 1000
	const DELETE_SPEED: number = 100

	export let sentences: string[]
	let currentlySelectedSentenceIndex = 0

	$: currentSentence = sentences[currentlySelectedSentenceIndex]

	let typedToIndex = 0
	let currentTimout: any

	$: typedSentence = currentSentence.slice(0, typedToIndex)

	const handleTypingPhase = () => {
		currentTimout = setTimeout(() => {
			if (typedToIndex + 1 <= currentSentence.length) {
				typedToIndex++
				handleTypingPhase()
			} else {
				phase = 'pausing'
			}
		}, TYPING_SPEED_MS)
	}
	const handlePausingPhase = () => {
		currentTimout = setTimeout(() => {
			phase = 'deleting'
		}, PAUSE_TIME_MS)
	}

	const handleDeletingPhase = () => {
		currentTimout = setTimeout(() => {
			if (typedToIndex > 0) {
				typedToIndex--
				handleDeletingPhase()
			} else {
				currentlySelectedSentenceIndex =
					currentlySelectedSentenceIndex + 1 < sentences.length
						? currentlySelectedSentenceIndex + 1
						: 0
				phase = 'typing'
			}
		}, DELETE_SPEED)
	}

	type Phase = 'typing' | 'pausing' | 'deleting'

	let phase: Phase = 'typing'

	const phaseHandler = (currentPhase: Phase) => {
		switch (currentPhase) {
			case 'typing':
				handleTypingPhase()
				break
			case 'pausing':
				handlePausingPhase()
				break
			case 'deleting':
				handleDeletingPhase()
				break
		}
	}

	$: phaseHandler(phase)

	onMount(() => {
		return () => {
			if (currentTimout) {
				clearTimeout(currentTimout)
			}
		}
	})
</script>

<div
	class="after:ml-1 after:animate-blinking after:text-6xl after:text-gray-400 after:content-['|'] mb-4"
>
	{typedSentence}
</div>
