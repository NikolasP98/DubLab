<script>
	import { onMount } from 'svelte';

	let { isLoaded } = $props();

	let textContainer;
	let miniCircleContainer;
	let miniCircles = $state([]);
	let dataLoaded = $state(false);

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
				transform-origin: 0 200px;
				left: 50%;
				">${char}</span>`;
				})
				.join('');
		}

		miniCircles = await getEntries();
		isLoaded.set(true);
	});

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

<div bind:this={textContainer} id="main-circle">
	<span class="text">Rory Wilson</span>
	<span class="text">Evisbeats</span>
</div>
<div bind:this={miniCircleContainer} class="circle-collection bg-green-500">
	{#if $isLoaded}
		{#each miniCircles.products as entry}
			<div class="mini-circle">{entry.price}</div>
		{/each}
	{/if}
</div>

<style>
	.circle-collection {
		z-index: -1;
		position: absolute;
		top: 0;
		left: 0;
		min-width: 100vw;
		min-height: 100vh;
	}

	.mini-circle {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;

		background-color: gray;
		width: 100px;
		height: 100px;
		padding: 20px;
		border-radius: 100%;
	}

	#main-circle {
		position: relative;
		width: 400px;
		height: 400px;
		background-color: red;
		border-radius: 100%;

		/* display: flex;

		justify-content: center;
		align-items: center; */
	}

	.text {
		width: 100%;
		height: 100%;
		position: absolute;
	}
</style>
