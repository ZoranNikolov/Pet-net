import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	Textarea,
} from "@chakra-ui/react";
import TextareaAutosize from "react-textarea-autosize";
import { Controller, useForm } from "react-hook-form";
import { useEditPost } from "hooks/posts";

export default function EditPost({ post, isOpen, onClose }) {
	const { text } = post;
	const { control, handleSubmit } = useForm({ defaultValues: { text } });
	const { editPost } = useEditPost();

	function handleEditPost(data) {
		editPost(post, data.text);
		onClose();
	}

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Edit your post</ModalHeader>
				<form onSubmit={handleSubmit(handleEditPost)}>
					<Controller
						name="text"
						control={control}
						rules={{ required: true }}
						render={({ field }) => (
							<Textarea
								as={TextareaAutosize}
								resize="none"
								mt="5"
								minRows={3}
								value={field.value}
								onChange={field.onChange}
							/>
						)}
					/>
					<ModalFooter gap="3">
						<Button
							colorScheme="blue"
							type="submit"
							loadingText="Loading"
						>
							Save
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
