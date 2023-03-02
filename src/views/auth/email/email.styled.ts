import styled from "styled-components";
import { sizes } from "../../../utils/screenSizes";

// confirm email / email successful

export const EmailContainer = styled.article`
  margin-top: 9.9375rem;
  white-space: nowrap;
  width: 44vw;

  @media (max-width: ${sizes.tablet}) {
    width: auto;
  }
`;

export const ConfirmEmail = styled.header`
  font-family: "Montserrat", sans-serif;
  color: #090914;
  white-space: nowrap;
  font-weight: 600;
  font-size: 2.25rem;
  line-height: 2.75rem;

  @media (max-width: ${sizes.tabletL}) {
    font-size: 1.45rem;
  }

  @media (max-width: 568px) {
    font-size: 1rem;
  }
`;

export const ConfirmText = styled.p`
  font-family: "Poppins", sans-serif;
  color: var(--zinc600);
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.875rem;
  margin-top: 2.0625rem;

  @media (max-width: ${sizes.tabletL}) {
    font-size: 1rem;
  }

  @media (max-width: 400px) {
    font-size: 11px;
  }
`;

export const ConfirmButton = styled.button`
  outline: none;
  background-color: var(--blue100);
  color: var(--white100);
  margin-top: 3.625rem;
  display: block;

  @media (max-width: ${sizes.tablet}) {
    width: 147px;
    font-size: 14px;
  }
`;

// exclusive for email successful

export const ConfirmSuccess = styled.p`
  font-family: "Poppins", sans-serif;
  color: var(--zinc600);
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.875rem;
  margin-top: 2.0625rem;

  @media (min-width: ${sizes.tablet}) and (max-width: ${sizes.tabletL}) {
    font-size: 1rem;
  }

  @media (max-width: 367px) {
    font-size: 12px;
  }
`;

export const SignIn = styled.a`
  font-family: "Poppins", sans-serif;
  color: var(--zinc600);
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.875rem;
  margin-top: 1.25rem;

  @media (min-width: ${sizes.tablet}) and (max-width: ${sizes.tabletL}) {
    font-size: 1rem;
  }

  @media (max-width: 467px) {
    font-size: 0.75rem;
  }
`;
