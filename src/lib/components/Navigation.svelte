<script>
	export let activeTab = 0;
</script>

<div data-sveltekit-preload-data="off" class="tabs tabs-boxed flex">
	<a href="/" class="tab" class:tab-active={activeTab === 0}>Home</a>
	<a href="/about" class="tab" class:tab-active={activeTab === 1}>About</a>
	<a href="/experience" class="tab" class:tab-active={activeTab === 2}>Experience</a>
	<a href="/contact" class="tab" class:tab-active={activeTab === 3}>Contact</a>
</div>
