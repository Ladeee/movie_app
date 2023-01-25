import { useState } from "react";
import AuthLayout from "../../../../../components/authLayout";

import CompanyDetails from "../companyDetails";
import BusinessNeeds from "../businessNeeds";
import File from "../../file";

//  all routes
const ALL_TABS = [File, BusinessNeeds, CompanyDetails];

export default function GetStarted() {
  const [page, setPage] = useState(0);

  const CurrentPage = ALL_TABS[page];

  const color = page === 1 ? "#A96644" : "#1F2041";

  const goToNextPage = async () => {
    if (page === 2) {
      const response = await createAccount();
      return;
    }
    setPage((currentValue) => currentValue + 1);
  };

  const createAccount = async () => {
    // logic to create account
    alert("account created");
  };

  return (
    <AuthLayout color={color}>
      <CurrentPage goToNextPage={goToNextPage} />
    </AuthLayout>
  );
}
