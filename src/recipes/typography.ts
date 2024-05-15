import { cva, type RecipeVariantProps } from "../../styled-system/css";

export const typographyRecipe = cva({
	base: {
		color: "gray.800",
	},
	variants: {
		level: {
			hm: {
				textStyle: "headlineDefault",
			},
			hl: {
				textStyle: "headlineLarge",
			},
		},
		bold: {
			true: {
				fontWeight: "600",
			},
		},
		italic: {
			true: {
				fontStyle: "italic",
			},
		},
		underline: {
			true: {
				textDecoration: "underline",
			},
		},
	},
});

export type TypographyVariantProps = RecipeVariantProps<typeof typographyRecipe>;
