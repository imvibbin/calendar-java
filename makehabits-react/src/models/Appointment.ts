import EventInterface from "./EventInterface";

interface Appointment extends EventInterface {
  // Properties specific to form task_type "input2"
  task_date_range: string;
}

export default Appointment;
