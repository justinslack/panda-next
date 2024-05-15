import { buttonCva } from "../../recipes/button";

type ButtonProps = {
	variant: "primary" | "secondary";
	children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ variant, children }) => {
	return <button className={buttonCva({ variant })}>{children}</button>;
};

export default Button;
