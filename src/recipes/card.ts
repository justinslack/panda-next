import { cva } from "../../styled-system/css";

export const cardCva = cva({
	base: {
		bg: "white",
		border: "1px solid gray.200",
		borderRadius: "lg",
		padding: "4",
		maxWidth: "72",
		boxShadow: "sm",
		transition: `box-shadow 0.3s ease`,
		"&:hover": {
			boxShadow: "lg",
		},
	},
});

export const titleCva = cva({
	base: {
		fontSize: "lg",
		marginBottom: "2",
	},
});

export const paragraphCva = cva({
	base: {
		fontSize: "md",
		marginBottom: "4",
	},
});

export const linkCva = cva({
	base: {
		color: "green.700",
		textDecoration: "none",
		"&:hover": {
			textDecoration: "underline",
		},
	},
});
