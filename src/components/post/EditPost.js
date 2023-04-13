import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
} from "@chakra-ui/react";

export default function EditPost({ post, isOpen, onClose }) {
	const { text } = post;
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Edit your post</ModalHeader>
				<ModalBody>{text}</ModalBody>
				<ModalFooter gap="3">
					<Button colorScheme="teal">Save</Button>
					<Button colorScheme="gray" onClick={onClose}>
						Close
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}
