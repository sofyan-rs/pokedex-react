/** @type {import('tailwindcss').Config} */ 
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				'poppins': ['Poppins', 'sans-serif'] 
			},
			colors: {
				'main-blue': '#072acb',
				'bright-yellow': '#fdd85d',
				'orange': '#ff844f',
				'pinky-red': '#f14b3d',
				'green': '#60d394',
				'light-gray': '#f8f9fa',
				'really-gray': '#595f65',
				'grass': '#16c172',
				'fire': '#ef271b',
				'water': '#4361ee',
				'poison': '#6e44ff',
				'bug': '#059669',
				'normal': '#c18cba',
				'fighting': '#885629',
				'flying': '#8b9cad',
				'ground': '#885629',
				'rock': '#63320b',
				'ghost': '#9a54a1',
				'steel': '#73e2a7',
				'electric': '#ffbf00',
				'psychic': '#db00b6',
				'ice': '#4361ee',
				'dragon': '#2ec4b6',
				'dark': '#434649',
				'fairy': '#ee4268',
			},
		},
	},
	plugins: [],
}