import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TaskForm from "../components/TaskForm";

describe("TaskForm", () => {

  test("renders task form", () => {
    render(<TaskForm />);

    expect(
      screen.getByPlaceholderText(
        "Task Title"
      )
    ).toBeInTheDocument();
  });

  test("accepts task title", async () => {

    render(<TaskForm />);

    const title =
      screen.getByPlaceholderText(
        "Task Title"
      );

    await userEvent.type(
      title,
      "React Assignment"
    );

    expect(title.value)
      .toBe("React Assignment");
  });

});