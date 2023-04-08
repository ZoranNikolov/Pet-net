import { Box, Text } from "@chakra-ui/react";
import Navbar from "components/layout/Navbar";

export default function Contact() {
	return (
		<>
			<Navbar />
			<Box maxW="600px" mx="auto" py="20">
				<Text>This is contact us page.</Text>
			</Box>
		</>
	);
}
