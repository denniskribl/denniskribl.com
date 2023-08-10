<script>
	const age = () => {
		const today = new Date();
		const birthDate = new Date('1997/06/10');
		let age = today.getFullYear() - birthDate.getFullYear();
		const m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}
		return age;
	};
</script>

<div class="w-full">
	<h1 class="lg:text-5xl text-2xl font-bold">About me</h1>
	<ul class="list-disc py-6 ml-6 lg:text-2xl text-xl">
		<li>{age()} years old</li>
		<li>From Nuremberg, Germany</li>
		<li>Cloud & serverless enthusiast</li>
		<li>Developer at heart</li>
		<li>DevOps evangelist</li>
		<li>Gaming</li>
		<li>Anime & TV shows</li>
		<li>Languages</li>
	</ul>
	<p class="lg:text-2xl text-xl font-bold my-2">Skills:</p>
	<div class="badges">
		<div class="badge my-2 badge-secondary badge-lg">Amazon Web Services</div>
		<div class="badge my-2 badge-secondary badge-lg">TypeScript</div>
		<div class="badge my-2 badge-secondary badge-lg">Terraform</div>
		<div class="badge my-2 badge-secondary badge-lg">Datadog</div>
		<div class="badge my-2 badge-secondary badge-lg">Serverless</div>
		<div class="badge my-2 badge-secondary badge-lg">Angular</div>
		<div class="badge my-2 badge-secondary badge-lg">React</div>
		<div class="badge my-2 badge-secondary badge-lg">Python</div>
		<div class="badge my-2 badge-secondary badge-lg">Docker</div>
		<div class="badge my-2 badge-secondary badge-lg">GitHub Actions</div>
		<div class="badge my-2 badge-secondary badge-lg">GitLab CI</div>
		<div class="badge my-2 badge-secondary badge-lg">Cypress</div>
		<div class="badge my-2 badge-secondary badge-lg">Jest</div>
	</div>
</div>
