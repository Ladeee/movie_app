import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Confirm from "./confirm";
import Successful from "./successful";

describe("Email Component", () => {
  test("should render ConfirmEmail component correctly", async () => {
    render(
      <MemoryRouter>
        <Confirm />
      </MemoryRouter>
    );
    expect(
      screen.getByText("Please Confirm Your Email Address")
    ).toBeInTheDocument();
  });

  test("should render EmailSuccessful component correctly", async () => {
    render(
      <MemoryRouter>
        <Successful />
      </MemoryRouter>
    );
    expect(
      screen.getByText("Email Confirmation Successful")
    ).toBeInTheDocument();
  });
});
