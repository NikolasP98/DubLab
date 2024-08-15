<script>
	import { trackStore } from '$lib/stores/trackStore.svelte';

	let inputTypes = $derived(trackStore.inputTypes);
</script>

<div class="flex justify-start mb-2 overflow-x-scroll gap-4 pl-4 no-scrollbar">
	{#if inputTypes}
		{#each inputTypes as category}
			{@render pill(category)}
		{/each}
	{/if}
</div>

{#snippet pill(/** @type {string} */ category)}
	<button
		class="	text-white bg-transparent min-w-min text-nowrap rounded-full
border-[#90ee8f] border-solid border-2 px-4 py-0.5
 hover:bg-[#90ee8f] hover:text-black hover:cursor-pointer">{category}</button
	>
{/snippet}
