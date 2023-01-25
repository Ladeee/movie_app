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
  Box,
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
            <Box>Address Verification</Box>
            <input type="checkbox" />
          </InputWrapper>

          <InputWrapper>
            <Box>Identity Verification</Box>
            <input type="checkbox" />
          </InputWrapper>

          <InputWrapper>
            <Box>Business Verification</Box>
            <input type="checkbox" />
          </InputWrapper>

          <InputWrapper>
            <Box>Account Opening</Box>
            <input type="checkbox" />
          </InputWrapper>

          <InputWrapper>
            <Box>Insurance</Box>
            <input type="checkbox" />
          </InputWrapper>
        </FormTwoContainer>

        <Link to="/companydetails">
          <Button>Continue</Button>
        </Link>
      </SignupContainer>
    </AuthLayout>
  );
}
