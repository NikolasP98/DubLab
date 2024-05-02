<script>
	import { onMount } from 'svelte';
	import Logo from '$lib/assets/logo.png';

	let textContainer;

	onMount(() => {
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
								" class="char">${char}</span>`;
				})
				.join('');
		}
	});
</script>

<header class="title-section">
	<img src={Logo} alt="" />
</header>

<div bind:this={textContainer} id="main-circle">
	<span class="text">Rory Wilson</span>
	<span class="text">Evisbeats</span>
</div>

<style>
	.title-section {
		display: flex;
		align-items: center;
		margin-bottom: 20px;
	}

	.title-section > img {
		max-width: 100px;
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

	/* .char {
		position: absolute;
		left: 50%;
		font-size: 1.2rem;
	} */
</style>
