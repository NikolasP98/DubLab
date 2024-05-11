<script>
	import { circleData } from './stores';
	import Circle from '$lib/components/circles/Circle.svelte';

	let { isLoaded } = $props();

	let miniCircleContainer;

	$effect(async () => {
		const miniCircles = await getEntries();

		circleData.set(
			miniCircles.products.map((entry, i) => ({
				id: i,
				entry,
				position: calculatePositions(miniCircles.products.length)[i],
				titles: ['Rory Wilson', 'Evisbeats']
			}))
		);
		isLoaded.set(true);
	});

	const calculatePositions = (numCircles) => {
		// Example: Place circles in a larger circle
		const radius = 300; // Radius of the larger circle
		const positions = [];

		for (let i = 0; i < numCircles; i++) {
			const angle = (i / numCircles) * 2 * Math.PI;
			const x = 300 + radius * Math.cos(angle);
			const y = 300 + radius * Math.sin(angle);
			positions.push({ x, y });
		}

		return positions;
	};

	const getEntries = async () => {
		const entries = await (await fetch('https://dummyjson.com/products?select=title,price')).json();
		return entries;
	};

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

	const log = (i) => {
		console.log(i);
	};
</script>

{#if $isLoaded}
	<div
		bind:this={miniCircleContainer}
		class="relative size-full flex items-center justify-center bg-green-100"
		role="group"
	>
		{#each $circleData as data, i}
			{#if i == 0}
				<Circle primary {data} />
			{/if}
			<Circle {data} />
		{/each}
	</div>
{:else}
	<pre>loading...</pre>
{/if}

<style>
</style>
