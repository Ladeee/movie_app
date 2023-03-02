import styled from "styled-components";
import { sizes } from "../../../utils/screenSizes";

// login / recover password

export const Container = styled.div`
  margin-top: 4.3125rem;
  white-space: nowrap;
  width: 44vw;

  @media (max-width: ${sizes.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #form {
    Input {
      @media (min-width: 768px) {
        width: 100% !important;
      }
    }

    .ant-btn-primary {
      background: var(--blue100) !important;
    }

    .ant-input-affix-wrapper {
      @media (min-width: 768px) {
        width: 100% !important;
      }
    }
  }
`;

export const Heading = styled.h1`
  font-family: "Montserrat", sans-serif;
  color: #090914;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 2.75rem;
  margin-top: 9.313rem;

  @media (max-width: ${sizes.tablet}) {
    font-size: 1.425rem;
    text-align: center;
    margin-top: 3.3125rem;
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  margin-top: 2.625rem;

  label {
    color: black;
    font-size: 0.825rem;
    line-height: 1.5rem;
    margin-top: 5px;
  }

  input {
    background-color: var(--slate50);
    border: 1px solid var(--slate300);
    outline: none;
    width: 32.875rem;
    height: 3.75rem;
    margin-top: 11px;
    border-radius: 0.75rem;
    padding-left: 2.375rem;

    @media (max-width: ${sizes.tabletL}) {
      width: 90%;
    }

    @media (max-width: ${sizes.tablet}) {
      width: 100%;
      padding-left: 0.375rem;
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RememberPassword = styled.section`
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.25rem;
  width: 70%;

  @media (max-width: ${sizes.tabletL}) {
    margin-right: 10%;
  }

  @media (max-width: ${sizes.tablet}) {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

export const Check = styled.div`
  display: flex;
  align-items: center;
`;

export const Remember = styled.p`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.375rem;
  margin-left: 0.5625rem;

  @media (max-width: 468px) {
    font-size: 0.625rem;
  }
`;

export const Forgot = styled.a`
  cursor: pointer;
  color: #2563eb;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.375rem;

  @media (max-width: 468px) {
    font-size: 0.625rem;
  }
`;

export const Account = styled.p`
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  text-align: right;
  color: #333333;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1rem;
  margin-top: 2.5rem;
  margin-bottom: 0.4375rem;

  @media (min-width: 768px) and (max-width: ${sizes.tabletL}) {
    text-align: unset;
  }
`;

// exclusive for forget password

export const Acc = styled.p`
  font-family: "Poppins", sans-serif;
  color: #333333;
  text-align: right;
  margin-top: 8rem;

  @media (min-width: 768px) and (max-width: ${sizes.tabletL}) {
    text-align: unset;
  }
`;

// exclusive for set password
