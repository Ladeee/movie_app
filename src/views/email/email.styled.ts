import styled from "styled-components";
import { AuthButton } from "../../css/reuseableStyles/button.styled";

// confirm email / email successful

export const EmailContainer = styled.div`
  margin-top: 9.9375rem;
`;

export const ConfirmEmail = styled.div`
  color: #090914;
  font-weight: 600;
  font-size: 2.25rem;
  line-height: 2.75rem;
`;

export const ConfirmText = styled.div`
  color: #52525b;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.875rem;
  margin-top: 2.0625rem;
`;

export const ConfirmButton = styled(AuthButton)`
  margin-top: 3.625rem;
`;

// exclusive for email successful

export const SignIn = styled.div`
  color: #52525b;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.875rem;
  margin-top: 1.25rem;
`;

export const SuccessButton = styled(AuthButton)`
  margin-top: 2.875rem;
`;
