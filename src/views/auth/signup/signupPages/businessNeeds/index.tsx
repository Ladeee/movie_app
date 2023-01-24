import React from "react";
import AuthLayout from "../../../../../components/authLayout";
import {
  SignupContainer,
  Heading,
  Addresses,
  FormTwoContainer,
  InputWrapper,
  Icon,
  Button,
} from "../pages.styled";
import Square from "../../../../../assets/images/authentification/square.png";
import { Link } from "react-router-dom";

export default function BusinessNeeds() {
  return (
    <AuthLayout color="#A96644">
      <SignupContainer>
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

        <Link to="/companydetails">
          <Button>Continue</Button>
        </Link>
      </SignupContainer>
    </AuthLayout>
  );
}
