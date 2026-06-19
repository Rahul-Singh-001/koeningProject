import { render, screen } from "@testing-library/react";
import Dashboard from "../pages/Dashboard";
import { MemoryRouter } from "react-router-dom";

jest.mock("../api/api", () => ({
  get: jest.fn(() =>
    Promise.resolve({
      data: {
        total: 10,
        completed: 5,
        pending: 3,
        inProgress: 2
      }
    })
  )
}));

describe("Dashboard", () => {

  beforeEach(() => {
    localStorage.setItem(
      "token",
      "abc123"
    );
  });

  test("renders dashboard", () => {
    render(
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>
    );

    expect(
      screen.getByText(
        "Campus Connect Dashboard"
      )
    ).toBeInTheDocument();
  });

  test("logout button exists", () => {
    render(
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>
    );

    expect(
      screen.getByText(
        "Logout"
      )
    ).toBeInTheDocument();
  });

});