import styled from "styled-components";
import { AuthButton } from "../../../css/reuseableStyles/button.styled";

// login / recover password

export const Container = styled.div`
  margin-top: 9.2vw;
  white-space: nowrap;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Heading = styled.header`
  font-family: "Inter", sans-serif;
  color: #090914;
  font-weight: 600;
  font-size: 4.8vw;
  line-height: 5.8667vw;

  @media (max-width: 768px) {
    font-size: 18px;
    text-align: center;
  }
`;

export const Addresses = styled.p`
  font-family: "Poppins", sans-serif;
  color: #52525b;
  font-weight: 400;
  font-size: 2.4vw;
  line-height: 4vw;
  margin-top: 4.4vw;

  @media (max-width: 398px) {
    text-align: center;
    font-size: 11px;
  }
`;

export const FormContainer = styled.section`
  width: 100%;
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  margin-top: 5.6vw;

  label {
    color: #000000;
    font-size: 2.1333vw;
    line-height: 3.2vw;
    margin-top: 0.6667vw;
  }

  input {
    background-color: #f8fafc;
    border: 1px solid #cbd5e1;
    outline: none;
    width: 70.1333vw;
    height: 5.8667vw;
    margin-top: 1.4667vw;
    border-radius: 0.75rem;
    padding-left: 5.0667vw;

    @media (max-width: 768px) {
      width: 100%;
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
  margin-top: 2.6667vw;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

export const Check = styled.div`
  display: flex;
  align-items: center;
`;

export const Remember = styled.p`
  font-weight: 400;
  font-size: 1.8667vw;
  line-height: 2.9333vw;
  margin-left: 1.2vw;
`;

export const Forgot = styled.a`
  cursor: pointer;
  color: #2563eb;
  font-weight: 400;
  font-size: 1.8667vw;
  line-height: 2.9333vw;
`;

export const Button = styled(AuthButton)`
  margin-top: 6.5333vw;
`;

export const Account = styled.p`
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  text-align: right;
  color: #333333;
  font-weight: 400;
  font-size: 2.1333vw;
  line-height: 2.1333vw;
  margin-top: 10.6667vw;
`;

// exclusive for forget password

export const Acc = styled.p`
  font-family: "Poppins", sans-serif;
  color: #333333;
  text-align: right;
  margin-top: 10.6667vw;
`;

// exclusive for set password

export const Reset = styled(AuthButton)`
  margin-top: 14.2667vw;
`;
