import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./lib/routes";
import { createContext, useState } from "react";

//new
export const UserContext = createContext();

function App() {
	//new
	const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

	return (
		<ChakraProvider>
			<UserContext.Provider value={{ isUserLoggedIn, setIsUserLoggedIn }}>
				<RouterProvider router={router} />
			</UserContext.Provider>
		</ChakraProvider>
	);
}

export default App;
