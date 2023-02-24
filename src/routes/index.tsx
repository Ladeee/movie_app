// ----------- import external dependencies -------------
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

// ---------- import internal dependencies ----------
const Home = lazy(() => import("../views/homepage"));
const GetStarted = lazy(() => import("../views/auth/signup"));
const Confirm = lazy(() => import("../views/auth/email/confirm"));
const Successful = lazy(() => import("../views/auth/email/successful"));
const Login = lazy(() => import("../views/auth/login"));
const RecoverPassword = lazy(
  () => import("../views/auth/login/recoverPassword")
);
const SetPassword = lazy(() => import("../views/auth/login/setPassword"));
const AcceptJobs = lazy(() => import("../views/jobs/acceptJobs"));
const RejectJobs = lazy(() => import("../views/jobs/rejectJobs"));
const CompanyAdminLayout = lazy(() => import("../layouts/CompanyAdminLayout"));
const CompanyAccountLayout = lazy(
  () => import("../layouts/CompanyAdminLayout/accountLayout")
);
const Settings = lazy(() => import("../views/companySettings"));
const CompanyDashboard = lazy(() => import("../views/companyDashboard"));
const CompanyAccountDashboard = lazy(
  () => import("../views/companyAccountDashboard")
);
const JobsOverview = lazy(() => import("../views/jobs"));
const IdentityVerification = lazy(
  () => import("../views/jobs/identityVerification")
);
const IdentityVerificationDetails = lazy(
  () => import("../views/jobs/identityVerificationDetails")
);

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
  {
    path: "/acceptjob",
    element: <AcceptJobs />,
  },
  {
    path: "/rejectjob",
    element: <RejectJobs />,
  },
  {
    path: "/company",
    element: <CompanyAdminLayout />,
    children: [
      {
        path: "dashboard",
        index: true,
        element: <CompanyDashboard />,
      },
      // ------- jobs path ------
      {
        path: "jobs",
        element: <JobsOverview />,
      },
      {
        path: "jobs/identity-verification",
        element: <IdentityVerification />,
      },
      {
        path: "jobs/identity-details",
        element: <IdentityVerificationDetails />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "/company-account",
    element: <CompanyAccountLayout />,
    children: [
      {
        path: "dashboard",
        index: true,
        element: <CompanyAccountDashboard />,
      },
    ],
  },
]);
