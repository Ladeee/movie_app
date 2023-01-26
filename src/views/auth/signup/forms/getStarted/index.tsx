import React from "react";
import {
  SignupContainer,
  Heading,
  Addresses,
  FormContainer,
  InputWrapper,
  Btn,
  Button,
} from "../../pages.styled";

export default function GetStarted({
  goToNextPage,
}: {
  goToNextPage: () => void;
}) {
  return (
    <>
      <SignupContainer>
        <Heading>Get Started</Heading>
        <Addresses>
          With Nester Verify, you are able to verify addresses <br />
          easily, from anywhere in the world
        </Addresses>

        <FormContainer>
          <InputWrapper>
            <label>Full Name</label>
            <input type="text" required />
          </InputWrapper>
          <InputWrapper>
            <label>Phone Number</label>
            <input type="text" required />
          </InputWrapper>
          <InputWrapper>
            <label>Email Address</label>
            <input type="text" required />
          </InputWrapper>
          <InputWrapper>
            <label id="create">Create Password</label>
            <input type="text" required />
          </InputWrapper>
          <InputWrapper>
            <label>Confirm Password</label>
            <input type="text" required />
          </InputWrapper>
        </FormContainer>

        <Btn>
          <Button onClick={goToNextPage}>Next</Button>
        </Btn>
      </SignupContainer>
    </>
  );
}
