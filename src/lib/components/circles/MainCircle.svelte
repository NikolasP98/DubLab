<script>
	import { spring, tweened } from 'svelte/motion';
	import { Vector2D } from '$lib/utilities/Vector2D';

	let { data } = $props();
	let textContainer;

	let currentData = $state(data);

	const rotation = spring(0, {
		// duration: 400
		damping: 0.5,
		stiffness: 0.3
	});

	$effect(async () => {
		if (textContainer) {
			curveText();

			rotation.subscribe((value) => {
				const containerStyles = {
					rotate: `${value}deg`
				};
				Object.assign(textContainer.style, containerStyles);
			});
		}
	});

	// Text Curving & Positioning
	const curveText = () => {
		const mainCircleSize = 384;
		const containerStyles = {
			width: `${mainCircleSize}px`,
			height: `${mainCircleSize}px`,
			rotate: '0deg'
		};
		const titles = textContainer.querySelectorAll('.title-text');
		const numTitles = titles.length;

		Object.assign(textContainer.style, containerStyles);

		// Position round text in circle borders
		for (let i = 0; i < numTitles; i++) {
			// Starting angle will distribute titles evenly
			const angle = (360 / numTitles) * i + 90;

			const children = titles[i].innerText.split('').map((char, charIndex) => {
				const styles = {
					transformOrigin: `0 ${mainCircleSize / 2}px`,
					position: 'absolute',
					left: '50%',
					rotate: `${angle + charIndex * 8 + $rotation}deg`
				};

				const character = document.createElement('span');

				character.innerText = char;

				Object.assign(character.style, styles);

				return character;
			});

			textContainer.removeChild(titles[i]);
			textContainer.append(...children);
		}
	};
</script>

<!-- onmouseenter={hoverHandler} -->
<!-- onmouseleave={hoverLeave} -->
<div role="figure" class="circle bg-red-600 flex justify-center items-center rounded-full">
	<!-- style="left:{$position.x}px; top:{$position.y}px;" -->
	<!-- {#if currentData.titles}
		{@render titles(currentData.titles)}
	{/if} -->
</div>

{#snippet titles(titles)}
	<div class="size-full" bind:this={textContainer}>
		{#each titles as titleText}
			<span class="title-text absolute">{titleText}</span>
		{/each}
	</div>
{/snippet}
