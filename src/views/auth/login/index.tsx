import React from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../authLayout";
import {
  Container,
  Heading,
  Addresses,
  FormContainer,
  RememberPassword,
  Check,
  Remember,
  Forgot,
  Button,
  Account,
} from "./login.styled";

export default function Login() {
  return (
    <AuthLayout color="#007C23">
      <Container>
        <Heading>Welcome Back!</Heading>
        <Addresses>
          With Nester Verify, you are able to verify addresses <br />
          easily, from anywhere in the world
        </Addresses>
        <FormContainer>
          <label>Email Address</label>
          <input type="text" required />
          <label id="create">Password</label>
          <input type="text" required />
        </FormContainer>

        <RememberPassword>
          <Check>
            <input type="checkbox" className="w-19 h-19 cursor-pointer" />
            <Remember>Remember me</Remember>
          </Check>

          <Link to="/forget">
            <Forgot>Forgot password</Forgot>
          </Link>
        </RememberPassword>
        <Button>Login</Button>

        <Link to="/">
          <Account>Create Account</Account>
        </Link>
      </Container>
    </AuthLayout>
  );
}
