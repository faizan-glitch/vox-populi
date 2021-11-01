<script>
	import Stats from '../../components/stats.svelte';
	import { polls } from '../../stores/polls';
	import PollCard from '../../components/poll-card.svelte';
</script>

<svelte:head>
	<title>Vox Populi - Polls</title>
</svelte:head>

<Stats entityName="Polls" items={$polls} />

<div class="grid grid-cols-1 gap-4 m-5 md:grid-cols-3">
	{#each $polls as poll}
		<PollCard {poll} />
	{/each}
</div>
