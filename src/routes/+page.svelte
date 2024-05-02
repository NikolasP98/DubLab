<script>
	import { onMount } from 'svelte';

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
								left: 50%;
								transform-origin: 0 200px;
								" class="char">${char}</span>`;
				})
				.join('');
		}

		// textContainer.innerHTML = textContainer.innerText
		// 	.split('')
		// 	.map((char, i) => {
		// 		// console.log(char);
		// 		return `<span style="
		// 		transform:rotate(${i * 4}deg);
		// 		position: absolute;
		// 		left: 50%;
		// 		transform-origin: 0 200px;
		// 		" class="char">${char}</span>`;
		// 	})
		// 	.join('');

		// text.innerText = 'foo';
	});
</script>

<div bind:this={textContainer} id="main-circle">
	<span class="text">Rory Wilson</span>
	<span class="text">Evisbeats</span>
</div>

<style>
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
