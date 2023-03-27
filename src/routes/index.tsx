// ----------- import external dependencies -------------
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import ChangePassword from "../views/companySettings/ChangePassword";
import EditProfile from "../views/companySettings/EditProfile";
// import Users from "../views/management/users";
import Messages from "../views/companyMessages";
import CreateMessage from "../views/companyMessages/CreateMessage";
import Chat from "../views/companyMessages/Chat";
import Support from "../views/companySupport";
import Request from "../views/companySupport/Request";

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
const Verifications = lazy(
  () => import("../views/jobs/createjobs/verification")
);
const JobsOverview = lazy(() => import("../views/jobs"));
const IdentityVerification = lazy(
  () => import("../views/jobs/identityVerification")
);
const IdentityVerificationDetails = lazy(
  () => import("../views/jobs/identityVerificationDetails")
);
const BusinessIdentityVerification = lazy(
  () => import("../views/jobs/businessAddressVerification")
);
const BusinessAddressVerificationView = lazy(
  () => import("../views/jobs/businessAddressVerificationView")
);
const MultipleAddress = lazy(
  () => import("../views/jobs/createjobs/popup/multipleAddress")
);
const JobPopup = lazy(() => import("../views/jobs/createjobs/popup"));
const BusinessVerification = lazy(
  () => import("../views/jobs/businessVerification")
);
const BusinessVerificationDetails = lazy(
  () => import("../views/jobs/businessVerificationDetails")
);
const BusinessVerificationReport = lazy(
  () => import("../views/jobs/businessVerificationReport")
);
const BusinessVerificationUpload = lazy(
  () => import("../views/jobs/businessVerificationUpload")
);

// ------- route configuration config -------
const Users = lazy(() => import("../views/management/users"));
const SubUser = lazy(() => import("../views/management/subuser"));
const SubDetail = lazy(() => import("../views/management/subdetail"));
const Permissions = lazy(() => import("../views/management/permission"));
const Account = lazy(() => import("../views/accountOpening/account"));
const PaymentStatus = lazy(
  () => import("../views/accountOpening/paymentStatus")
);
const CustomerInfo = lazy(() => import("../views/accountOpening/customerInfo"));
// transactions
const Transaction = lazy(() => import("../views/transactions/transaction"));
const TransactionHistory = lazy(
  () => import("../views/transactions/transactionHistory")
);
const TransactionDetail = lazy(
  () => import("../views/transactions/transactionDetails")
);
const Invoice = lazy(() => import("../views/transactions/invoice"));

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
        children: [
          {
            path: "",
            index: true,
            element: <JobsOverview />,
          },
          {
            path: "identity-verification",
            element: <IdentityVerification />,
          },
          {
            path: "identity-details",
            element: <IdentityVerificationDetails />,
          },
          {
            path: "business-address-verification",
            element: <BusinessIdentityVerification />,
          },
          {
            path: "business-address-verification-view",
            element: <BusinessAddressVerificationView />,
          },
          { path: "business-verification", element: <BusinessVerification /> },
          {
            path: "business-verification-details",
            element: <BusinessVerificationDetails />,
          },
          {
            path: "business-verification-report",
            element: <BusinessVerificationReport />,
          },
          {
            path: "business-verification-upload",
            element: <BusinessVerificationUpload />,
          },
          {
            path: "popup",
            children: [
              {
                path: "",
                index: true,
                element: <JobPopup />,
              },
              {
                path: "csv",
                element: <MultipleAddress />,
              },
            ],
          },
          {
            path: "verifications",
            element: <Verifications />,
          },
        ],
      },
      {
        path: "settings",
        children: [
          {
            path: "",
            index: true,
            element: <Settings />,
          },
          {
            path: "edit",
            children: [
              {
                path: "",
                index: true,
                element: <EditProfile />,
              },
              {
                path: "password",
                index: true,
                element: <ChangePassword />,
              },
            ],
          },
        ],
      },
      {
        path: "messages",
        children: [
          {
            path: "",
            index: true,
            element: <Messages />,
          },
          {
            path: "create",
            index: true,
            element: <CreateMessage />,
          },
          {
            path: "chat/:id",
            index: true,
            element: <Chat />,
          },
        ],
      },
      {
        path: "support",
        children: [
          {
            path: "",
            index: true,
            element: <Support />,
          },
          {
            path: "request",
            index: true,
            element: <Request />,
          },
        ],
      },
      {
        path: "verifications",
        element: <Verifications />,
      },

      // user management path
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "users/subuser",
        element: <SubUser />,
      },
      {
        path: "users/permissions",
        element: <Permissions />,
      },
      {
        path: "users/subdetail",
        element: <SubDetail />,
      },

      // account-opening
      {
        path: "accounts",
        element: <Account />,
      },
      {
        path: "accounts/payment-status",
        element: <PaymentStatus />,
      },
      {
        path: "accounts/customer-info",
        element: <CustomerInfo />,
      },

      // transactions
      {
        path: "transactions",
        element: <Transaction />,
      },
      {
        path: "transactions/transaction-history",
        element: <TransactionHistory />,
      },
      {
        path: "transactions/transaction-details",
        element: <TransactionDetail />,
      },
      {
        path: "transactions/invoice",
        element: <Invoice />,
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
