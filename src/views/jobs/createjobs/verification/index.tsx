import React, { useState } from "react";
import {
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
import { sizes } from "../../../../utils/screenSizes";

export default function Verifications() {
  const [verificationPage, setVerificationPage] = useState(0);
  const [isActive, setIsActive] = useState<any>("Individual");

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
    } else if (verificationPage === 2 || isActive === "Identity") {
      return <IdentityVerification />;
    } else {
      return null;
    }
  };

  const nextPage = () => {
    setVerificationPage((currentValue: number) => currentValue + 1);
    setIsActive("Guarantor");
  };

  const clickedButtonHandler = (index: number, name: string) => {
    setIsActive(name);
    setVerificationPage(index);
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
            {VerificationTitles[verificationPage] ||
              VerificationTitles[isActive]}
          </p>
        </LeftHeader>
        <RightHeader>
          <button className="btn text-sm font-semibold font-inter bg-[var(--blue100)] text-[var(--white100)]">
            Continue
          </button>
          <Link to="popup">
            <button className="btn bg-[var(--blue100)] text-[var(--white100)]">
              Create Job
            </button>
          </Link>
        </RightHeader>
      </Header>

      <PageDisplay>
        <VerificationNavContainer>
          {buttons.map((name, index) => (
            <>
              <button
                // name={name}
                style={{
                  backgroundColor:
                    isActive === name ? "var(--blue100)" : "var(--white50)",
                  color:
                    isActive === name ? "var(--white50)" : "var(--blue100)",
                }}
                key={name}
                onClick={() => clickedButtonHandler(index, name)}
              >
                <p>{name}</p>
                <Image>
                  {isActive === name ? <img src={Checkmark} alt="" /> : null}
                </Image>
              </button>
              <hr />
            </>
          ))}
        </VerificationNavContainer>

        {pageDisplay()}
      </PageDisplay>
    </VerificationContainer>
  );
}

// verification navbar styles

export const VerificationNavContainer = styled.div`
  font-family: "Montserrat", sans-serif;
  display: flex;
  align-items: center;
  margin-top: 2.313rem;

  hr {
    background-color: #979797;
    width: 5.5rem;
    height: 0.0625rem;
    margin: 0;

    &:last-child {
      display: none;
    }
  }

  button {
    cursor: pointer;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    border: 1px solid var(--blue100);
    width: 9.125rem;
    height: 2.3125rem;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.25rem;
    border-radius: 0.1875rem;

    @media (max-width: ${sizes.tablet}) {
      width: 28%;
      font-size: 0.625rem;
    }
  }

  @media (max-width: ${sizes.tablet}) {
    width: 90%;
    gap: 0;
    justify-content: space-between;
  }
`;

export const Image = styled.div`
  img {
    width: 1.25rem;
    height: 1.25rem;

    @media (max-width: ${sizes.tablet}) {
      width: 0.75rem;
      height: 0.75rem;
    }

    @media (max-width: 468px) {
      display: none;
    }
  }
`;
