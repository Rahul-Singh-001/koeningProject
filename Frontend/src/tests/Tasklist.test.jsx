import { render, screen } from "@testing-library/react";
import TaskList from "../components/TaskList";

jest.mock("../api/api", () => ({
  get: jest.fn(() =>
    Promise.resolve({
      data: []
    })
  )
}));

describe("TaskList", () => {

  test("renders task heading", () => {
    render(<TaskList />);

    expect(
      screen.getByText("Tasks")
    ).toBeInTheDocument();
  });

  test("shows empty state", async () => {
    render(<TaskList />);

    expect(
      await screen.findByText(
        "No Tasks Found"
      )
    ).toBeInTheDocument();
  });

});