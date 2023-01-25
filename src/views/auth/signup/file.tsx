import React from "react";
import { Link } from "react-router-dom";
import {
  SignupContainer,
  Heading,
  Addresses,
  FormContainer,
  Button,
} from "../../auth/signup/signupPages/pages.styled";

export default function File({ goToNextPage }: { goToNextPage: () => void }) {
  return (
    <>
      <SignupContainer>
        <Heading>Get Started</Heading>
        <Addresses>
          With Nester Verify, you are able to verify addresses <br />
          easily, from anywhere in the world
        </Addresses>

        <FormContainer>
          <div>
            <label>Full Name</label>
            <input type="text" required />
          </div>
          <div>
            <label>Phone Number</label>
            <input type="text" required />
          </div>
          <div>
            <label>Email Address</label>
            <input type="text" required />
          </div>
          <div>
            <label id="create">Create Password</label>
            <input type="text" required />
          </div>
          <div>
            <label>Confirm Password</label>
            <input type="text" required />
          </div>
        </FormContainer>

        <Button onClick={goToNextPage}>Next</Button>
      </SignupContainer>
    </>
  );
}
