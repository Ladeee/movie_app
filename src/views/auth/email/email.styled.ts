import styled from "styled-components";
import { AuthButton } from "../../../components/reuseableStyles/button.styled";

// confirm email / email successful

export const EmailContainer = styled.article`
  margin-top: 9.9375rem;
`;

export const ConfirmEmail = styled.header`
  font-family: "Inter", sans-serif;
  color: #090914;
  white-space: nowrap;
  font-weight: 600;
  font-size: 2.25rem;
  line-height: 2.75rem;
`;

export const ConfirmText = styled.p`
  font-family: "Poppins", sans-serif;
  color: #52525b;
  white-space: nowrap;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.875rem;
  margin-top: 2.0625rem;
`;

export const ConfirmButton = styled(AuthButton)`
  margin-top: 3.625rem;
`;

// exclusive for email successful

export const SignIn = styled.a`
  color: #52525b;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.875rem;
  margin-top: 1.25rem;
`;

export const SuccessButton = styled(AuthButton)`
  margin-top: 2.875rem;
`;
