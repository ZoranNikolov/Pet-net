import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { UserContextProvider } from "components/auth/UserContextProvider";
import { router } from "./lib/routes";

function App() {
	return (
		<ChakraProvider>
			<UserContextProvider>
				<RouterProvider router={router} />
			</UserContextProvider>
		</ChakraProvider>
	);
}

export default App;
