<script>
	import '$lib/global.css';
	import { preparePageTransition } from '$lib/utils/page-transition.ts';
	preparePageTransition();
</script>

<div>
	<slot />
</div>
