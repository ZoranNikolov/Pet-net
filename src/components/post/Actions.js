import { Flex, IconButton } from "@chakra-ui/react";
import { useAuth } from "hooks/auth";
import {
	FaComment,
	FaPaw,
	FaRegComment,
	FaTrashAlt,
	FaRegEdit,
} from "react-icons/fa";
import { IoPawOutline } from "react-icons/io5";
import { useToggleLike, useDeletePost } from "hooks/posts";
import { Link } from "react-router-dom";
import { PROTECTED } from "lib/routes";
import { useComments } from "hooks/comments";

export default function Actions({ post, setIsModalOpen }) {
	const { id, likes, uid } = post;
	const { user, isLoading: userLoading } = useAuth();

	const isLiked = likes.includes(user?.id);

	const { toggleLike, isLoading: likeLoading } = useToggleLike({
		id,
		isLiked,
		uid: user?.id,
	});
	const { deletePost, isLoading: deleteLoading } = useDeletePost(id);
	const { comments, isLoading: commentsLoading } = useComments(id);
	const showModalHandler = () => {
		setIsModalOpen(true);
	};

	return (
		<Flex p="2">
			<Flex alignItems="center">
				<IconButton
					onClick={toggleLike}
					isLoading={likeLoading || userLoading}
					size="md"
					colorScheme="red"
					variant="ghost"
					icon={isLiked ? <FaPaw /> : <IoPawOutline />}
					isRound
				/>
				{likes.length}
			</Flex>
			<Flex alignItems="center" ml="2">
				<IconButton
					as={Link}
					to={`${PROTECTED}/comments/${id}`}
					size="md"
					colorScheme="teal"
					variant="ghost"
					icon={
						comments?.length === 0 ? (
							<FaRegComment />
						) : (
							<FaComment />
						)
					}
					isRound
				/>
				{comments?.length}
			</Flex>

			{!userLoading && user.id === uid && (
				<>
					<IconButton
						// ml="auto"
						onClick={showModalHandler}
						// isLoading={deleteLoading}
						size="md"
						variant="ghost"
						icon={<FaRegEdit />}
						isRound
					/>
					<IconButton
						ml="auto"
						onClick={deletePost}
						isLoading={deleteLoading}
						size="md"
						colorScheme="red"
						variant="ghost"
						icon={<FaTrashAlt />}
						isRound
					/>
				</>
			)}
		</Flex>
	);
}
