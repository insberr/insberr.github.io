module.exports = {
	purge: {
		enabled: true,
		content: [
			'./**/*.html'
		]
	},
	darkMode: 'class',
	theme: {
		fontFamily: {
			sans: ['Arial', 'sans-serif'],
			display: ['Arial', 'sans-serif'],
			body: ['Arial', 'sans-serif']
		}
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('tailwindcss'),
		require('autoprefixer'),
	],
}
