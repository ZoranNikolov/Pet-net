import Layout from "components/layout";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import { createBrowserRouter } from "react-router-dom";

export const ROOT = "/";
export const LOGIN = "/login";
export const REGISTER = "/register";

export const PROTECTED = "/protected";
export const DASHBOARD = "/protected/dashboard";

export const router = createBrowserRouter([
	{ path: ROOT, element: "Public Rootdsadas" },
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
		],
	},
]);
