import EventInterface from "./EventInterface";

interface UserInterface {
  user_id: number;
  username: string;
  email: string;
  password: string;
  activities: EventInterface[];
}

export default UserInterface;
