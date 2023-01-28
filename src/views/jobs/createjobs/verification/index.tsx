import React, { useState } from "react";
import {
  Continue,
  CreateBtn,
  Header,
  LeftHeader,
  RightHeader,
  VerificationContainer,
} from "./verifications.styled";

import { IoIosArrowForward } from "react-icons/io";
import AddressVerification from "./address";
import GuarantorVerification from "./guarantor";

export default function Verifications() {
  const [verificationPage, setVerificationPage] = useState(0);

  const VerificationTitles = ["Address Verification", "Guarantor Verification"];

  const pageDisplay = () => {
    if (verificationPage === 0) {
      return <AddressVerification nextPage={nextPage} />;
    } else {
      return <GuarantorVerification nextPage={nextPage} />;
    }
  };

  const nextPage = () => {
    setVerificationPage((currentValue) => currentValue + 1);

    if (verificationPage === VerificationTitles.length - 1) {
      return;
    }
  };

  return (
    <VerificationContainer>
      <Header>
        <LeftHeader>
          <p className="font-semibold font-montserrat">Create Job</p>
          <IoIosArrowForward />
          <p className="font-semibold font-montserrat">
            {VerificationTitles[verificationPage]}
          </p>
        </LeftHeader>
        <RightHeader>
          <Continue className="text-sm font-semibold font-inter">
            Continue
          </Continue>
          <CreateBtn>Create Job</CreateBtn>
        </RightHeader>
      </Header>
      <div>{pageDisplay()}</div>
    </VerificationContainer>
  );
}
