import { cva } from "../../styled-system/css";

export const buttonCva = cva({
	base: {
		padding: "8px 16px",
		fontSize: "16px",
		border: "none",
		borderRadius: "5px",
		cursor: "pointer",
		transition: "background-color 0.3s ease",
	},
	variants: {
		variant: {
			primary: {
				backgroundColor: "#0070f3",
				color: "white",
				"&:hover": {
					backgroundColor: "#005bb5",
				},
			},
			secondary: {
				backgroundColor: "#eaeaea",
				color: "#333",
				"&:hover": {
					backgroundColor: "#cacaca",
				},
			},
		},
	},
});
