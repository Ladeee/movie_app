import React from "react";
import SignupLayout from "../../signupLayout";
import {
  PageOneContainer,
  Heading,
  Addresses,
  FormTwoContainer,
  InputWrapper,
  Icon,
  Button,
} from "../pages.styled";
import Square from "../../../../assets/images/auth/square.png";
import { Link } from "react-router-dom";

export default function SignupPageTwo() {
  return (
    <SignupLayout color="#A96644">
      <PageOneContainer>
        <Heading>Select Your Business Needs</Heading>
        <Addresses>
          With Nester Verify, you are able to verify addresses <br />
          easily, from anywhere in the world
        </Addresses>
        <FormTwoContainer>
          <InputWrapper>
            <input type="text" required placeholder="Address Verification" />
            <Icon>
              <img src={Square} alt="" />
            </Icon>
          </InputWrapper>

          <InputWrapper>
            <input type="text" required placeholder="Identity Verification" />
            <Icon>
              <img src={Square} alt="" />
            </Icon>
          </InputWrapper>

          <InputWrapper>
            <input type="text" required placeholder="Business Verification" />
            <Icon>
              <img src={Square} alt="" />
            </Icon>
          </InputWrapper>

          <InputWrapper>
            <input type="text" required placeholder="Account Opening" />
            <Icon>
              <img src={Square} alt="" />
            </Icon>
          </InputWrapper>

          <InputWrapper>
            <input type="text" required placeholder="Insurance" />
            <Icon>
              <img src={Square} alt="" />
            </Icon>
          </InputWrapper>
        </FormTwoContainer>
        <Link to="/signupPageThree">
          <Button>Continue</Button>
        </Link>
      </PageOneContainer>
    </SignupLayout>
  );
}
