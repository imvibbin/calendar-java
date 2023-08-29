import EventInterface from "./EventInterface";

interface Habit extends EventInterface {
  // Properties specific to form task_type "input1"
  task_habit_repetitions: number;
}

export default Habit;
