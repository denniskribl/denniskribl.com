<script>
	import Avatar from './Avatar.svelte';
	import Navigation from './Navigation.svelte';
</script>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content w-full flex-col lg:flex-row gap-12">
		<Avatar />
		<div class="w-full">
			<h1 class="lg:text-5xl text-2xl font-bold">Experience</h1>
			<ul class="steps steps-vertical py-6">
				<li data-content="●" class="step step-secondary">
					<p class="lg:text-2xl text-xl py-2 lg:py-6 text-left">
						Cloud Site Reliability Engineer @ ??? (2023 - present)
					</p>
				</li>
				<li data-content="●" class="step step-secondary">
					<p class="lg:text-2xl text-xl py-2 lg:py-6 text-left">
						DevOps Engineer @ immowelt / AVIV Group (2018 - 2023)
					</p>
				</li>
				<li data-content="●" class="step step-secondary">
					<p class="lg:text-2xl text-xl py-2 lg:py-6 text-left">
						Linux System Administrator @ immowelt (2017 - 2018)
					</p>
				</li>
				<li data-content="●" class="step step-secondary">
					<p class="lg:text-2xl text-xl py-2 lg:py-6 text-left">
						IT Specialist/systems integration apprentice @ immowelt (2014 - 2017)
					</p>
				</li>
			</ul>
			<div class="flex justify-center items-center lg:items-start lg:justify-start">
				<Navigation activeTab={2} />
			</div>
		</div>
	</div>
</div>
