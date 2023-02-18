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
import Checkmark from "../../../../assets/images/verification/vercheckmark.png";
import styled from "styled-components";

export default function Verifications() {
  const [verificationPage, setVerificationPage] = useState(0);
  const [isActive, setIsActive] = useState("Individual");

  const buttons = ["Individual", "Guarantor", "Identity"];
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

  const clickedButtonHandler = (name: any) => {
    setIsActive(name);
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

      <PageDisplay>
        <VerificationNavContainer>
          {buttons.map((name: string) => (
            <button
              name={name}
              style={{
                backgroundColor: isActive === name ? "#333382" : "#FFFFFF",
                color: isActive === name ? "#FFFFFF" : "#333382",
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
    border: 1px solid #333382;
    width: 9.125rem;
    height: 2.3125rem;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.25rem;
    border-radius: 0.1875rem;

    @media (max-width: 768px) {
      width: 28%;
      font-size: 0.625rem;
    }
  }

  @media (max-width: 768px) {
    width: 90%;
    gap: 0;
    justify-content: space-between;
  }
`;

export const Image = styled.div`
  img {
    width: 1.25rem;
    height: 1.25rem;

    @media (max-width: 768px) {
      width: 0.75rem;
      height: 0.75rem;
    }

    @media (max-width: 468px) {
      display: none;
    }
  }
`;
