/** @type {import('tailwindcss').Config} */
export default {
	content: [ "./src/app.html",
	"./src/**/*.{svelte,js,ts,jsx,tsx}"],

	darkMode: "class",
	theme: {
	  extend: {
		colors: {
		  "dark-background": "#0F161E"
		}
	  },
	},
	plugins: [
	require("@tailwindcss/typography")
	],
  }
  
  