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
		extend: {
			textStyles: {
				headlineDefault: {
					description:
						"In the type scale, headlines span from a range of 1 through 6. Headlines are the largest text on the screen, reserved for short, important text or numerals.",
					value: {
						fontWeight: "300",
						fontSize: "4rem",
						lineHeight: "7rem",
						letterSpacing: "-0.015em",
					},
				},
				headlineLarge: {
					description: "Oversized headlines.",
					value: {
						fontWeight: "300",
						fontSize: "5rem",
						lineHeight: "1.5",
						letterSpacing: "-0.005em",
					},
				},
			},
		},
	},

	// The output directory for your css system
	outdir: "styled-system",

	// Globals
	globalCss,
});
