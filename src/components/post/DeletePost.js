import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
} from "@chakra-ui/react";
import { useDeletePost } from "hooks/posts";
import { useForm } from "react-hook-form";

export default function DeletePost({ postId, isOpen, onClose }) {
	const { deletePost } = useDeletePost(postId);
	const { handleSubmit } = useForm();

	function handleDeletePost() {
		deletePost();
		onClose();
	}

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>
					Are you sure you want to delete your post?
				</ModalHeader>
				<form onSubmit={handleSubmit(handleDeletePost)}>
					<ModalFooter gap="3">
						<Button
							colorScheme="red"
							type="submit"
							loadingText="Loading"
						>
							Delete
						</Button>
						<Button colorScheme="gray" onClick={onClose}>
							Close
						</Button>
					</ModalFooter>
				</form>
			</ModalContent>
		</Modal>
	);
}
