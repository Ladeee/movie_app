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
import Checkmark from "../../../../assets/images/verification/vercheckmark.png";
import styled from "styled-components";

export default function Verifications() {
  const [verificationPage, setVerificationPage] = useState(0);
  const [isActive, setIsActive] = useState<any>("Individual");

  const VerificationTitles = ["Address Verification", "Guarantor Verification"];
  const buttons = ["Individual", "Guarantor", "Identity"];

  const pageDisplay = () => {
    if (verificationPage === 0 && isActive === "Individual") {
      return <AddressVerification nextPage={nextPage} />;
    } else if (verificationPage === 1 || isActive === "Guarantor") {
      return <GuarantorVerification nextPage={nextPage} />;
    } else {
      return;
    }
  };

  const nextPage = () => {
    setVerificationPage ||
      setIsActive((currentValue: number) => currentValue + 1);
    // setIsActive((currentValue: number) => currentValue + 1);

    if (verificationPage && isActive === VerificationTitles.length - 1) {
      return;
    }
  };
  const clickedButtonHandler = (name: any) => {
    setIsActive(name);
  };

  const colors =
    isActive === "Individual"
      ? "#7961F9"
      : isActive === "Guarantor"
      ? "#333382"
      : "#0D2AAB";

  return (
    <VerificationContainer>
      <Header>
        <LeftHeader>
          <p className="font-semibold font-montserrat">Create Job</p>
          <IoIosArrowForward />
          <p className="font-semibold font-montserrat">
            {VerificationTitles[verificationPage && isActive]}
          </p>
        </LeftHeader>
        <RightHeader>
          <Continue className="text-sm font-semibold font-inter">
            Continue
          </Continue>
          <CreateBtn>Create Job</CreateBtn>
        </RightHeader>
      </Header>
      <PageDisplay>
        <VerificationNavContainer>
          {buttons.map((name: string) => (
            <button
              name={name}
              style={{
                backgroundColor: isActive === name ? colors : "#FFFFFF",
                color: isActive === name ? "#FFFFFF" : colors,
              }}
              onClick={() => clickedButtonHandler(name)}
            >
              <p>{name}</p>
              <Image>
                {isActive === name ? <img src={Checkmark} alt="" /> : null}
              </Image>
            </button>
          ))}
        </VerificationNavContainer>
        {pageDisplay()}
      </PageDisplay>
    </VerificationContainer>
  );
}

// verification navbar styles

export const VerificationNavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5.1875rem;
  margin-top: 2.313rem;

  button {
    cursor: pointer;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    border: 1px solid #7961f9;
    width: 9.125rem;
    height: 2.3125rem;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.25rem;
    border-radius: 0.1875rem;
  }
`;

export const Image = styled.div`
  img {
    width: 1.25rem;
    height: 1.25rem;
  }
`;
