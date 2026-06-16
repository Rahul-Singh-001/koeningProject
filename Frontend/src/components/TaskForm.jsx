import { useState } from "react";
import axios from "../api/api";

function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    await axios.post("/tasks", task);

    alert("Task Created");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        placeholder="Task Title"
        onChange={(e) =>
          setTask({
            ...task,
            title: e.target.value,
          })
        }
      />

      <input
        placeholder="Description"
        onChange={(e) =>
          setTask({
            ...task,
            description: e.target.value,
          })
        }
      />

      <button>Create Task</button>
    </form>
  );
}

export default TaskForm;