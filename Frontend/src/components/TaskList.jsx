import { useEffect, useState } from "react";
import axios from "../api/api";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState("");

  const fetchTasks = async (selectedStatus = "") => {
    try {

      let url = "/tasks";

      if (selectedStatus) {
        url = `/tasks?status=${selectedStatus}`;
      }

      const res = await axios.get(url);

      setTasks(res.data);

    } catch (error) {

      console.log(error);

    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <h2>Tasks</h2>

      <select
        value={status}
        onChange={(e) => {
          setStatus(e.target.value);
          fetchTasks(e.target.value);
        }}
      >
        <option value="">
          All Tasks
        </option>

        <option value="pending">
          Pending
        </option>

        <option value="in-progress">
          In Progress
        </option>

        <option value="completed">
          Completed
        </option>
      </select>

      {tasks.length === 0 ? (
        <p>No Tasks Found</p>
      ) : (
        tasks.map((task) => (
          <div key={task._id}>
            <h3>{task.title}</h3>

            <p>{task.description}</p>

            <p>
              Status:
              {" "}
              {task.status}
            </p>

            {task.assignedUser && (
              <p>
                Assigned To:
                {" "}
                {task.assignedUser.name}
              </p>
            )}
          </div>
        ))
      )}
    </>
  );
}

export default TaskList;