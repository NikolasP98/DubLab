<script>
	import Logo from '$lib/assets/logo.png';
	let { isLoaded } = $props();
</script>

<div class="splashscreen" class:active={!$isLoaded}>
	<img src={Logo} alt="" />
	<h3>Loading...</h3>
</div>

<style>
	.splashscreen {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #8c8c8c; /* Or your desired background color */
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		z-index: 1000; /* Ensure it's on top */
		transition: opacity 2s ease;
	}

	img {
		max-width: 200px;
	}

	.splashscreen.active {
		opacity: 1;
	}

	.splashscreen:not(.active) {
		opacity: 0;
		pointer-events: none; /* Disable interaction */
	}
</style>
