import { Button, Flex, Link } from "@chakra-ui/react";
import { DASHBOARD } from "lib/routes";
import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
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
			bg="purple"
		>
			<Flex px="4" w="full" align="center" maxW="1200px" bg="red">
				<Link
					color="teal"
					as={RouterLink}
					to={DASHBOARD}
					fontWeight="bold"
				>
					Home
				</Link>
				<Button
					ml="auto"
					colorScheme="teal"
					size="sm"
					// onClick={handleLogout}
					// isLoading={isLoading}
				>
					{" "}
					Logout{" "}
				</Button>
			</Flex>
		</Flex>
	);
}