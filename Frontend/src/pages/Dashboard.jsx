import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../api/api";

import UserList from "../components/UserList";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function Dashboard() {
  const navigate = useNavigate();

  const [summary, setSummary] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
      return;
    }

    fetchSummary();
  }, []);

  const fetchSummary = async () => {
    try {
      const response = await api.get(
        "/tasks/summary"
      );

      setSummary(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");

    navigate("/");
  };

  return (
    <>
      <h1>Campus Connect Dashboard</h1>

      <button
        onClick={logoutHandler}
      >
        Logout
      </button>

      {summary && (
        <div>

          <h3>
            Total Tasks :
            {summary.total}
          </h3>

          <h3>
            Completed :
            {summary.completed}
          </h3>

          <h3>
            Pending :
            {summary.pending}
          </h3>

          <h3>
            In Progress :
            {summary.inProgress}
          </h3>

        </div>
      )}

      <TaskForm />

      <TaskList />

      <UserList />
    </>
  );
}

export default Dashboard;