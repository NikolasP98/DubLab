<script lang="ts">
	import { trackStore } from '$lib/stores/trackStore.svelte';
	import { player } from '$lib/stores/playerStore.svelte';

	let inputTypes = $derived(trackStore.inputTypes);
	let genres = $derived(trackStore.trackGenres);
	let activeFilters = $derived(player.filters);
</script>

<div class="flex justify-start overflow-x-scroll gap-4 pl-4 no-scrollbar">
	{#if inputTypes}
		{#each inputTypes as input}
			<button
				onclick={() => player.toggleFilter('inputs', input)}
				class={`
						min-w-min text-nowrap rounded-full
						border-[#90ee8f] border-solid border-2 px-4 py-0.5
						hover:bg-[#90ee8f] hover:text-black hover:cursor-pointer
						${activeFilters.inputs.some((filter) => filter === input) ? 'text-black bg-[#90ee8f]' : ''}
						
						`}>{input}</button
			>
		{/each}
	{/if}
</div>

<div class="flex justify-start mb-4 overflow-x-scroll gap-4 pl-4 no-scrollbar">
	{#if genres}
		{#each genres as genre}
			<button
				onclick={() => player.toggleFilter('genres', genre)}
				class={`
						min-w-min text-nowrap rounded-full
						border-[#90ee8f] border-solid border-2 px-4 py-0.5
						hover:bg-[#90ee8f] hover:text-black hover:cursor-pointer
						${activeFilters.genres.some((filter) => filter === genre) ? 'text-black bg-[#90ee8f]' : ''}
						
					`}>{genre}</button
			>
		{/each}
	{/if}
</div>
