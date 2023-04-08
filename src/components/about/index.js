import { Box, Text } from "@chakra-ui/react";
import Navbar from "components/layout/Navbar";

export default function About() {
	return (
		<>
			<Navbar />
			<Box maxW="900px" mx="auto" py="20">
				<Text
					as="h1"
					fontSize="2xl"
					fontWeight="bold"
					mb="4"
				>
					Welcome to our social media platform for pets!
				</Text>
				We’re passionate about pets and we believe that they deserve a
				place where they can be celebrated and loved.
				<Text>
					Our platform is a place where pet owners can share
					information about their pets, discuss different topics, and
					connect with other pet owners. We’re dedicated to providing
					a safe and fun environment for pets and their owners alike.
					Join us today and become part of our community!
				</Text>
			</Box>
		</>
	);
}
