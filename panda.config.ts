import { defineConfig, defineGlobalStyles } from "@pandacss/dev";

const globalCss = defineGlobalStyles({
	"html, body": {
		bg: "gray.100",
		lineHeight: "1.5",
	},
});

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	jsxFramework: "react",

	// Where to look for your css declarations
	include: ["./src/**/*.{js,jsx,ts,tsx}", "./src/**/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {},
	},

	// The output directory for your css system
	outdir: "styled-system",

	// Globals
	globalCss,
});
