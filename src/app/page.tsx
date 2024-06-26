import { css } from "../../styled-system/css";
import { VStack, Flex, Grid } from "../../styled-system/jsx";
import Button from "./components/Button";
import Card from "./components/Card";
import { Typography } from "./components/Typography";

export default function Home() {
	return (
		<>
			<main className={css({ marginBlockStart: "8" })}>
				<VStack gap={8}>
					<Typography level="hm" as="h1">
						This text should have headline1 text style
					</Typography>
					<h1 className={css({ fontSize: "2xl", lg: { fontWeight: "bold" } })}>Hello 🐼!</h1>
					<Flex direction="row" align="center" gap={4}>
						<Button variant="primary">Primary Button</Button>
						<Button variant="secondary">Secondary Button</Button>
					</Flex>
				</VStack>
				<Grid columns={3} gap={6} className={css({ margin: "2rem auto", maxWidth: "4xl" })}>
					<Card title="Card Title" paragraph="This is a sample paragraph for the card component." linkText="Read more" linkUrl="#" />
					<Card title="Card Title" paragraph="This is a sample paragraph for the card component." linkText="Read more" linkUrl="#" />
					<Card
						title="Card Title"
						paragraph="This is a sample paragraph for the card component. This is a sample paragraph for the card component. This is a sample paragraph for the card component. This is a sample paragraph for the card component."
						linkText="Read more"
						linkUrl="#"
					/>
					<Card title="Card Title" paragraph="This is a sample paragraph for the card component." linkText="Read more" linkUrl="#" />
					<Card title="Card Title" paragraph="This is a sample paragraph for the card component." linkText="Read more" linkUrl="#" />
					<Card title="Card Title" paragraph="This is a sample paragraph for the card component." linkText="Read more" linkUrl="#" />
				</Grid>
			</main>
		</>
	);
}
