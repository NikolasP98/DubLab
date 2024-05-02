<script>
</script>

<nav>
	<a href="/app">goto app</a>
</nav>

<div class="page-content">
	<slot />
</div>

<style>
	:global(body) {
		font-family: monospace;
	}

	.page-content {
		width: 100%;
		min-height: 90vh;
		height: 100%;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		/* background-color: green; */
	}
</style>
