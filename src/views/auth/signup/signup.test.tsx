import React from "react";
import { render, screen } from "@testing-library/react";
import Signup from ".";
import { MemoryRouter } from "react-router";

describe("Signup", () => {
  test("should render Signup component correctly", async () => {
    render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );
    expect(screen.getByText("Get Started")).toBeInTheDocument();
    expect(screen.getByTestId("name")).toBeRequired();
    expect(screen.getByTestId("phone")).toBeRequired();
    expect(screen.getByTestId("email")).toBeRequired();
    expect(screen.getByTestId("password")).toBeRequired();
    expect(screen.getByTestId("confirm_password")).toBeRequired();
  });
});
