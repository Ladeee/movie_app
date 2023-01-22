// ----------- import external dependencies -------------
import { createBrowserRouter } from "react-router-dom";
import Confirm from "../views/email/confirm";
import Successful from "../views/email/successful";
import Login from "../views/login";
import Forget from "../views/login/forget";
import SetPassword from "../views/login/setPassword";
import Signup from "../views/signup";
import BusinessNeeds from "../views/signup/signupPages/businessNeeds";
import CompanyDetails from "../views/signup/signupPages/companyDetails";

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
