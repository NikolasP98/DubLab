<script lang="ts">
	import type { Artist, ArtistStore } from '$lib/types';
	import { artistStore } from '$stores/artistStore.svelte';
	import { createCircleStore } from '$stores/circleStore.svelte';
	import { onMount } from 'svelte';

	import Circle from './Circle.svelte';
	import MainCircle from './MainCircle.svelte';

	let circleStore = $state(createCircleStore());

	$effect(() => {
		circleStore.allCircles = Array.from(artistStore.artists).map((e, i) => {
			return {
				id: i,
				data: e
			};
		});
		// initializeRows();
		// let x = setInterval(updateRows, 3000);

		// return clearInterval(x);
	});

	// function overlapsOtherCircles(targetCircle: Circle, x: any, y: any, circles: any[]) {
	// 	for (const otherCircle of circles) {
	// 		if (otherCircle === targetCircle) continue;

	// 		const dx = x - otherCircle.offsetLeft;
	// 		const dy = y - otherCircle.offsetTop;
	// 		const distance = Math.sqrt(dx * dx + dy * dy);

	// 		// if (distance < circleRadius * 2) {
	// 		// 	return true;
	// 		// }
	// 	}
	// 	return false;
	// }

	let rows = [[], [], [], []]; // Initialize rows

	// Initialize rows with data
	function initializeRows() {
		for (let i = 0; i < rows.length; i++) {
			rows[i] = circleStore.allCircles.slice(i * 2, (i + 1) * 2); // Adjust based on your data size
		}
	}

	// Update rows to simulate movement
	function updateRows() {
		rows = rows.map((row, index) => {
			if (index % 2 === 0) {
				let first = row.shift();
				row.push(first);
			} else {
				let last = row.pop();
				row.unshift(last);
			}
			return row;
		});
	}

	// bind:this={miniCircleContainer}
</script>

<h1>CIRCLES</h1>

<div class="relative size-full flex items-center justify-center bg-green-100" role="group">
	<!-- {#if circleStore.mainCircle}
		<p>yes</p>
	{/if} -->

	{#if circleStore}
		{#each circleStore.allCircles as circle}
			<Circle artist={circle.data} />
		{/each}
	{:else}
		<pre>loading circles</pre>
	{/if}

	<!-- <MainCircle data={circleData.mainCircle} />

			{#if circleData.otherCircles}
				{#each circleData.otherCircles as data, i}
				{/each}
	
				{/if} -->
</div>
