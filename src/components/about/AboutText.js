import { Box, Heading, Text } from "@chakra-ui/react";
import { heading, text } from "./aboutContent";

export default function AboutText() {
	return (
		<>
			<Box maxW="900px" mx="auto" py="20">
				<Heading
					as="h1"
					fontSize="2xl"
					fontWeight="bold"
					mb="4"
					textAlign="justify"
				>
					{heading}
				</Heading>

				{text.map((paragraph, i) => (
					<Text
						key={paragraph.id}
						as="p"
						fontSize="md"
						lineHeight="tall"
						css={{ textIndent: "1em" }}
						textAlign="justify"
					>
						{paragraph.content}
					</Text>
				))}
			</Box>
		</>
	);
}
