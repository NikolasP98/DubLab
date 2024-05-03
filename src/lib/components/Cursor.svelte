<script lang="ts">
	import { onMount } from 'svelte';
	import { spring, tweened } from 'svelte/motion';
	import Icon from '@iconify/svelte';
	import interact from 'interactjs';

	import { Vector2D } from '../utilities/Vector2D';

	let { cursorPosition = new Vector2D(-20, -20) }: { cursorPosition?: Vector2D } = $props();

	let cursor_el;

	onMount(() => {});

	// 1. ===== Cursor Properties =====
	let iconType = $state('link');

	const iconMap = {
		link: 'carbon:arrow-up-right',
		home: 'carbon:home',
		folders: 'carbon:folders',
		image: 'carbon:image',
		megaphone: 'carbon:package-text-analysis',
		max: 'carbon:maximize',
		min: 'carbon:minimize',

		drag: 'ph:hand',
		grabbing: 'ph:hand-grabbing'
	};

	// 1.1 === Main Cursor ===

	const mainCursorPosition = spring(cursorPosition, {
		stiffness: 0.5,
		damping: 1
	});

	// = Cursor Size =
	const baseCursorSize = 10;
	const cursorSize = spring(baseCursorSize, {
		stiffness: 0.2,
		damping: 0.2
	});

	// 1.2 === Action Cursor ===
	let isInteracting = false;
	let isDragging = $state(false);
	const actionCursorBaseSize = 30;
	const expandedCursorSize = actionCursorBaseSize + 5;
	let actionCursorSize = tweened(0, { duration: 70 });

	const actionCursorPosition = spring(cursorPosition, {
		stiffness: 0.15,
		damping: 0.6
	});

	// = Cursor Properties =
	let iconProperties = {
		color: '#444',
		width: '1rem',
		height: '1rem'
	};

	// 2. ===== Mouse Events =====

	// 2.1 === MOUSE DOWN / ON TOUCH ===
	const onDown = (e) => {
		if (isDragging) return;
		// e.preventDefault();
		handleInteraction(e);
		isDragging = true;
		isInteracting && actionCursorSize.set(expandedCursorSize);
	};

	// 2.2 === MOUSE MOVE / TOUCH DRAG ===
	const trackMouse = (e) => {
		// don't run on mouseup and touchend events: they fire at the same time as cursor move events
		let event = e;

		if (e.type === 'touchmove') {
			// if touch, then use touch API
			event = e.touches[0];
		} else if (e.type === 'mousedown' || e.type === 'mousemove') {
			// e.preventDefault();
			// console.log(e);
		}

		// handleInteraction(event);

		// set new cursor location
		cursorPosition.x = event.clientX;
		cursorPosition.y = event.clientY;

		mainCursorPosition.set(cursorPosition);
		// console.log($mainCursorPosition);

		actionCursorPosition.set(cursorPosition);
	};

	// 2.3 === MOUSE UP / LIFT TOUCH ===
	const onUp = (e) => {
		if (!isDragging) return;
		isDragging = false;

		handleInteraction(e);

		isInteracting && actionCursorSize.set(actionCursorBaseSize);
	};

	const onMouseLeave = (e) => {
		// isInteracting = false;
	};

	const handleInteraction = (event) => {
		const interactable = event.target.closest('.interactable');
		const cursorType = interactable?.dataset.icon;

		if (interactable !== null) {
			if (!isDragging) {
				iconType = cursorType;
				if (!isInteracting) {
					isInteracting = true;
					actionCursorSize.set(30);
				}
			}
		} else {
			if (isInteracting && !isDragging) {
				isInteracting = false;
				actionCursorSize.set(0);
			}
		}
	};

	const handleRightClick = (e) => {
		e.preventDefault();
	};
</script>

<!-- Main Cursor -->
<div
	bind:this={cursor_el}
	class="
fixed
pointer-events-none
left-0 top-0
z-[99999999999]
rounded-full bg-[black] -translate-x-1/2 -translate-y-1/2"
	style:width={`${$cursorSize}px`}
	style:height={`${$cursorSize}px`}
	style={`left: ${$mainCursorPosition.x}px; top:${$mainCursorPosition.y}px;`}
></div>

<!-- Action Cursor -->
<!-- <div
	class="
		pointer-events-none
		fixed left-0
		top-0
		z-[99999999999]
		flex
		-translate-y-full
		items-center justify-center rounded-full bg-[rgba(255,234,234)]"
	style:width={`${$actionCursorSize}px`}
	style:height={`${$actionCursorSize}px`}
	style="left: {$actionCursorPosition.x}px;
		top: {$actionCursorPosition.y}px;"
>
	<Icon icon={iconMap[iconType] || iconType || iconMap.link} {...iconProperties} />
</div> -->
<svelte:window on:mousedown={onDown} on:mousemove={trackMouse} on:touchmove={trackMouse} />

<!-- <svelte:body on:mouseleave={onMouseLeave} /> -->

<style>
	:global(html) {
		/* cursor: none; */
	}

	:global(body) {
		height: 100%;
		/* background-color: hsl(0, 0%, 2%); */
		/* color: hsl(0, 0%, 90%); */
		overflow-x: hidden;
	}

	/* :global(a),
	:global(button) {
		cursor: none;
	} */
</style>
