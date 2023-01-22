// ----------- import external dependencies -------------
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../views/login";
import Forget from "../views/login/forget";
import SetPassword from "../views/login/setPassword";
import Signup from "../views/signup";
import SignupPageThree from "../views/signup/signupPages/companyDetails";
import SignupPageTwo from "../views/signup/signupPages/businessNeeds";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
    children: [
      { path: "/signupPageTwo", element: <SignupPageTwo /> },
      { path: "/signupPageThree", element: <SignupPageThree /> },
      { path: "/login", element: <Login /> },
      { path: "/forget", element: <Forget /> },
      { path: "/setPassword", element: <SetPassword /> },
    ],
  },
]);
