import { Link } from "react-router-dom";
import { Avatar as ChakraAvatar } from "@chakra-ui/react";
import { PROTECTED } from "lib/routes";
// import { UserContext } from "components/auth/UserContextProvider";
// import { useContext } from "react";

export default function Avatar({ user, size = "xl", overrideAvatar = null }) {
	// const { avatarUrl} = useContext(UserContext);
	if (!user) return "Loading...";

	return (
		<ChakraAvatar
			as={Link}
			to={`${PROTECTED}/profile/${user.id}`}
			name={user.username}
			size={size}
			src={overrideAvatar || avatarUrl || user?.avatar}
			alt={`${user?.username}'s avatar`}
			_hover={{ cursor: "pointer", opacity: "0.8" }}
		/>
	);
}
