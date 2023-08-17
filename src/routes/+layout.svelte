<script>
	import '$lib/global.css';
	import { preparePageTransition } from '$lib/utils/page-transition.ts';
	import Avatar from '../lib/components/Avatar.svelte';
	import Navigation from '../lib/components/Navigation.svelte';
	import { page } from '$app/stores';
	import Particles from '../lib/components/Particles.svelte';
	import { useMediaQuery } from 'svelte-breakpoints';

	const isMobile = useMediaQuery('(max-width: 600px)');

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
	};
</script>

<div class="w-full h-full flex flex-col z-10">
	{#if $isMobile}
		<Particles size={1} count={70} />
	{:else}
		<Particles />
	{/if}
	<div class="navbar bg-base-200">
		<div class="flex flex-1 justify-center items-center">
			<Navigation activeTab={activeTab($page.url.pathname)} />
		</div>
	</div>
	<div class="hero flex-1 bg-base-200">
		{#if $page.url.pathname === '/'}
			<div class="hero-content flex-col gap-16 w-full">
				<Avatar />
				<div class="content">
					<slot />
				</div>
			</div>
		{:else}
			<div class="hero-content flex-col gap-16 w-full lg:flex-row">
				<div class="lg:w-1/4">
					<Avatar />
				</div>
				<div class="lg:w-1/2 content">
					<slot />
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	.content {
		view-transition-name: content;
	}
</style>
