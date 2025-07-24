/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'prime-dark': '#0a192f',
				'prime-accent': '#0ea5e9',
				'prime-light': '#f1f5f9',
				'prime-text': '#94a3b8',
                'prime-card': '#112240'
			},
            // AÑADIMOS ESTO PARA EL EFECTO DE RESPLANDOR
            boxShadowColor: {
                'prime-accent': '#0ea5e9',
            },
		},
	},
	plugins: [],
}