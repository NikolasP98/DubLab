<script>
	import '../app.css';
	import Logo from '$lib/assets/logo.png';
	import Cursor from '$lib/components/Cursor.svelte';
</script>

<nav>
	<ul>
		<li>
			<!-- <img src={Logo} alt="" /> -->
			<a href="/">Into Infinity</a>
		</li>
		<li>
			<a href="/app">goto app</a>
		</li>
	</ul>
</nav>

<div class="page-content">
	<slot />
</div>

<Cursor />

<style>
	:global(body) {
		font-family: monospace;
	}

	nav {
		border-bottom: black 1px solid;
	}

	nav img {
		max-width: 100px;
	}

	nav > ul {
		list-style-type: none;

		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	nav a {
		/* background-color: red; */
	}

	ul > li {
	}

	.page-content {
		width: 100%;
		min-height: 90vh;
		height: 100%;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
