import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import UserCard from "./Components/UserCard";

function App() {
  const [users, setUsers] = useState([]);
  const [searchUser, setSearchUser] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );

    setUsers(response.data);
  };

  const filteredUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(searchUser.toLowerCase());
  });

  return (
    <>
      <h1>User Dashboard</h1>
      <input
        type="text"
        value={searchUser}
        onChange={(e) => setSearchUser(e.target.value)}
      />

      <div className="user-container">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
        {/* {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))} */}
      </div>
    </>
  );
}
export default App;
