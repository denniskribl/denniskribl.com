<script lang="ts">
	interface Experience {
		title: string;
		at: string;
		duration: string;
		description?: string;
	}

	const experience: Experience[] = [
		{
			title: "Cloud Site Reliability Engineer",
			at: "???",
			duration: "2023 - present"
		},
		{
			title: "DevOps Engineer / Full Stack Engineer",
			at: "immowelt / AVIV Group",
			duration: "2018 - 2023",
		},
		{
			title: "Linux System Administrator",
			at: "immowelt",
			duration: "2017 - 2018",
		},
		{
			title: "IT specialist/systems integration apprentice",
			at: "immowelt",
			duration: "2014 - 2017",
		}
	]
</script>

<div class="w-full">
	<h1 class="lg:text-5xl text-2xl font-bold">Experience</h1>
	<ul class="steps steps-vertical py-6">
		{#each experience as exp}
			<li data-content="●" class="step step-secondary">
				<p class="lg:text-2xl text-xl py-2 lg:py-6 text-left">
					{exp.title} @ {exp.at} ({exp.duration})
				</p>
			</li>
		{/each}
	</ul>
</div>
