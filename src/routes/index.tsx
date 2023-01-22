// ----------- import external dependencies -------------
import { createBrowserRouter } from "react-router-dom";
import Confirm from "../views/auth/email/confirm";
import Successful from "../views/auth/email/successful";
import Login from "../views/auth/login";
import Forget from "../views/auth/login/forget";
import SetPassword from "../views/auth/login/setPassword";
import Signup from "../views/auth/signup";
import BusinessNeeds from "../views/auth/signup/signupPages/businessNeeds";
import CompanyDetails from "../views/auth/signup/signupPages/companyDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
    children: [
      { path: "/businessNeeds", element: <BusinessNeeds /> },
      { path: "/companyDetails", element: <CompanyDetails /> },
      { path: "/login", element: <Login /> },
      { path: "/forget", element: <Forget /> },
      { path: "/setPassword", element: <SetPassword /> },
      { path: "/confirmEmail", element: <Confirm /> },
      { path: "/emailSuccessful", element: <Successful /> },
    ],
  },
]);
