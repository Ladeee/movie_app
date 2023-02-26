import styled from "styled-components";
import { sizes } from "../../../utils/screenSizes";

// page one/ two & three

export const SignupContainer = styled.div`
  margin-top: 9.3125rem;
  white-space: nowrap;
  width: 44vw;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #form {
    .ant-select-selector {
      display: flex;
      align-items: center;
      height: 3.75rem;
      background-color: #f8fafc;
      border: 1px solid #cbd5e1;
    }

    .ant-btn-primary {
      background: var(--blue100) !important;
    }
  }

  Input {
    @media (min-width: 768px) {
      width: 38vw !important;
    }
  }

  .ant-input-affix-wrapper {
    @media (min-width: 768px) {
      width: 38vw !important;
    }
  }

  .ant-select.ant-select-in-form-item {
    @media (min-width: 768px) {
      width: 38vw !important;
    }
  }
`;

export const Heading = styled.h1`
  font-family: "Inter", sans-serif;
  color: #090914;
  font-weight: 600;
  font-size: 2.25rem;
  line-height: 2.75rem;

  @media (max-width: ${sizes.tabletL}) {
    font-size: 1.75rem;
  }

  @media (max-width: ${sizes.tablet}) {
    font-size: 1.425rem;
  }
`;

export const Button = styled.button`
  border: none;
  margin-top: 3.4375rem;
  margin-bottom: 2.8125rem;
  background-color: var(--blue100);
  color: var(--white100);
`;

export const Btn = styled.div`
  @media (max-width: ${sizes.tablet}) {
    display: flex;
    justify-content: center;
  }
`;

// exclusive for page two

export const FormTwoContainer = styled.section`
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 3.1875rem;
  margin-top: 4.375rem;

  @media (max-width: ${sizes.tablet}) {
    display: flex;
  }
`;

export const BoxWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: #f8fafc;
  color: #828282;
  border: 1px solid #cbd5e1;
  border-radius: 12px;
  width: 32.875rem;
  height: 3.75rem;
  padding-left: 2.375rem;
  font-size: 1rem;
  line-height: 1.5rem;

  input {
    cursor: pointer;
    position: absolute;
    top: 1.25rem;
    right: 1rem;
    width: unset !important;
  }

  @media (max-width: ${sizes.tabletL}) {
    width: 90%;
  }

  @media (max-width: ${sizes.tablet}) {
    width: 60vw;
  }
`;

export const Box = styled.div``;

export const Icon = styled.div`
  cursor: pointer;
  position: absolute;
  top: 1.25rem;
  right: 0.9794rem;
  width: 1.4581rem;
  height: 1.4581rem;
`;

// exclusive for company details page
