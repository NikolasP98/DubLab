<script>
	import Player from '$lib/assets/audioplayer.png';
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
		<button>Lorem.</button><button>Soluta?</button><button>Consequuntur?</button><button
			>Consectetur!</button
		><button>Quisquam.</button><button>Reiciendis.</button><button>Id!</button><button>Quos?</button
		><button>Ipsam.</button><button>Exercitationem!</button><button>Quam.</button><button
			>Qui.</button
		><button>Maiores?</button><button>Obcaecati.</button><button>Adipisci.</button><button
			>Fuga?</button
		><button>Dolore?</button><button>Ad!</button><button>Dicta.</button><button>Laborum.</button
		><button>Fuga?</button><button>Consequuntur.</button><button>Quidem.</button><button
			>Quidem.</button
		><button>Voluptatem.</button><button>Numquam!</button><button>Magnam.</button><button
			>Autem.</button
		><button>Deserunt.</button><button>At!</button><button>Impedit.</button><button
			>Distinctio.</button
		><button>Obcaecati!</button><button>Molestias?</button><button>Voluptas.</button><button
			>Illum!</button
		><button>Nesciunt.</button><button>Quo.</button><button>Vitae?</button><button>At.</button>
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
	}

	.player img {
		width: 100%;
		cursor: pointer;
	}
</style>
