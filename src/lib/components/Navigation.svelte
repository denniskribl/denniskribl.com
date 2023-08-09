<script>
	export let activeTab = 0;
</script>

<div class="tabs tabs-boxed flex" style:--tag="nav-{activeTab}">
	<a href="/" class="tab" class:tab-active={activeTab === 0}>Home</a>
	<a href="/about" class="tab" class:tab-active={activeTab === 1}>About</a>
	<a href="/experience" class="tab" class:tab-active={activeTab === 2}>Experience</a>
	<a href="/contact" class="tab" class:tab-active={activeTab === 3}>Contact</a>
</div>

<style>
	.tabs {
		view-transition-name: var(--tag);
	}
</style>
