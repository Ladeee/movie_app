import styled from "styled-components";
import { AuthButton } from "../../../css/reuseableStyles/button.styled";

// confirm email / email successful

export const EmailContainer = styled.article`
  margin-top: 21.2vw;
  white-space: nowrap;
`;

export const ConfirmEmail = styled.header`
  font-family: "Inter", sans-serif;
  color: #090914;
  white-space: nowrap;
  font-weight: 600;
  font-size: 4.8vw;
  line-height: 5.8667vw;

  @media (max-width: 568px) {
    font-size: 1rem;
  }
`;

export const ConfirmText = styled.p`
  font-family: "Poppins", sans-serif;
  color: #52525b;
  font-weight: 400;
  font-size: 2.4vw;
  line-height: 4vw;
  margin-top: 4.4vw;

  @media (max-width: 400px) {
    font-size: 11px;
  }
`;

export const ConfirmButton = styled(AuthButton)`
  margin-top: 7.7333vw;

  @media (max-width: 768px) {
    width: 147px;
    font-size: 14px;
  }
`;

// exclusive for email successful

export const ConfirmSuccess = styled.p`
  font-family: "Poppins", sans-serif;
  color: #52525b;
  font-weight: 400;
  font-size: 2.4vw;
  line-height: 4vw;
  margin-top: 4.4vw;

  @media (max-width: 367px) {
    font-size: 12px;
  }
`;

export const SignIn = styled.a`
  font-family: "Poppins", sans-serif;
  color: #52525b;
  font-weight: 400;
  font-size: 2.4vw;
  line-height: 4vw;
  margin-top: 2.6667vw;

  @media (max-width: 367px) {
    font-size: 11px;
  }
`;

export const SuccessButton = styled(AuthButton)`
  margin-top: 6.1333vw;

  @media (max-width: 768px) {
    width: 147px;
  }
`;
