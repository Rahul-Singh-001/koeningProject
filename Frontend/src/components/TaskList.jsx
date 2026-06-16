import { useEffect, useState } from "react";
import axios from "../api/api";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("/tasks").then((res) => {
      setTasks(res.data);
    });
  }, []);

  return (
    <>
      {tasks.map((task) => (
        <div key={task._id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>{task.status}</p>
        </div>
      ))}
    </>
  );
}

export default TaskList;