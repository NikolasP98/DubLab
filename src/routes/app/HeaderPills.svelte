<script>
	import { trackData } from './stores';

	const inputTypes = $derived($trackData.inputTypes);
</script>

<div class="flex justify-start mb-2 overflow-x-scroll gap-4 pl-4 no-scrollbar">
	{#each inputTypes as group}
		<button
			class="	text-white bg-transparent min-w-min text-nowrap rounded-full
		border-[#90ee8f] border-solid border-2 px-4 py-0.5
		 hover:bg-[#90ee8f] hover:text-black hover:cursor-pointer">{group}</button
		>
	{/each}
</div>
