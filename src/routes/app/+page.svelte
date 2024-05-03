<script>
	import Player from '$lib/assets/audioplayer.png';

	const getEntries = async () => {
		const entries = await (await fetch('https://dummyjson.com/products?select=title,price')).json();
		console.log(entries);
		return entries;
	};
</script>

<div class="page-content">
	<div class="options-bar">
		<div class="title-text">
			<span class="main-title">INTO INFINITY</span>
			<span class="second-title">AUDIO MEGA MIXER</span>
		</div>

		<div class="options">
			<button>Lorem.</button><button>Nisi!</button><button>Quae.</button><button>Natus?</button
			><button>Deleniti.</button><button>Modi.</button><button>Ullam.</button><button>Earum.</button
			><button>Consequatur?</button>
		</div>
	</div>

	<div class="content-section">
		{#await getEntries()}
			<pre>loading...</pre>
		{:then entries}
			{#each entries.products as entry}
				<button>{entry.title}</button>
			{/each}
		{:catch error}
			<p>bad call</p>
		{/await}
	</div>
</div>

<div class="player">
	<img src={Player} alt="" />
</div>

<style>
	.page-content {
		color: white;
		padding: 20px;
	}

	button {
		color: white;
		background-color: transparent;
		padding: 10px 20px;

		border: green 2px solid;
		border-radius: 50px;
	}

	button:hover {
		background-color: green;
		color: black;
		cursor: pointer;
	}

	.title-text {
		display: flex;
		flex-direction: column;
	}
	.title-text .main-title {
		font-size: 2rem;
	}
	.title-text .second-title {
		/* font-size: 2rem; */
	}

	.options-bar {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-bottom: 50px;

		background-color: black;
		border-bottom: white 1px solid;
	}

	.options-bar .options {
		margin-bottom: 10px;
		display: flex;
		justify-content: space-between;
		overflow-x: scroll;

		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}

	/* Hide scrollbar for Chrome, Safari and Opera */
	.options-bar .options::-webkit-scrollbar {
		display: none;
	}

	.content-section {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;

		gap: 50px;
	}

	.content-section button {
		width: 200px;
	}

	.player {
		position: fixed;
		bottom: 0;
		left: 0;
		background-color: black;
	}

	.player img {
		width: 100%;
		/* height: 100%; */
		cursor: pointer;
	}
</style>
