import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Register from "../pages/Register";
import { MemoryRouter } from "react-router-dom";

describe("Register Page", () => {

  test("renders register page", () => {
    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );

    expect(
      screen.getByText("Register")
    ).toBeInTheDocument();
  });

  test("accepts name input", async () => {
    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );

    const name =
      screen.getByPlaceholderText(
        "Name"
      );

    await userEvent.type(
      name,
      "Rahul"
    );

    expect(name.value)
      .toBe("Rahul");
  });

  test("shows required validation", async () => {
    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );

    await userEvent.click(
      screen.getByText("Register")
    );

    expect(
      screen.getByText(
        "All fields are required"
      )
    ).toBeInTheDocument();
  });

});