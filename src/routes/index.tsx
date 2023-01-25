// ----------- import external dependencies -------------
import React from "react";
import { createBrowserRouter } from "react-router-dom";
const Signup = React.lazy(() => import("../views/auth/signup"));
const CompanyDetails = React.lazy(
  () => import("../views/auth/signup/signupPages/companyDetails")
);
const Confirm = React.lazy(() => import("../views/auth/email/confirm"));
const Successful = React.lazy(() => import("../views/auth/email/successful"));
const Login = React.lazy(() => import("../views/auth/login"));
const Forget = React.lazy(() => import("../views/auth/login/forget"));
const SetPassword = React.lazy(() => import("../views/auth/login/setPassword"));
const BusinessNeeds = React.lazy(
  () => import("../views/auth/signup/signupPages/businessNeeds")
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
    children: [
      { path: "/businessneeds", element: <BusinessNeeds /> },
      { path: "/companydetails", element: <CompanyDetails /> },
      { path: "/login", element: <Login /> },
      { path: "/forget", element: <Forget /> },
      { path: "/setpassword", element: <SetPassword /> },
      { path: "/confirmemail", element: <Confirm /> },
      { path: "/emailsuccessful", element: <Successful /> },
    ],
  },
]);
