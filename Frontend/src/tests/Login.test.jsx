import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../pages/Login";
import { MemoryRouter } from "react-router-dom";

describe("Login Component", () => {
  test("renders login page", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    expect(
      screen.getByText("Login Page")
    ).toBeInTheDocument();
  });

  test("accepts email input", async () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const emailInput =
      screen.getByPlaceholderText(
        "Enter registered email..."
      );

    await userEvent.type(
      emailInput,
      "rahul@gmail.com"
    );

    expect(emailInput.value)
      .toBe("rahul@gmail.com");
  });

  test("accepts password input", async () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const passwordInput =
      screen.getByPlaceholderText(
        "Enter password..."
      );

    await userEvent.type(
      passwordInput,
      "123456"
    );

    expect(passwordInput.value)
      .toBe("123456");
  });

  test("shows validation errors", async () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    await userEvent.click(
      screen.getByText("Login")
    );

    expect(
      screen.getByText(
        "Email is required!"
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Password is required!"
      )
    ).toBeInTheDocument();
  });
});