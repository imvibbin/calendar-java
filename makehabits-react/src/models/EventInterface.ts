interface EventInterface {
    id: number;
    name: string;
    description: string;
    hourrange: string[];
       // Add other properties as needed
}

export default EventInterface;

interface Habit extends EventInterface {
    type: 'habit'; // Discriminator property

    // Properties specific to form type "input1"
    habitRepeated: number;
  
}
  
  interface Appointment extends EventInterface {
    type: 'appointment'; // Discriminator property
  
    // Properties specific to form type "input2"
    daterange: string[];
  }
  
  export type Form = Habit | Appointment;

    const Activity: Form = {
    id: 1,
    type: 'habit',
    name: 'gym',
    description: 'Gym con los panas',
    hourrange: ["2023-08-23T19:30:00.814Z","2023-08-23T21:00:00.389Z"],
    habitRepeated: 2,

};  