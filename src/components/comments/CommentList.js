import { Box } from "@chakra-ui/react";
import { useComments } from "hooks/comments";
import Comment from "./Comment";
import { useState } from "react";
import DeleteComment from "./DeleteComment";

export default function CommentList({ post }) {
	const { id } = post;
	const { comments, isLoading } = useComments(id);
	const [isDeleteCommentModalOpen, setIsDeleteCommentModalOpen] =
		useState(false);
	const closeDeleteCommentModalHandler = () => {
		setIsDeleteCommentModalOpen(false);
	};

	if (isLoading) return "Loading...";

	return (
		<>
			{comments.map((comment, i) => (
				<Box key={comment.id}>
					<Comment
						comment={comment}
						setIsDeleteCommentModalOpen={
							setIsDeleteCommentModalOpen
						}
					/>

					{isDeleteCommentModalOpen && (
						<DeleteComment
							commentId={comment.id}
							isOpen={isDeleteCommentModalOpen}
							onClose={closeDeleteCommentModalHandler}
						/>
					)}
				</Box>
			))}
		</>
	);
}
