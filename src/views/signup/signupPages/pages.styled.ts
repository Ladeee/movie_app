import styled from "styled-components";
import { AuthButton } from "../../../css/reuseableStyles/button.styled";

// page one/ two & three

export const SignupContainer = styled.div`
  margin-top: 9.3125rem;
`;

export const Heading = styled.div`
  color: #090914;
  font-weight: 600;
  font-size: 2.25rem;
  line-height: 2.75rem;
`;

export const Addresses = styled.div`
  color: #52525b;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.875rem;
  margin-top: 2.0625rem;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.1875rem;
  gap: 11px;

  label {
    font-size: 1rem;
    line-height: 24px;
    margin-top: 1rem;
  }

  input {
    width: 32.875rem;
    height: 3.75rem;
    border: 1px solid #cbd5e1;
    border-radius: 12px;
    outline: none;
    background-color: #f8fafc;
    margin-top: 0.6875rem;
    padding-left: 2.375rem;
    position: relative;
  }

  #create {
    margin-top: 1.125rem;
  }
`;

export const Button = styled(AuthButton)`
  margin-top: 3.4375rem;
  margin-bottom: 2.8125rem;
`;

// exclusive for page two

export const FormTwoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.1875rem;
  margin-top: 4.375rem;

  input {
    width: 32.875rem;
    height: 3.75rem;
    border: 1px solid #cbd5e1;
    border-radius: 12px;
    outline: none;
    background-color: #f8fafc;
    padding-left: 2.375rem;

    &::placeholder {
      color: #828282;
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Icon = styled.div`
  cursor: pointer;
  position: absolute;
  top: 1.25rem;
  right: 0.9794rem;
  width: 1.4581rem;
  height: 1.4581rem;
  z-index: 99;
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
