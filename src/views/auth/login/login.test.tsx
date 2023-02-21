import React from "react";
import { render, screen } from "@testing-library/react";
import Login from ".";
import { MemoryRouter } from "react-router";
import RecoverPassword from "./recoverPassword";
import SetPassword from "./setPassword";

describe("Login Component", () => {
  test("should render Login component correctly", async () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    expect(screen.getByText("Welcome Back!")).toBeInTheDocument();
    expect(screen.getByTestId("email")).toBeRequired();
    expect(screen.getByTestId("password")).toBeRequired();
  });

  test("should render RecoverPassword component correctly", async () => {
    render(
      <MemoryRouter>
        <RecoverPassword />
      </MemoryRouter>
    );
    expect(screen.getByTestId("email")).toBeRequired();
  });

  test("should render SetPassword component correctly", async () => {
    render(
      <MemoryRouter>
        <SetPassword />
      </MemoryRouter>
    );
    expect(screen.getByTestId("new_password")).toBeRequired();
    expect(screen.getByTestId("confirm_password")).toBeRequired();
  });
});
