import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
} from "@chakra-ui/react";
import { useDeleteComment } from "hooks/comments";
import { useForm } from "react-hook-form";

export default function DeleteComment({ commentId, isOpen, onClose }) {
	const { deleteComment, isLoading: deleteLoading } =
		useDeleteComment(commentId);
	const { handleSubmit } = useForm();

	function handleDeleteComment() {
		deleteComment();
		onClose();
	}

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>
					Are you sure you want to delete your comment?
				</ModalHeader>
				<form onSubmit={handleSubmit(handleDeleteComment)}>
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
