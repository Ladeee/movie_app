import styled from "styled-components";
import {
  VerificationTopButtons,
  VerificationDownButtons,
  VerificationInput,
} from "./button";

export const VerificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Inter", sans-serif;
  white-space: nowrap;
`;

export const Header = styled.section`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  gap: 26.625rem;
  p {
    font-size: 1.5rem;
    line-height: 2.25rem;
  }
`;

export const CreateJob = styled.div`
  display: flex;
  align-items: center;
`;

export const LeftHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  margin-top: 1.4375rem;
`;

export const RightHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-top: 2.2844rem;
`;

export const Continue = styled(VerificationTopButtons)``;

export const CreateBtn = styled(VerificationTopButtons)`
  font-family: "Nunito Sans", sans-serif;
  font-weight: 700;
  font-size: 0.9375rem;
  line-height: 1.2788rem;
`;

export const VerificationButtons = styled.div`
  margin-top: 3.875rem;
`;

export const AddGuarantor = styled(VerificationDownButtons)`
  background-color: #fefefe;
  color: #1f2041;
`;

export const Submit = styled(VerificationDownButtons)`
  margin-top: 1.625rem;
  background-color: #1f2041;
  color: #ffffff;
`;

// Address verification

export const AddressContainer = styled.div`
  margin-top: 1.625rem;
  width: 75.5rem;
  /* height: 66.9375rem; */
  background: #ffffff;
  border: 1px solid #e4e4e7;
  border-radius: 0.625rem;
  padding-bottom: 3.8125rem;
  padding-left: 4.25rem;
`;

export const FormWrapper = styled.div`
  display: flex;
  gap: 3.0625rem;
  margin-top: 1.6875rem;
`;

export const LeftInfo = styled.section``;

export const RightInfo = styled.section``;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: #344054;
    font-size: 0.875rem;
    line-height: 1.25rem;
    margin-top: 1.875rem;
  }

  textarea {
    resize: none;
    border: 1px solid #d0d5dd;
    width: 30rem;
    height: 7.25rem;
    border-radius: 0.5rem;
    margin-top: 0.375rem;
  }
`;

export const Input = styled(VerificationInput)`
  margin-top: 0.375rem;
  padding-left: 1rem;
`;

export const Upload = styled.div`
  margin-top: 2rem;
  /* p{
    text-align: left;
  } */
`;
