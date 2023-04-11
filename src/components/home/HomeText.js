import {
	Box,
	Button,
	Card,
	CardBody,
	CardFooter,
	Heading,
	Image,
	Stack,
	Text,
} from "@chakra-ui/react";
import { heading, text } from "./homeContent";

export default function HomeText() {
	const publicFolderUrl = process.env.PUBLIC_URL;

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
				{text.map((paragraph) => (
					<Card
						direction={{ base: "column", sm: "row" }}
						overflow="hidden"
						variant="outline"
					>
						<Image
							objectFit="cover"
							maxW={{ base: "100%", sm: "200px" }}
							src={publicFolderUrl + paragraph.src}
							alt={paragraph.destination}
						/>

						<Stack>
							<CardBody>
								<Heading size="md">
									{paragraph.destination}
								</Heading>

								<Text py="2">{paragraph.content}</Text>
							</CardBody>

							{/* <CardFooter>
								<Button variant="solid" colorScheme="blue">
									Buy Latte
								</Button>
							</CardFooter> */}
						</Stack>
					</Card>
				))}
			</Box>
		</>
	);
}
