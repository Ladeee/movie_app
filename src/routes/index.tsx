// ----------- import external dependencies -------------
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Verifications from "../views/jobs/createjobs/verification";

const AcceptJob = React.lazy(() => import("../views/jobs/acceptJobs"));
const RejectJob = React.lazy(() => import("../views/jobs/rejectJobs"));
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
    path: "/setpassword",
    element: <SetPassword />,
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
    path: "/emailsuccessful",
    element: <Successful />,
  },

  {
    path: "/acceptjob",
    element: <AcceptJob />,
  },

  {
    path: "/rejectjob",
    element: <RejectJob />,
  },

  {
    path: "/verifications",
    element: <Verifications />,
  },
]);
