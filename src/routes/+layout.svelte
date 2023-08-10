<script>
	import '$lib/global.css';
	import { preparePageTransition } from '$lib/utils/page-transition.ts';
	import Avatar from "../lib/components/Avatar.svelte";
	import Navigation from "../lib/components/Navigation.svelte";
	import { page } from '$app/stores';
	preparePageTransition();

	const activeTab = (path) => {
		switch (path) {
			case '/contact':
				return 3;
			case '/experience':
				return 2;
			case '/about':
				return 1;
			case '/':
			default:
				return 0;
		}
	}
</script>
<div class="w-full h-full flex flex-col">
	<div class="navbar bg-base-200">
		<div class="flex flex-1 justify-center items-center">
			<Navigation activeTab={activeTab($page.url.pathname)}/>
		</div>
	</div>
	<div class="hero flex-1 bg-base-200">
		<div class="hero-content flex-col lg:flex-row gap-16 w-full">
			<div class="lg:w-1/4">
				<Avatar />
			</div>
			<div class="lg:w-1/2 content">
				<slot />
			</div>
		</div>
	</div>
</div>

<style>
	.content {
		view-transition-name: content;
	}
</style>
