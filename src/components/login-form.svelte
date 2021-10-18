<script>
	import DangerAlert from './danger-alert.svelte';

	let showAlert = false;
	$: toggleAlert = () => (showAlert = !showAlert);
</script>
{#if showAlert}
		<DangerAlert />
	{/if}
<div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-5">
	
	<div class="card-body">
		<div class="form-control">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="label">
				<span class="label-text">Email</span>
			</label>
			<input type="text" placeholder="email" class="input input-bordered" />
		</div>
		<div class="form-control">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="label">
				<span class="label-text">Password</span>
			</label>
			<input type="password" placeholder="password" class="input input-bordered" />
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="label">
				<a href="/" class="label-text-alt">Forgot password?</a>
			</label>
		</div>
		<div class="form-control mt-6">
			<input type="button" value="Login" class="btn btn-primary" on:click={toggleAlert} />
		</div>
	</div>
</div>
