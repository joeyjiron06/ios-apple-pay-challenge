import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			borderRadius: {
				ios: '3rem'
			},
			colors: {
				surface: colors.zinc,
				foreground: colors.zinc,
			}
		},
	},
	plugins: [],
}
