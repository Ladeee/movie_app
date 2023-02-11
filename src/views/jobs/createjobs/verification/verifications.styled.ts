import styled from "styled-components";
import {
  VerificationTopButtons,
  VerificationDownButtons,
  VerificationInput,
} from "./button";

// verifications
export const VerificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Inter", sans-serif;
  white-space: nowrap;

  @media (max-width: 1024px) {
    float: unset;
  }
`;

export const Header = styled.section`
  display: flex;
  align-items: center;
  /* gap: 26.625rem; */

  gap: 20rem;
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
  /* width: 75.5rem; */
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

  /* flex-wrap: wrap-reverse;
  width: 100%; */
`;

export const LeftInfo = styled.section``;

export const RightInfo = styled.section``;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

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

  i {
    cursor: pointer;
    position: absolute;
    right: 1.3438rem;
    bottom: 0.5rem;
  }
`;

export const Input = styled(VerificationInput)`
  margin-top: 0.375rem;
  padding-left: 1rem;
`;

// export const DropdownIcon = styled.div`

// `;

export const Upload = styled.div`
  margin-top: 2rem;
`;

export const ImageWrapper = styled.div`
  cursor: pointer;
  position: relative;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #999999;
  border-radius: 50%;
  width: 7.6875rem;
  height: 7.6875rem;
  margin-top: 1.4375rem;

  .uploadInput {
    color: transparent;
    background-color: transparent;
    cursor: pointer;
    width: 7.6875rem;
    height: 7.6875rem;
    border-radius: 50%;
    opacity: 0;
    z-index: 9;
  }

  i {
    position: absolute;
    color: #999999;
  }

  .uploadedImage {
    position: absolute;
    width: 7.6875rem;
    height: 7.6875rem;
    border-radius: 50%;
    z-index: 1;
  }
`;

// verification navbar

export const VerificationNavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5.1875rem;
`;

export const Individual = styled.button`
  border: 1px solid #7961f9;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.25rem;
  width: 0.875rem;
  height: 2.3125rem;
  border-radius: 0.1875rem;
`;

export const Guarantor = styled.button`
  border: 1px solid #7961f9;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-radius: 0.1875rem;
`;

export const Agent = styled.button`
  border: 1px solid #7961f9;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.25rem;
  border-radius: 0.1875rem;
`;
