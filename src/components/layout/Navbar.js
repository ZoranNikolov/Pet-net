import { Button, Flex, Link } from "@chakra-ui/react";
import { UserContext } from "App";
import { useLogout } from "hooks/auth";
import { ABOUT, CONTACT, DASHBOARD, HOME, LOGIN } from "lib/routes";
import { useContext } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
	const { logout, isLoading } = useLogout();
	const { isUserLoggedIn, setIsUserLoggedIn } = useContext(UserContext);
	const { pathname } = useLocation();
	const navigate = useNavigate();

	const navigateHandler = () => {
		if (!isUserLoggedIn) {
			navigate(LOGIN);
		}
	};

	return (
		<Flex
			shadow="sm"
			pos="fixed"
			width="full"
			borderTop="6px solid"
			borderTopColor="teal.400"
			height="16"
			zIndex="3"
			justify="center"
			bg="white"
		>
			<Flex px="4" w="full" align="center" maxW="1200px" gap="10">
				<Link color="teal" as={RouterLink} to={HOME} fontWeight="bold">
					Home
				</Link>
				<Link
					color="teal"
					as={RouterLink}
					to={DASHBOARD}
					fontWeight="bold"
				>
					Feed
				</Link>
				<Link color="teal" as={RouterLink} to={ABOUT} fontWeight="bold">
					About
				</Link>
				<Link
					color="teal"
					as={RouterLink}
					to={CONTACT}
					fontWeight="bold"
				>
					Contact us
				</Link>

				{pathname !== "/login" && pathname !== "/register" && (
					<>
						{isUserLoggedIn ? (
							<Button
								ml="auto"
								colorScheme="teal"
								size="sm"
								onClick={logout}
								isLoading={isLoading}
							>
								{" "}
								Logout{" "}
							</Button>
						) : (
							<Button
								ml="auto"
								colorScheme="teal"
								size="sm"
								onClick={navigateHandler}
							>
								{" "}
								Login{" "}
							</Button>
						)}
					</>
				)}
			</Flex>
		</Flex>
	);
}
