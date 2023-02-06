import React from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../../../components/authLayout";
import {
  Container,
  Heading,
  FormContainer,
  RememberPassword,
  Check,
  Remember,
  Forgot,
  Button,
  Account,
  InputWrapper,
} from "./login.styled";

export default function Login() {
  return (
    <AuthLayout color="#007C23">
      <Container>
        <Heading>Welcome Back!</Heading>
        <FormContainer>
          <InputWrapper>
            <label htmlFor="email">Email Address</label>
            <input type="email" required id="email" />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="password">Password</label>
            <input type="password" required id="password" minLength={6} />
          </InputWrapper>
        </FormContainer>

        <RememberPassword>
          <Check>
            <input type="checkbox" className="w-19 h-19 cursor-pointer" />
            <Remember>Remember me</Remember>
          </Check>

          <Link to="/recoverpassword">
            <Forgot>Forgot password</Forgot>
          </Link>
        </RememberPassword>
        <Button>Login</Button>

        <Link to="/signup">
          <Account>Create Account</Account>
        </Link>
      </Container>
    </AuthLayout>
  );
}
