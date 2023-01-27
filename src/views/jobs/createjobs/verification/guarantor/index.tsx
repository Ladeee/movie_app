import React, { useState } from "react";
import {
  AddGuarantor,
  AddressContainer,
  FormWrapper,
  Upload,
  Input,
  InputWrapper,
  LeftInfo,
  RightInfo,
  VerificationButtons,
  Submit,
} from "../verifications.styled";
export default function GuarantorVerification({
  nextPage,
}: {
  nextPage: () => void;
}) {
  return (
    <AddressContainer>
      <Upload>
        <p className="text-base font-semibold">Upload guarantor image</p>
      </Upload>
      <FormWrapper>
        <LeftInfo>
          <InputWrapper>
            <label>First Name</label>
            <Input type="text" placeholder="First name" />
          </InputWrapper>
          <InputWrapper>
            <label>Email</label>
            <Input type="email" placeholder="you@gmail.com" />
          </InputWrapper>
          <InputWrapper>
            <label>Address</label>
            <Input type="text" placeholder="111, Williams st Yaba" />
          </InputWrapper>
          <InputWrapper>
            <label>L.G.A</label>
            <Input type="text" />
          </InputWrapper>
          <InputWrapper>
            <label>Additional Information</label>
            <textarea />
          </InputWrapper>

          <VerificationButtons>
            <AddGuarantor onClick={nextPage}>Add Guarantor</AddGuarantor>
            <Submit>Submit and Pay</Submit>
          </VerificationButtons>
        </LeftInfo>

        <RightInfo>
          <InputWrapper>
            <label>Last Name</label>
            <Input type="text" placeholder="Last name" />
          </InputWrapper>
          <InputWrapper>
            <label>Phone Number</label>
            <Input type="tel" placeholder="+1 (555)" />
          </InputWrapper>
          <InputWrapper>
            <label>State</label>
            <Input type="text" />
          </InputWrapper>
          <InputWrapper>
            <label>Closest Landmark</label>
            <Input type="text" placeholder="you@company.com" />
          </InputWrapper>
          <InputWrapper>
            <label>Verification Due Date</label>
            <Input type="text" />
          </InputWrapper>
        </RightInfo>
      </FormWrapper>
    </AddressContainer>
  );
}
