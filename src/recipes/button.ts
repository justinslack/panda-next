import { cva } from "../../styled-system/css";

export const buttonCva = cva({
	base: {
		paddingInline: "3",
		paddingBlock: "2",
		fontSize: "md",
		border: "none",
		borderRadius: "md",
		cursor: "pointer",
		transition: "background-color 0.3s ease",
	},
	variants: {
		variant: {
			primary: {
				backgroundColor: "blue.500",
				color: "white",
				"&:hover": {
					backgroundColor: "blue.700",
				},
			},
			secondary: {
				backgroundColor: "gray.200",
				color: "gray.900",
				"&:hover": {
					backgroundColor: "gray.400",
				},
			},
		},
	},
});
