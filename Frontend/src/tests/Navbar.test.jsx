import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";
import { MemoryRouter } from "react-router-dom";

describe("Navbar", () => {

  test("renders logo", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(
      screen.getByText(
        "ChatGram"
      )
    ).toBeInTheDocument();
  });

  test("renders links", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(
      screen.getByText("Home")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Login")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Register")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Dashboard")
    ).toBeInTheDocument();
  });

});