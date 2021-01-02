module.exports = {
	purge: {
		enabled: true,
		content: [
			'./**/*.html',
			'./**/*.svg'
		]
	},
	darkMode: 'media',
	theme: {
		fontFamily: {
			sans: ['Arial', 'sans-serif'],
			display: ['Arial', 'sans-serif'],
			body: ['Arial', 'sans-serif']
		}
	},
	plugins: [
		require('tailwindcss'),
		require('autoprefixer'),
	],
}
