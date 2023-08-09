<script>
	import Avatar from './Avatar.svelte';
	import Navigation from './Navigation.svelte';
</script>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row gap-12">
		<Avatar />
		<div>
			<h1 class="lg:text-5xl text-2xl font-bold">Hey, I'm Dennis 👋🏻</h1>
			<p class="lg:text-2xl text-xl py-6">
				Cloud Site Reliability Engineer based in Nuremberg, Germany.
			</p>
			<div class="flex justify-center items-center lg:items-start lg:justify-start">
				<Navigation />
			</div>
		</div>
	</div>
</div>
