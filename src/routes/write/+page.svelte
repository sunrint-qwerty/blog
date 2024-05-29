<script lang="ts">
	import { write } from '$lib/api/write';

	let title = '';
	let category = '';
	let content = '';

	const submit = async () => {
		try {
			await write({ title, category, content });
		} catch (e) {
			alert(e as any);
		}
	};
</script>

<div class="h-screen flex flex-col justify-center items-center">
	<input class="w-2/3 input input-bordered" type="text" placeholder="Title" bind:value={title} />
	<input
		class="w-2/3 input input-bordered mt-2"
		type="text"
		placeholder="Category"
		bind:value={category}
	/>
	<textarea
		class="w-2/3 h-2/3 textarea textarea-bordered mt-2"
		placeholder="Content"
		bind:value={content}
	></textarea>

	<button class="btn btn-primary mt-4 w-2/3" on:click={submit}>Submit</button>
</div>
