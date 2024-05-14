// src/components/Card.tsx
import { css } from "../../../styled-system/css";

type CardProps = {
	title: string;
	paragraph: string;
	linkText: string;
	linkUrl: string;
};

const cardStyles = css({
	bg: "white",
	border: "1px solid #eaeaea",
	borderRadius: "8px",
	padding: "20px",
	maxWidth: "300px",
	boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
	transition: "box-shadow 0.3s ease",
	"&:hover": {
		boxShadow: "0 6px 10px rgba(0, 0, 0, 0.15)",
	},
});

const titleStyles = css({
	fontSize: "lg",
	marginBottom: "2",
});

const paragraphStyles = css({
	fontSize: "16px",
	marginBottom: "10px",
});

const linkStyles = css({
	color: "#0070f3",
	textDecoration: "none",
	"&:hover": {
		textDecoration: "underline",
	},
});

const Card: React.FC<CardProps> = ({ title, paragraph, linkText, linkUrl }) => {
	return (
		<div className={cardStyles}>
			<h2 className={titleStyles}>{title}</h2>
			<p className={paragraphStyles}>{paragraph}</p>
			<a href={linkUrl} className={linkStyles}>
				{linkText}
			</a>
		</div>
	);
};

export default Card;
