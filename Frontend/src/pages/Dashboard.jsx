import UserList from "../components/UserList";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function Dashboard() {
  return (
    <>
      <h1>Campus Connect Dashboard</h1>

      <TaskForm />

      <TaskList />

      <UserList />
    </>
  );
}

export default Dashboard;