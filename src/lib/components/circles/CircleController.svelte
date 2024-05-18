<script>
	import { circleData } from '$lib/stores/circleStore.svelte';
	import Circle from './Circle.svelte';
	import MainCircle from './MainCircle.svelte';

	let { isLoaded } = $props();

	let miniCircleContainer = $state();

	const calculatePositions = (numCircles) => {
		// Example: Place circles in a larger circle
		const radius = 300; // Radius of the larger circle
		const positions = [];

		for (let i = 1; i < numCircles; i++) {
			const angle = (i / numCircles) * 2 * Math.PI;
			const x = 300 + radius * Math.cos(angle);
			const y = 300 + radius * Math.sin(angle);
			positions.push({ x, y });
		}

		return positions;
	};

	let mainCircle;

	$effect(() => {
		const miniCircles = data.entries.map((entry, i) => ({
			id: i,
			entry,
			position: calculatePositions(data.entries.length)[i],
			titles: ['Rory Wilson', 'Evisbeats']
		}));

		mainCircle = miniCircles.shift();

		circleData.mainCircle = mainCircle;
		circleData.circleContent = miniCircles;
		isLoaded = true;

		console.log(isLoaded);
	});

	const overlapsOtherCircles = (targetCircle, x, y, circles) => {
		for (const otherCircle of circles) {
			if (otherCircle === targetCircle) continue;

			const dx = x - otherCircle.offsetLeft;
			const dy = y - otherCircle.offsetTop;
			const distance = Math.sqrt(dx * dx + dy * dy);

			if (distance < circleRadius * 2) {
				return true;
			}
		}
		return false;
	};
</script>

{#if isLoaded}
	<div
		bind:this={miniCircleContainer}
		class="relative size-full flex items-center justify-center bg-green-100"
		role="group"
	>
		{#if circleData}
			<MainCircle data={circleData.mainCircle} />

			{#if circleData.circles}
				{#each circleData.circles as data, i}
					<Circle {data} />
				{/each}
			{/if}
		{/if}
	</div>
{:else}
	<pre>loading...</pre>
{/if}

<style>
</style>
