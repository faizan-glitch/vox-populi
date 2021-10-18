<div class="hero min-h-full bg-base-200">
	<div class="flex-col justify-center hero-content lg:flex-row">
		<div class="text-center lg:text-left">
			<h1 class="mb-5 text-5xl font-bold">Simple Poll</h1>
			<p class="mb-5">
				A simple Polls and Surveys app created by Faizan over the weekend with the purpose of
				learning SvelteKit, DaisyUI and Tailwind CSS. 
			</p>
            <p class="mb-5">
                Access thousands of Public Domain Polls and
				Surveys.
            </p>            
		</div>
		<div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
					<input type="text" placeholder="password" class="input input-bordered" />
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label class="label">
						<a href="/" class="label-text-alt">Forgot password?</a>
					</label>
				</div>
				<div class="form-control mt-6">
					<input type="button" value="Login" class="btn btn-primary" />
				</div>
			</div>
		</div>
	</div>
</div>
