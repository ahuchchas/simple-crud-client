import { useLoaderData } from "react-router-dom";

const Update = () => {
  const lodedUser = useLoaderData();

  function handleUpdate(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const updatedUser = { name, email };
    console.log(updatedUser);

    fetch(`http://localhost:5000/users/${lodedUser._id}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("user updated successfully");
        }
      });
  }
  return (
    <div>
      <h3>Update information of : {lodedUser.name}</h3>
      <form onSubmit={handleUpdate}>
        <input type="text" name="name" defaultValue={lodedUser?.name} id="" />
        <br />
        <input
          type="email"
          name="email"
          defaultValue={lodedUser?.email}
          id=""
        />
        <br />
        <br />
        <input type="submit" value="UPDATE" />
      </form>
    </div>
  );
};

export default Update;
