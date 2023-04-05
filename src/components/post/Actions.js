import { Flex, IconButton } from "@chakra-ui/react";
import { useAuth } from "hooks/auth";
import { FaComment, FaPaw, FaRegComment, FaTrashAlt } from "react-icons/fa";
import { IoPawOutline } from "react-icons/io5";
import { useToggleLike, useDeletePost } from "hooks/posts";
import { Link } from "react-router-dom";
import { PROTECTED } from "lib/routes";

export default function Actions({ post }) {
	const { id, likes } = post;
	const { user, isLoading: userLoading } = useAuth();

	const isLiked = likes.includes(user?.id);

	const { toggleLike, isLoading: likeLoading } = useToggleLike({
		id,
		isLiked,
		uid: user?.id,
	});

	const {deletePost, isLoading: deleteLoading} = useDeletePost(id);

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
					// isLoading={likeLoading || userLoading}
					size="md"
					colorScheme="teal"
					variant="ghost"
					icon={<FaRegComment />}
					isRound
				/>
				5
			</Flex>
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
		</Flex>
	);
}
