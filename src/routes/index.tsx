// ----------- import external dependencies -------------
import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Signup from "../views/auth/signup";

const Home = React.lazy(() => import("../views/homepage"));
const GetStarted = React.lazy(
  () => import("../views/auth/signup/signupPages/getStarted")
);
const Confirm = React.lazy(() => import("../views/auth/email/confirm"));
const Successful = React.lazy(() => import("../views/auth/email/successful"));
const Login = React.lazy(() => import("../views/auth/login"));
const Forget = React.lazy(() => import("../views/auth/login/forget"));
const SetPassword = React.lazy(() => import("../views/auth/login/setPassword"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "/signup", element: <Signup /> },
      { path: "/login", element: <Login /> },
      { path: "/forget", element: <Forget /> },
      { path: "/setpassword", element: <SetPassword /> },
      { path: "/confirmemail", element: <Confirm /> },
      { path: "/emailsuccessful", element: <Successful /> },
    ],
  },
]);
