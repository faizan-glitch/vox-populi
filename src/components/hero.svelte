<script>
	import LoginForm from './login-form.svelte'

</script>

<div class="hero min-h-full bg-base-200 block md:grid">
	<div class="flex-col justify-center hero-content lg:flex-row m-2">
		<div class="text-center lg:text-left hidden lg:block">
			<h1 class="mb-5 text-5xl font-bold">Vox Populi</h1>
			<p class="mb-5">
				A simple Polls and Surveys app created by Faizan over the weekend with the purpose of
				learning SvelteKit, DaisyUI and Tailwind CSS.
			</p>
			<p class="mb-5">Access thousands of Public Domain Polls and Surveys.</p>
		</div>
		
		<LoginForm></LoginForm>
	</div>
</div>
