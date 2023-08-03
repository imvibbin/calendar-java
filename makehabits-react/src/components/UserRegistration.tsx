import { ChangeEvent, useState } from "react";
import UserInterface from "../models/UserInterface";

const UserRegistration = () => {
  let [user, setUser] = useState<UserInterface>({
    username: "",
    password: "",
    rol: 0,
  });

  const handleSubmit = (event: ChangeEvent) => {
    console.log(event);
  };

  return (
    <>
      <form>
        <input
          type="text"
          id="username"
          placeholder="Your email"
          value={user.username}
          onChange={handleSubmit}
        />
        <input
          type="text"
          id="password"
          placeholder="Your name"
          value={user.password}
          onChange={handleSubmit}
        />
        <input
          type="text"
          id="rol"
          placeholder="Role wapo"
          value={user.rol}
          onChange={handleSubmit}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default UserRegistration;
