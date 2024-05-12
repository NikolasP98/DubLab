<script>
	let { children } = $props();
</script>

<div class="page-content">
	{#if children}
		{@render children()}
	{/if}
</div>

<style>
	.page-content {
		background-color: #121212;
		min-height: 100vh;
		width: 100%;
		border-radius: 5px;
	}
</style>
