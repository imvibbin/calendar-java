interface EventFormatInterface {
  task_id: number;
  task_name: string;
  task_description: string;
  task_hour_start: string;
  task_hour_end: string;
  task_date_start: string | null;
  task_date_end: string | null;
  task_habit_repeated: number | null;
  task_type: "habit" | "appointment"; // Discriminator property
}

export default EventFormatInterface;
