<script lang="ts">
	import '../app.css';

	import Navbar from '../components/navbar.svelte';
</script>

<div class="rounded-lg shadow drawer h-screen">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />

	<div class="flex flex-col drawer-content bg-base-200">
		<Navbar />

		<slot />
	</div>
	<div class="drawer-side">
		<label for="my-drawer-3" class="drawer-overlay" />
		<ul class="p-4 overflow-y-auto menu w-80 bg-base-100 ">
			<li>
				<a href="/">Home</a>
			</li>
			<li>
				<a href="/polls">Polls</a>
			</li>
			<li>
				<a href="/surveys">Surveys</a>
			</li>
		</ul>
	</div>
</div>
