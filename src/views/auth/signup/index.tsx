import { useState } from "react";
import AuthLayout from "../../../components/authLayout";
import { useNavigate } from "react-router-dom";
import GetStarted from "./forms/getStarted";
import CompanyDetails from "../signup/forms/companyDetails";
import BusinessNeeds from "./forms/businessNeeds";

//  all routes
const SIGNUP_TABS = [GetStarted, BusinessNeeds, CompanyDetails];

export default function Signup() {
  const [page, setPage] = useState(0);

  const navigate = useNavigate();

  const CurrentPage = SIGNUP_TABS[page];

  const color = page === 1 ? "#A96644" : "#1F2041";

  const goToNextPage = async () => {
    if (page === 2) {
      const response = await createAccount();
      return response;
    }
    setPage((currentValue) => currentValue + 1);
  };

  const createAccount = async () => {
    // logic to create account
    alert("account created");
    navigate("/confirmemail");
  };

  return (
    <AuthLayout color={color}>
      <CurrentPage goToNextPage={goToNextPage} />
    </AuthLayout>
  );
}
