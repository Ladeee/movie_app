// ----------- import external dependencies -------------
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

// ---------- import internal dependencies ----------
const CompanyAdminLayout = lazy(() => import("../layouts/CompanyAdminLayout"));

export const router = createBrowserRouter([
  {
    path: "/company",
    element: <CompanyAdminLayout />,
  },
]);
