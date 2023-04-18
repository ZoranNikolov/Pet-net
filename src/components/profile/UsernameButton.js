import { Button } from "@chakra-ui/react";
import { PROTECTED } from "lib/routes";
import { Link } from "react-router-dom";

export default function UsernameButton({ user }) {
	return (
		<Button
			as={Link}
			to={`${PROTECTED}/profile/${user.id}`}
			colorScheme="blue"
			color="blue.700"
			variant="link"
		>
			{user.username}
		</Button>
	);
}
