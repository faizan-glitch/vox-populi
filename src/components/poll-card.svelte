<script>
	export let poll;
	const colors = [
		'progress-primary',
		'progress-secondary',
		'progress-warning',
		'progress-error',
		'progress-accent',
		'progress-info',
		'progress-success'
	];
</script>

<div class="card text-center shadow-md">
	<figure class="px-10 pt-10">
		<img src="https://picsum.photos/id/1005/400/250" class="rounded-xl" alt="#" />
	</figure>
	<div class="card-body">
		<h2 class="card-title">{poll.title}</h2>
		{#each poll.options as option, idx}
			<p class="mb-4"> <span class="font-semibold">{option}</span> ({poll.responses[idx]} votes)</p>
			<progress
				class="progress {colors[Math.floor(Math.random() * 7)]} mb-4"
				value={poll.responses[idx]}
				max={Math.max(...poll.responses)}
			/>
		{/each}
		<div class="justify-center card-actions">
            {#if poll.active}
			    <button class="btn btn-outline btn-accent">Vote Now</button>
                {:else}
			    <button class="btn btn-accent" disabled >Vote Now</button>
            {/if}
		</div>
	</div>
</div>
