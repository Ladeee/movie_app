import React from "react";
import {
  SignupContainer,
  Heading,
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
        <Heading className="sm:text-center md:text-left">Get Started</Heading>
        <FormContainer>
          <InputWrapper>
            <label htmlFor="name">Full Name</label>
            <input type="text" required id="name" data-testid="name" />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="phone">Phone Number</label>
            <input type="number" required id="phone" data-testid="phone" />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="email">Email Address</label>
            <input type="email" required id="email" data-testid="email" />
          </InputWrapper>
          <InputWrapper>
            <label id="password" htmlFor="password">
              Create Password
            </label>
            <input
              type="password"
              required
              id="password"
              data-testid="password"
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="confirm_passoword">Confirm Password</label>
            <input
              type="password"
              required
              id="confirm_passoword"
              data-testid="confirm_password"
            />
          </InputWrapper>
        </FormContainer>

        <Btn>
          <Button type="submit" onClick={goToNextPage}>
            Next
          </Button>
        </Btn>
      </SignupContainer>
    </>
  );
}
