import styled from "styled-components";
import { AuthButton } from "../../../css/reuseableStyles/button.styled";

// page one/ two & three

export const SignupContainer = styled.div`
  margin-top: 9.3125rem;
  white-space: nowrap;
`;

export const Heading = styled.h1`
  font-family: "Inter", sans-serif;
  color: #090914;
  font-weight: 600;
  font-size: 2.25rem;
  line-height: 2.75rem;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const FormContainer = styled.form`
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  margin-top: 1.1875rem;

  label {
    font-size: 1rem;
    line-height: 24px;
    margin-top: 1rem;
  }

  input {
    background-color: #f8fafc;
    outline: none;
    position: relative;
    border: 1px solid #cbd5e1;
    border-radius: 12px;
    width: 32.875rem;
    height: 3.75rem;
    margin-top: 0.6875rem;
    padding-left: 2.375rem;

    @media (max-width: 768px) {
      width: 19.75rem;
      padding-left: 0.375rem;
    }
  }

  #create {
    margin-top: 1.125rem;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled(AuthButton)`
  margin-top: 3.4375rem;
  margin-bottom: 2.8125rem;
`;

export const Btn = styled.div`
  @media (max-width: 768px) {
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

  @media (max-width: 768px) {
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
  }

  @media (max-width: 768px) {
    width: 100%;
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

// exclusive for page three

export const Industry = styled.div`
  position: relative;
`;

export const IndustryIcon = styled.div`
  cursor: pointer;
  position: absolute;
  top: 2.4002rem;
  right: 1.4087rem;
  width: 0.5981rem;
  height: 0.3825rem;
`;
