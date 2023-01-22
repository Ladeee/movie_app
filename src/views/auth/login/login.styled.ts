import styled from "styled-components";
import { AuthButton } from "../../../css/reuseableStyles/button.styled";

// login / forget password

export const Container = styled.div`
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

export const AddressesWithRed = styled(Addresses)`
  color: red;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.625rem;
  label {
    color: #000000;
    font-size: 1rem;
    line-height: 1.5rem;
    margin-top: 16px;
  }
  input {
    background-color: #f8fafc;
    border: 1px solid #cbd5e1;
    outline: none;
    width: 32.875rem;
    height: 3.75rem;
    margin-top: 11px;
    border-radius: 0.75rem;
    padding-left: 2.375rem;
  }
`;

export const RememberPassword = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.25rem;
`;

export const Check = styled.div`
  display: flex;
  align-items: center;
`;

export const Remember = styled.div`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.375rem;
  margin-left: 0.5625rem;
`;

export const Forgot = styled.div`
  cursor: pointer;
  color: #2563eb;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.375rem;
`;

export const Button = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0d2aab;
  color: #ffffff;
  width: 13.1875rem;
  height: 3.4375rem;
  margin-top: 4.0625rem;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.75rem;
  border-radius: 0.5625rem;
`;

export const Account = styled.div`
  cursor: pointer;
  text-align: right;
  color: #333333;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1rem;
  margin-top: 11.4375rem;
  margin-bottom: 4.4375rem;
`;

// exclusive for forget password

export const Acc = styled.div`
  text-align: right;
  margin-top: 21rem;
  margin-bottom: 4.4375rem;
`;

// exclusive for set password

export const Reset = styled(AuthButton)`
  margin-top: 6.6875rem;
  margin-bottom: 16.875rem;
`;
