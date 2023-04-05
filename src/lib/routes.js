import Layout from "components/layout";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import { createBrowserRouter } from "react-router-dom";

export const ROOT = "/";
export const LOGIN = "/login";
export const REGISTER = "/register";

export const PROTECTED = "/protected";
export const DASHBOARD = "/protected/dashboard";
export const USERS = "/protected/users";
export const PROFILE = "/protected/profile/:id";

export const router = createBrowserRouter([
	{ path: ROOT, element: "Public Root" },
	{ path: LOGIN, element: <Login /> },
	{ path: REGISTER, element: <Register /> },
	{
		path: PROTECTED,
		element: <Layout/>,
		children: [
			{
				path: DASHBOARD,
				element: "Dashboard",
			},
			{
				path: USERS,
				element: "Users",
			},
			{
				path: PROFILE,
				element: "Users profile for a specific id",
			},
		],
	},
]);
