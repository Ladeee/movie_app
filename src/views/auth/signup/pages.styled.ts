import styled from "styled-components";
import { AuthButton } from "../../../css/reuseableStyles/button.styled";

// page one/ two & three

export const SignupContainer = styled.div`
  margin-top: 9.2vw;
  white-space: nowrap;
`;

export const Heading = styled.h1`
  font-family: "Inter", sans-serif;
  color: #090914;
  font-weight: 600;
  font-size: 4.8vw;
  line-height: 5.8667vw;

  // @media (max-width: 768px) {
  //   font-size: 18px;
  //   text-align: center;
  // }
`;

export const Addresses = styled.p`
  font-family: "Poppins", sans-serif;
  color: #52525b;
  font-weight: 400;
  font-size: 2.4vw;
  line-height: 4vw;
  margin-top: 2.2667vw;

  @media (max-width: 398px) {
    text-align: center;
    font-size: 11px;
  }
`;

export const FormContainer = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  margin-top: 1.1875rem;

  label {
    font-size: 2.1333vw;
    line-height: 3.2vw;
  }

  input {
    background-color: #f8fafc;
    outline: none;
    position: relative;
    border: 1px solid #cbd5e1;
    border-radius: 1.6vw;
    width: 70.1333vw;
    height: 5.8667vw;
    padding-left: 5.0667vw;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  #create {
    margin-top: 2.4vw;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled(AuthButton)`
  margin-top: 4.2667vw;
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
  gap: 4.2667vw;
  margin-top: 5.0667vw;

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
  border-radius: 1.6vw;
  width: 70.1333vw;
  height: 5.8667vw;
  padding-left: 5.0667vw;
  font-size: 2.1333vw;
  line-height: 3.2vw;

  input {
    cursor: pointer;
    position: absolute;
    top: 1.28vw;
    right: 2.1333vw;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Box = styled.div``;

export const Icon = styled.div`
  cursor: pointer;
  position: absolute;
  top: 2.6667vw;
  right: 2.0894vw;
  width: 3.1106vw;
  height: 3.1106vw;
`;

// exclusive for page three

export const Industry = styled.div`
  position: relative;
`;

export const IndustryIcon = styled.div`
  cursor: pointer;
  position: absolute;
  top: 5.1204vw;
  right: 3.0052vw;
  width: 1.2759vw;
  height: 0.816vw;
`;
