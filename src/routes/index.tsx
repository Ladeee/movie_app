// ----------- import external dependencies -------------
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

// ---------- import internal dependencies ----------
const CompanyAdminLayout = lazy(() => import("../layouts/CompanyAdminLayout"));
const CompanyDashboard = lazy(() => import("../screens/companyDashboard"));

export const router = createBrowserRouter([
  {
    path: "/company",
    element: <CompanyAdminLayout />,
    children: [
      {
        path: "dashboard",
        index: true,
        element: <CompanyDashboard />,
      },
    ],
  },
]);
