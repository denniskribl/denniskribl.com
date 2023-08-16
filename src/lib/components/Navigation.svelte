<script>
	export let activeTab = 0;
</script>

<!--todo: enable preload once onNavigation hook landed in sveltekit (https://github.com/sveltejs/kit/pull/9605)-->
<div data-sveltekit-preload-data="off" class="tabs tabs-boxed flex">
	<a href="/" class="tab" class:tab-active={activeTab === 0}>Home</a>
	<a href="/about" class="tab" class:tab-active={activeTab === 1}>About</a>
	<a href="/experience" class="tab" class:tab-active={activeTab === 2}>Experience</a>
	<a href="/contact" class="tab" class:tab-active={activeTab === 3}>Contact</a>
</div>

<style>
	.tabs {
		view-transition-name: nav;
	}
</style>
