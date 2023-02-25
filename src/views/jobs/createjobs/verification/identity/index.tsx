// import { useState } from "react";
import {
  FormWrapper,
  Input,
  InputWrapper,
  VerificationButtons,
  Submit,
  Info,
  IdentityContainer,
} from "../verifications.styled";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function IdentityVerification() {
  return (
    <IdentityContainer>
      <FormWrapper>
        <Info>
          <InputWrapper>
            <label>First Name</label>
            <Input type="text" placeholder="First name" />
          </InputWrapper>
          <InputWrapper>
            <label>Last Name</label>
            <Input type="text" placeholder="Last name" />
          </InputWrapper>
        </Info>

        <Info>
          <InputWrapper>
            <label>Email</label>
            <Input type="email" placeholder="you@gmail.com" />
          </InputWrapper>
          <InputWrapper>
            <label>Phone Number</label>
            <Input type="tel" placeholder="+1 (555)" />
          </InputWrapper>
        </Info>

        <Info>
          <InputWrapper>
            <label>ID Type</label>
            <Input type="text" />
            <i id="lgaIcon">
              <MdOutlineKeyboardArrowDown />
            </i>
          </InputWrapper>
          <InputWrapper>
            <label>ID Number</label>
            <Input type="number" />
            <i id="lgaIcon">
              <MdOutlineKeyboardArrowDown />
            </i>
          </InputWrapper>
        </Info>

        <Info id="reverse">
          <InputWrapper>
            <label>Additional Information</label>
            <textarea />
          </InputWrapper>
          <InputWrapper>
            <label>Gender</label>
            <Input type="text" />
            <i id="calender">
              <MdOutlineKeyboardArrowDown />
            </i>
          </InputWrapper>
        </Info>

        <Info>
          <VerificationButtons>
            <Submit>Submit and Pay</Submit>
          </VerificationButtons>
        </Info>
      </FormWrapper>
    </IdentityContainer>
  );
}
