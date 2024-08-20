<script lang="ts">
	import { trackStore } from '$lib/stores/trackStore.svelte';
	import { player } from '$lib/stores/playerStore.svelte';

	let inputTypes = $derived(trackStore.inputTypes);
	let activeFilters = $derived(player.filters);
</script>

<div class="flex justify-start mb-2 overflow-x-scroll gap-4 pl-4 no-scrollbar">
	{#if inputTypes}
		{#each inputTypes as input}
			<button
				onclick={() => player.toggleFilter(input)}
				class={`
						 min-w-min text-nowrap rounded-full
						border-[#90ee8f] border-solid border-2 px-4 py-0.5
						hover:bg-[#90ee8f] hover:text-black hover:cursor-pointer
						${activeFilters.some((filter) => filter === input) ? 'text-black bg-[#90ee8f]' : ''}
						
					`}>{input}</button
			>
		{/each}
	{/if}
	<pre></pre>
</div>
