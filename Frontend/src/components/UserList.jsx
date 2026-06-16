import { useEffect, useState } from "react";
import axios from "../api/api";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <>
      {users.map((user) => (
        <div key={user._id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </>
  );
}

export default UserList;