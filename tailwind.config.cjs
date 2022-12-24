/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				pl: ['Proza Libre', 'sans-serif'],
				ropa: ['Ropa Sans', 'sans-serif'],
				rubik: ['Rubik', 'sans-serif']
			}
		}
	},
	plugins: []
};
