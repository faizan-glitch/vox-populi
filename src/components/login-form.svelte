<script lang="ts">
	import DangerAlert from './danger-alert.svelte';
	import { supabase } from '../supabase';

	let showAlert = false;
	let email: string = '';
	let password: string = '';
	let errorMessage: string = '';

	$: toggleAlert = () => (showAlert = !showAlert);
	const login = async () => {
		try {
			const result = await supabase.auth.signIn({
				email,
				password
			});
			if (result.error) {
				errorMessage = result.error.message;
				toggleAlert();
				setTimeout(() => {
					toggleAlert();
				}, 3000);
			}
			console.log(result);
		} catch (error) {
			console.log('error');
		}
	};
</script>

{#if showAlert}
	<DangerAlert message={errorMessage} />
{/if}
<div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-5">
	<div class="card-body">
		<div class="form-control">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="label">
				<span class="label-text">Email</span>
			</label>
			<input type="text" placeholder="email" class="input input-bordered" bind:value={email} />
		</div>
		<div class="form-control">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="label">
				<span class="label-text">Password</span>
			</label>
			<input
				type="password"
				placeholder="password"
				class="input input-bordered"
				bind:value={password}
			/>
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="label">
				<a href="/" class="label-text-alt">Forgot password?</a>
			</label>
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="label">
				<a href="/" class="label-text-alt">Don't have an account? Signup.</a>
			</label>
		</div>
		<div class="form-control mt-6">
			<input type="button" value="Login" class="btn btn-primary" on:click={login} />
		</div>
	</div>
</div>
