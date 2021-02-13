module.exports = {
	purge: {
		enabled: true,
		content: ['./**/*.html']
	},
	darkMode: 'class',
	theme: {
		fontFamily: {
			display: ['Roboto', 'Arial', 'sans-serif'],
			body: ['Noto Sans JP', 'Arial', 'sans-serif'],
			noto: ['Noto Sans JP', 'Arial', 'sans-serif'],
			robo: ['Roboto', 'Arial', 'sans-serif']
		}
	},
	plugins: [
		require('tailwindcss'),
		require('autoprefixer'),
	],
}
