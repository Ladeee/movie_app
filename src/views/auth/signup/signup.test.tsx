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
  });
});
