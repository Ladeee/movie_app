import React, { useState } from "react";
import {
  Continue,
  CreateBtn,
  Header,
  LeftHeader,
  RightHeader,
  VerificationContainer,
  PageDisplay,
} from "./verifications.styled";

import { IoIosArrowForward } from "react-icons/io";
import AddressVerification from "./address";
import GuarantorVerification from "./guarantor";
import IdentityVerification from "./identity";
import { Link } from "react-router-dom";

export default function Verifications({ isActive }: any) {
  const [verificationPage, setVerificationPage] = useState(0);

  const VerificationTitles = [
    "Address Verification",
    "Guarantor Verification",
    "Identity Verification",
  ];

  const pageDisplay = () => {
    if (verificationPage === 0 && isActive === "Individual") {
      return <AddressVerification nextPage={nextPage} />;
    } else if (verificationPage === 1 || isActive === "Guarantor") {
      return <GuarantorVerification />;
    } else {
      return <IdentityVerification />;
    }
  };

  const nextPage = () => {
    setVerificationPage((currentValue: number) => currentValue + 1);
  };

  return (
    <VerificationContainer>
      <Header>
        <LeftHeader>
          <p className="font-semibold font-montserrat" id="job-text">
            Create Job
          </p>
          <IoIosArrowForward id="job-text" />
          <p className="font-semibold font-montserrat">
            {VerificationTitles[verificationPage]}
          </p>
        </LeftHeader>
        <RightHeader>
          <Continue className="text-sm font-semibold font-inter">
            Continue
          </Continue>
          <Link to="popup">
            <CreateBtn>Create Job</CreateBtn>
          </Link>
        </RightHeader>
      </Header>

      <PageDisplay>{pageDisplay()}</PageDisplay>
    </VerificationContainer>
  );
}
