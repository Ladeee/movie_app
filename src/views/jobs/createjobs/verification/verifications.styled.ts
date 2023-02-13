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
    width: 80%;
    margin: 2.164rem auto;
  }

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;

export const Header = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  p {
    font-size: 1.5rem;
    line-height: 2.25rem;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
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

  #job-text {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const RightHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-top: 2.2844rem;

  @media (max-width: 768px) {
    width: 40%;
  }
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
  width: 100%;
`;

export const AddGuarantor = styled(VerificationDownButtons)`
  background-color: #fefefe;
  color: #1f2041;

  @media (max-width: 768px) {
    width: 60%;
  }
`;

export const Submit = styled(VerificationDownButtons)`
  margin-top: 1.625rem;
  background-color: #1f2041;
  color: #ffffff;

  @media (max-width: 768px) {
    width: 60%;
  }
`;

export const PageDisplay = styled.div`
  margin-top: 1.625rem;
  background: #ffffff;
  border: 1px solid #e4e4e7;
  border-radius: 0.625rem;
  padding-bottom: 3.8125rem;
  padding-left: 4.25rem;

  @media (max-width: 768px) {
    padding: auto;
    width: 100%;
  }
`;

// Address verification

export const AddressContainer = styled.div``;

export const FormWrapper = styled.div`
  margin-top: 1.6875rem;

  #reverse {
    @media (max-width: 768px) {
      display: flex;
      flex-wrap: wrap-reverse;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3.0625rem;

  @media (max-width: 768px) {
    gap: 0;
  }
`;

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
    width: 26rem;
    height: 7.25rem;
    border-radius: 0.5rem;
    margin-top: 0.375rem;

    @media (max-width: 1024px) {
      width: 30rem;
    }

    @media (max-width: 768px) {
      width: 80%;
    }
  }

  i {
    cursor: pointer;
    position: absolute;
    right: 1.3438rem;
    bottom: 0.5rem;

    @media (max-width: 768px) {
      margin-right: 20%;
    }
  }
  #calender {
    position: absolute;
    top: 40%;

    @media (max-width: 768px) {
      top: 64%;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Input = styled(VerificationInput)`
  margin-top: 0.375rem;
  padding-left: 1rem;
  width: 26rem;

  @media (max-width: 1024px) {
    width: 30rem;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

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
