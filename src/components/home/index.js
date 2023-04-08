import { Box, Text } from "@chakra-ui/react";
import Navbar from "components/layout/Navbar";

export default function Home() {
	return (
		<>
			<Navbar />
			<Box maxW="600px" mx="auto" py="20">
				<Text>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Nulla unde autem voluptatum explicabo, suscipit delectus
					iure quo? Asperiores ad dolores, voluptates fugit sapiente
					eos ex, aspernatur velit laudantium nihil nisi.
				</Text>
			</Box>	
		</>
	);
}
