import {
	Button,
	Divider,
	Flex,
	HStack,
	Stack,
	Text,
	useDisclosure,
} from "@chakra-ui/react";

export default function EditPost() {
	const { isOpen, onOpen, onClose } = useDisclosure();

	// if (userLoading) return "Loading...";

	return (
		<Flex>
			<Stack ml="10">
				<Text fontSize="2xl">{user.username}</Text>
				<HStack spacing="10">
					<Text color="gray.700" fontSize={["sm", "lg"]}>
						Posts: {posts.length}
					</Text>
					<Text color="gray.700" fontSize={["sm", "lg"]}>
						Likes: {likes.length}
					</Text>
					<Text color="gray.700" fontSize={["sm", "lg"]}>
						Joined: {format(user.date, "dd MMM YYY")}
					</Text>
				</HStack>
			</Stack>
			<EditProfile isOpen={isOpen} onClose={onClose} />
		</Flex>
	);
}
