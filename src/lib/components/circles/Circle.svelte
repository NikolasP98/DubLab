<script>
	let { entry, position = $bindable() } = $props();

	console.log(position.y);
</script>

<div
	class="absolute flex justify-center items-center bg-slate-600 w-24 h-24 rounded-full"
	style="left:{position.x}px; top:{position.y}px;"
>
	{entry.price}
</div>
