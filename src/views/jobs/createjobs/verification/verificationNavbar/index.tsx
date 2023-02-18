import React, { useState } from "react";
import styled from "styled-components";
import Checkmark from "../../../../../assets/images/verification/vercheckmark.png";

export default function VerificationNavbar() {
  const [isActive, setIsActive] = useState("Individual");

  const buttons = ["Individual", "Guarantor", "Identity"];

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
