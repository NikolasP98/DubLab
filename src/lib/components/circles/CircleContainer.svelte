<script>
	import { onMount } from 'svelte';
import Circle from './Circle.svelte'

	let { isLoaded } = $props();

	let textContainer;
	let miniCircleContainer;
	let miniCircles = $state([]);

	let circleLocations = []

	onMount(async () => {
		const spans = textContainer.querySelectorAll('span');
		const numSpans = spans.length;

		for (let i = 0; i < numSpans; i++) {
			const angle = (360 / numSpans) * i + 90;

			spans[i].innerHTML = spans[i].innerText
				.split('')
				.map((char, i) => {
					return `<span style="
				transform:rotate(${angle + i * 4}deg);
				position: absolute;
				transform-origin: 0 192px;
				left: 50%;
				">${char}</span>`;
				})
				.join('');
		}

		miniCircles = await getEntries();
		isLoaded.set(true);


		circleLocations = calculatePositions(miniCircles.products.length);
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
 }

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
</script>

<div bind:this={textContainer} id="main-circle" class="relative size-96 bg-red-600 rounded-full">
	<span class="text">Rory Wilson</span>
	<span class="text">Evisbeats</span>
</div>
<div
	bind:this={miniCircleContainer}
	class="-z-10 absolute top-0 left-0 min-w-full min-h-full bg-green-500"
>
	{#if $isLoaded}
		{#each miniCircles.products as entry, i}
		<Circle {entry} bind:position={circleLocations[i]}/>
		{/each}
	{/if}
</div>

<style>
	.text {
		width: 100%;
		height: 100%;
		position: absolute;
	}
</style>
