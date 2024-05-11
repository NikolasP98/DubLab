<script>
	import '../app.css';
	import Logo from '$lib/assets/logo.png';
	import Cursor from '$lib/components/Cursor.svelte';
</script>

<nav class="border-b-2 border-solid border-black fixed top-0 w-full z-10">
	<ul class="list-none flex items-center justify-between">
		<li>
			<!-- <img src={Logo} alt="" /> -->
			<a href="/">Into Infinity</a>
		</li>
		<li>
			<a href="/app">goto app --></a>
		</li>
	</ul>
</nav>

<slot />

<Cursor />

<style>
	:global(body) {
		font-family: monospace;
	}
</style>
