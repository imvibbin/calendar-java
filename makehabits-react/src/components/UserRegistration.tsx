import { ChangeEvent, FormEvent, useState } from "react";
import UserInterface from "../models/UserInterface";
import { createUser } from "../services/UserService";

const UserRegistration = () => {
  const userInitial = {
    id: 0,
    username: "",
    password: "",
    rol: 0,
  };

  const [user, setUser] = useState<UserInterface>(userInitial);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(user);
    createUser(user);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="tu username"
          value={user.username}
          onChange={handleOnChange}
        />
        <input
          type="text"
          id="password"
          name="password"
          placeholder="tu contraseña"
          value={user.password}
          onChange={handleOnChange}
        />
        <input
          type="number"
          id="rol"
          name="rol"
          placeholder="role"
          value={user.rol}
          onChange={handleOnChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default UserRegistration;
