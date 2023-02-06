// ----------- import external dependencies -------------
import React from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = React.lazy(() => import("../views/homepage"));
const GetStarted = React.lazy(() => import("../views/auth/signup"));
const Confirm = React.lazy(() => import("../views/auth/email/confirm"));
const Successful = React.lazy(() => import("../views/auth/email/successful"));
const Login = React.lazy(() => import("../views/auth/login"));
const RecoverPassword = React.lazy(
  () => import("../views/auth/login/recoverPassword")
);
const SetPassword = React.lazy(() => import("../views/auth/login/setPassword"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/signup",
    element: <GetStarted />,
  },

  {
    path: "/confirmemail",
    element: <Confirm />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/recoverpassword",
    element: <RecoverPassword />,
  },

  {
    path: "/setpassword",
    element: <SetPassword />,
  },

  {
    path: "/emailsuccessful",
    element: <Successful />,
  },
]);
