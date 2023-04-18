import { Button, Flex, Link } from "@chakra-ui/react";
import { UserContext } from "components/auth/UserContextProvider";
import { useLogout } from "hooks/auth";
import { ABOUT, CONTACT, DASHBOARD, HOME } from "lib/routes";
import { useContext } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";

export default function Navbar() {
	const { logout, isLoading } = useLogout();
	const { isUserLoggedIn, setIsUserLoggedIn } = useContext(UserContext);
	const { pathname } = useLocation();

	return (
		<Flex
			shadow="sm"
			pos="fixed"
			width="full"
			borderTop="6px solid"
			borderTopColor="blue.500"
			height="16"
			zIndex="3"
			justify="center"
			bg="white"
		>
			<Flex px="4" w="full" align="center" maxW="1200px" gap="10">
				<Link color="blue.700" as={RouterLink} to={HOME} fontWeight="bold">
					Home
				</Link>
				<Link
					color="blue.700"
					as={RouterLink}
					to={DASHBOARD}
					fontWeight="bold"
				>
					Feed
				</Link>
				<Link color="blue.700" as={RouterLink} to={ABOUT} fontWeight="bold">
					About
				</Link>
				<Link
					color="blue.700"
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
								colorScheme="blue"
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
								colorScheme="blue"
								size="sm"
								onClick={logout}
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
