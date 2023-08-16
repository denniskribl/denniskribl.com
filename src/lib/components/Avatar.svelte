<script>
	import me from '$lib/images/me.jpg?w=512&format=avif';
</script>

<div class="avatar">
	<div class="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 w-48 lg:w-64">
		<img alt="me" src={me} />
	</div>
</div>

<style>
	.avatar {
		view-transition-name: avatar;
	}
</style>
