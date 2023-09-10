import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  function handleDeleteUser(_id) {
    console.log(_id);
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("deleted successfully");
          const remaining = users.filter((user) => user._id !== _id);
          setUsers(remaining);
        }
      });
  }

  return (
    <div>
      <h2>Users: {users.length}</h2>
      <div>
        {users.map((user) => (
          <p key={user._id}>
            {user.name} : {user.email} : {user._id}{" "}
            <Link to={`/update/${user._id}`}>
              <button>UPDATE</button>
            </Link>
            <button onClick={() => handleDeleteUser(user._id)}>DELETE</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
