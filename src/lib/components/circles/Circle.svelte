<script>
	import { spring, tweened } from 'svelte/motion';
	import { Vector2D } from '$lib/utilities/Vector2D';

	let { data, primary = false } = $props();
	let textContainer;

	const rotation = tweened(0, {
		duration: 400
	});

	$effect(async () => {
		if (textContainer) {
			curveText();

			rotation.subscribe((value) => {
				const containerStyles = {
					rotate: `${value}deg`
				};
				Object.assign(textContainer.style, containerStyles);
				console.log(textContainer.style.rotate);
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

	let circlePosition = Vector2D.fromObject(data.position);

	const position = tweened(circlePosition, {
		duration: 100
	});

	const moveHandler = (e) => {
		circlePosition.add(new Vector2D(e.movementX, e.movementY));

		position.set(circlePosition);
	};

	const rotateText = (e) => {
		rotation.update((n) => n + 0.6);
	};

	const hoverHandler = (e) => {
		if (textContainer) {
			rotateText();
		}
	};

	const hoverLeave = (e) => {
		if (textContainer) {
			rotation.set(0);
		}
	};
</script>

<div
	onmousemove={moveHandler}
	onmouseenter={hoverHandler}
	onmouseleave={hoverLeave}
	role="figure"
	class="circle flex justify-center items-center rounded-full
	{primary ? ' bg-red-600' : 'absolute size-24 bg-slate-600'}"
	style="left:{$position.x}px; top:{$position.y}px;"
>
	{#if primary}
		{@render titles(data.titles)}
	{/if}
</div>

{#snippet titles(titles)}
	<div class="size-full" bind:this={textContainer}>
		{#each titles as titleText}
			<span class="title-text absolute">{titleText}</span>
		{/each}
	</div>
{/snippet}

<style>
	.circle:hover {
		/* background-color: #000; */
	}
</style>
