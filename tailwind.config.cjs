/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: [
			{
				dracula: {
					...require('daisyui/src/theming/themes')['[data-theme=dracula]'],
					primary: '#bf95f9',
					secondary: '#ef9fbc'
				}
			}
		]
	}
};
