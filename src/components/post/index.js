import { Box, Text } from "@chakra-ui/react";
import Header from "./Header";
import Actions from "./Actions";
import { useState } from "react";
import EditPost from "./EditPost";

export default function Post({ post }) {
	const { text } = post;
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const closeModalHandler = () => {
		setIsEditModalOpen(false);
	};

	return (
		<Box p="2" maxW="600px" textAlign="left">
			<Box border="2px solid" borderColor="gray.100" borderRadius="md">
				<Header post={post} />
				<Box p="2" minH="100px">
					<Text wordBreak="break-word" fontSize="md">
						{text}
					</Text>
				</Box>
				<Actions post={post} setIsEditModalOpen={setIsEditModalOpen} />
				{isEditModalOpen && (
					<EditPost
						post={post}
						isOpen={isEditModalOpen}
						onClose={closeModalHandler}
					/>
				)}
			</Box>
		</Box>
	);
}
