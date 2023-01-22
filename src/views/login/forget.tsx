import React from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../signup/authLayout";
import {
  Container,
  Heading,
  Addresses,
  FormContainer,
  Button,
  Acc,
} from "./login.styled";

export default function Forget() {
  return (
    <AuthLayout>
      <Container>
        <Heading>Recover your password easily!</Heading>
        <Addresses>
          With Nester Verify, you are able to verify addresses <br />
          easily, from anywhere in the world
        </Addresses>
        <FormContainer>
          <label>Email Address</label>
          <input type="text" required />
        </FormContainer>

        <Link to="/setPassword">
          <Button>Reset</Button>
        </Link>

        {/* <Link to="/"> */}
        <Acc>Create Account</Acc>
        {/* </Link> */}
      </Container>
    </AuthLayout>
  );
}
