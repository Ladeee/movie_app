import React, { useState } from "react";
import Checkmark from "../../../../../assets/images/verification/vercheckmark.png";
import styled from "styled-components";

export default function VerificationNavbar() {
  const [isActive, setIsActive] = useState("Individual");

  const clickedButtonHandler = (name: any) => {
    setIsActive(name);
  };

  const buttons = ["Individual", "Guarantor", "Agent"];

  return (
    <VerificationNavContainer>
      {buttons.map((name: string) => (
        <button
          name={name}
          style={{
            backgroundColor: isActive === name ? "#7961F9" : "#FFFFFF",
            color: isActive === name ? "#FFFFFF" : "#7961F9",
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
  }
`;

export const Image = styled.div`
  img {
    width: 1.25rem;
    height: 1.25rem;
  }
`;
