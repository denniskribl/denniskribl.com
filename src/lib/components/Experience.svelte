<script lang="ts">
	interface Experience {
		title: string;
		at: string;
		duration: string;
	}

	const experience: Experience[] = [
		{
			title: 'Cloud Site Reliability Engineer',
			at: '???',
			duration: '2023 - present'
		},
		{
			title: 'DevOps Engineer / Full Stack Engineer',
			at: 'immowelt / AVIV Group',
			duration: '2018 - 2023'
		},
		{
			title: 'Linux System Administrator',
			at: 'immowelt',
			duration: '2017 - 2018'
		},
		{
			title: 'IT specialist/systems integration apprentice',
			at: 'immowelt',
			duration: '2014 - 2017'
		}
	];
</script>

<div class="w-full overflow-y-auto" data-testid="experience">
	<h1 class="lg:text-5xl text-2xl font-bold">Experience</h1>
	<ul class="steps steps-vertical py-6">
		{#each experience as exp}
			<li data-content="●" class="step step-secondary">
				<div class="flex items-center lg:gap-10 gap-6 py-2 lg:py-6 w-full">
					<div>
						<p data-testid="exp-at" class="text-left pb-1 text-secondary/90">
							{exp.at}
						</p>
						<p data-testid="exp-title" class="lg:text-2xl text-xl text-left">
							{exp.title}
						</p>
					</div>
					<p
						data-testid="exp-duration"
						class="text-right text-xs text-secondary/50 pt-8 ml-auto italic"
					>
						({exp.duration})
					</p>
				</div>
			</li>
		{/each}
	</ul>
</div>
