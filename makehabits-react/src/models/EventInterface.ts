interface EventInterface {
  task_id: number;
  user_id: number;
  task_name: string;
  task_description: string;
  task_hour_range: string;
  task_type: "habit" | "appointment"; // Discriminator property
}

export default EventInterface;
