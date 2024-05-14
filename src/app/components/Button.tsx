// src/components/Button.tsx
import { css } from "../../../styled-system/css";

type ButtonProps = {
	variant: "primary" | "secondary";
	children: React.ReactNode;
};

const buttonStyles = css({
	padding: "8px 16px",
	fontSize: "16px",
	border: "none",
	borderRadius: "5px",
	cursor: "pointer",
	transition: "background-color 0.3s ease",
});

const primaryStyles = css({
	backgroundColor: "#0070f3",
	color: "white",
	"&:hover": {
		backgroundColor: "#005bb5",
	},
});

const secondaryStyles = css({
	backgroundColor: "#eaeaea",
	color: "#333",
	"&:hover": {
		backgroundColor: "#cacaca",
	},
});

const Button: React.FC<ButtonProps> = ({ variant, children }) => {
	const variantStyles = variant === "primary" ? primaryStyles : secondaryStyles;

	return <button className={`${buttonStyles} ${variantStyles}`}>{children}</button>;
};

export default Button;
