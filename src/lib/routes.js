import Layout from "components/layout";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "components/dashboard";
import Comments from "components/comments";
import Profile from "components/profile";
import Users from "components/users";
import Home from "components/home";
import About from "components/about";
import Contact from "components/contact";

export const HOME = "/";
export const ABOUT = "/about";
export const CONTACT = "/contact";
export const LOGIN = "/login";
export const REGISTER = "/register";

export const PROTECTED = "/protected";
export const DASHBOARD = "/protected/dashboard";
export const USERS = "/protected/users";
export const PROFILE = "/protected/profile/:id";
export const COMMENTS = "/protected/comments/:id";

export const router = createBrowserRouter([
	{ path: HOME, element: <Home /> },
	{ path: ABOUT, element: <About /> },
	{ path: CONTACT, element: <Contact /> },
	{ path: LOGIN, element: <Login /> },
	{ path: REGISTER, element: <Register /> },
	{
		path: PROTECTED,
		element: <Layout />,
		children: [
			{
				path: DASHBOARD,
				element: <Dashboard />,
			},
			{
				path: USERS,
				element: <Users />,
			},
			{
				path: PROFILE,
				element: <Profile />,
			},
			{
				path: COMMENTS,
				element: <Comments />,
			},
		],
	},
]);