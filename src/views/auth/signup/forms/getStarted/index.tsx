import React, { useState } from "react";
import { IValues } from "../../../type";
import {
  SignupContainer,
  Heading,
  FormContainer,
  InputWrapper,
  Btn,
  Button,
} from "../../pages.styled";
import validation from "../../validation";

export default function GetStarted({
  goToNextPage,
}: {
  goToNextPage: () => void;
}) {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirm_password: "",
  });

  const [errors, setErrors] = useState<IValues>({
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleInput = (e: any) => {
    setValues({ ...values, [e.target.name]: [e.target.value] });
  };

  const handleValidation = (e: any) => {
    e.preventDefault();
    setErrors(validation(values));
  };
  return (
    <>
      <SignupContainer>
        <Heading className="sm:text-center md:text-left">Get Started</Heading>
        <FormContainer onSubmit={handleValidation}>
          <InputWrapper>
            <label htmlFor="name">Full Name</label>
            <input type="text" required id="name" data-testid="name" />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="phone">Phone Number</label>
            <input type="number" required id="phone" minLength={11} />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              required
              id="email"
              name="email"
              onChange={handleInput}
              value={values.email}
            />
            {errors.email && (
              <p className="text-red-500 mt-2">{errors.email}</p>
            )}
          </InputWrapper>
          <InputWrapper>
            <label id="password" htmlFor="password">
              Create Password
            </label>
            <input
              type="password"
              required
              id="password"
              minLength={6}
              name="password"
              onChange={handleInput}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="confirm_password">Confirm Password</label>
            <input
              type="password"
              required
              id="confirm_password"
              minLength={6}
              name="confirm_password"
              onChange={handleInput}
            />
            {errors.confirm_password && (
              <p className="text-red-500">{errors.confirm_password}</p>
            )}
          </InputWrapper>
          <Btn>
            <Button
              type="submit"
              onClick={!errors.confirm_password ? goToNextPage : undefined}
            >
              Next
            </Button>
          </Btn>
        </FormContainer>
      </SignupContainer>
    </>
  );
}
