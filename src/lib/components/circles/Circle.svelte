<script lang="ts">
	import type { Artist } from '$lib/types';
	import { spring, tweened } from 'svelte/motion';
	import { Vector2D } from '$lib/utilities/Vector2D';

	let { artist } = $props();
	let textContainer;

	// const rotation = spring(0, {
	// 	// duration: 400
	// 	damping: 0.5,
	// 	stiffness: 0.3
	// });

	// let circlePosition = Vector2D.fromObject(artist.position);

	// const position = tweened(circlePosition, {
	// 	duration: 100
	// });

	// const moveHandler = (e) => {
	// 	circlePosition.add(new Vector2D(e.movementX, e.movementY));

	// 	position.set(circlePosition);
	// };

	// const rotateText = (e) => {
	// 	rotation.update((n) => n + 180);
	// };

	// let isRotating = false;

	// const hoverHandler = (e) => {
	// 	if (textContainer && !isRotating) {
	// 		isRotating = true;
	// 		rotateText();
	// 	}
	// };

	// const hoverLeave = (e) => {
	// 	if (textContainer && isRotating) {
	// 		isRotating = false;
	// 		rotation.set(0);
	// 	}
	// };
	// onmousemove={moveHandler}
	// onmouseenter={hoverHandler}
	// onmouseleave={hoverLeave}
	// {primary ? ' bg-red-600' : 'absolute size-24 bg-slate-600'}
	// style="left:{$position.x}px; top:{$position.y}px;"
</script>

<div role="figure" class="flex justify-center rounded-full bg-red-800 size-20">
	<!-- {#if primary}
		{@render titles(artist.titles)}
	{/if} -->
	{artist.name}
</div>

{#snippet titles(titles: string[])}
	<div class="size-full">
		{#each titles as titleText}
			<span class="title-text absolute">{titleText}</span>
		{/each}
	</div>
{/snippet}
