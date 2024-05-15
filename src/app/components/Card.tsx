import { cardCva, titleCva, paragraphCva, linkCva } from "../../recipes/card";

type CardProps = {
	title: string;
	paragraph: string;
	linkText: string;
	linkUrl: string;
};

const Card: React.FC<CardProps> = ({ title, paragraph, linkText, linkUrl }) => {
	return (
		<div className={cardCva()}>
			<h2 className={titleCva()}>{title}</h2>
			<p className={paragraphCva()}>{paragraph}</p>
			<a href={linkUrl} className={linkCva()}>
				{linkText}
			</a>
		</div>
	);
};

export default Card;
