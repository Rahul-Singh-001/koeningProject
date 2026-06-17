import { useEffect, useState } from "react";
import axios from "../api/api";

function UserList() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const fetchUsers = async () => {
    try {
      const res = await axios.get("/users");
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const searchUsers = async (keyword) => {
    try {
      if (!keyword.trim()) {
        fetchUsers();
        return;
      }

      const res = await axios.get(
        `/users/search?keyword=${keyword}`
      );

      setUsers(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <h2>Students</h2>

      <input
        type="text"
        placeholder="Search by name or email..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          searchUsers(e.target.value);
        }}
      />

      {users.length === 0 ? (
        <p>No Users Found</p>
      ) : (
        users.map((user) => (
          <div key={user._id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.role}</p>
          </div>
        ))
      )}
    </>
  );
}

export default UserList;