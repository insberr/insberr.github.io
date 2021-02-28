module.exports = {
	purge: {
		enabled: true,
		content: ['./**/*.html']
	},
	darkMode: 'class',
	plugins: [
		require('tailwindcss'),
		require('autoprefixer'),
	],
}
