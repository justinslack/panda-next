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
	borderRadius: "8",
	padding: "4",
	maxWidth: "72",
	boxShadow: "md",
	transition: "box-shadow 0.3s ease",
	"&:hover": {
		boxShadow: "lg",
	},
});

const titleStyles = css({
	fontSize: "lg",
	marginBottom: "2",
});

const paragraphStyles = css({
	fontSize: "md",
	marginBottom: "4",
});

const linkStyles = css({
	color: "green.700",
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
