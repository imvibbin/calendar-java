interface EventInterface {
  task_id: number;
  user_id: number;
  task_name: string;
  task_description: string;
  task_hourrange: string;
}

export default EventInterface;

interface Habit extends EventInterface {
  task_type: "habit"; // Discriminator property

  // Properties specific to form task_type "input1"
  task_habitrepeated: number;
}

interface Appointment extends EventInterface {
  task_type: "appointment"; // Discriminator property

  // Properties specific to form task_type "input2"
  task_hourrange: string;
}

type FormEvent = Habit | Appointment;

export type { EventInterface, Habit, Appointment, FormEvent };