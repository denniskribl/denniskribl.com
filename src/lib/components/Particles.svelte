<script>
	import { onMount } from 'svelte';
	import { loadSlim } from 'tsparticles-slim';

	export let count = 200;
	export let size = 2;

	let ParticlesComponent;
	let loaded = false;

	onMount(async () => {
		const module = await import('svelte-particles');
		ParticlesComponent = module.default;
	});

	const particlesConfig = {
		detectRetina: true,
		particles: {
			color: {
				value: ['#fff', '#bf95f9', '#ef9fbc']
			},
			lineLinked: {
				blink: false,
				color: 'random',
				consent: false,
				distance: 40,
				enable: true,
				opacity: 0.3,
				width: 1
			},
			move: {
				attract: {
					enable: false,
					rotate: {
						x: 600,
						y: 1200
					}
				},
				bounce: false,
				direction: 'none',
				enable: true,
				outMode: 'bounce',
				random: false,
				speed: 0.5,
				straight: false
			},
			number: {
				density: {
					enable: false,
					area: 2000
				},
				limit: 0,
				value: count
			},
			opacity: {
				animation: {
					enable: true,
					minimumValue: 0.1,
					speed: 2,
					sync: false
				},
				random: false,
				value: 0.1
			},
			shape: {
				type: 'circle'
			},
			size: {
				value: size
			}
		},
		polygon: {
			move: {
				radius: 5
			},
			inlineArrangement: 'equidistant',
			scale: 0.6,
			type: 'inline',
			position: {
				x: 15,
				y: 10
			}
		}
	};

	const onParticlesLoaded = () => {
		loaded = true;
	};
	const particlesInit = async (engine) => {
		await loadSlim(engine);
	};
</script>

<svelte:component
	this={ParticlesComponent}
	id="particles"
	options={particlesConfig}
	on:particlesLoaded={onParticlesLoaded}
	{particlesInit}
	class={loaded ? 'particles particles-loaded' : 'particles'}
/>
