import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export function UserContextProvider(props) {
	const [isUserLoggedIn, setIsUserLoggedIn] = useState(() => {
		const storedIsUserLoggedIn = localStorage.getItem("isUserLoggedIn");
		return storedIsUserLoggedIn ? JSON.parse(storedIsUserLoggedIn) : false;
	});

	useEffect(() => {
		localStorage.setItem("isUserLoggedIn", JSON.stringify(isUserLoggedIn));
	}, [isUserLoggedIn]);

	return (
		<UserContext.Provider value={{ isUserLoggedIn, setIsUserLoggedIn }}>
			{props.children}
		</UserContext.Provider>
	);
}
