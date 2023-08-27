 import  EventInterface  from "../models/EventInterface";

  class JsonManager {
    private events: EventInterface[] = [];
  
    constructor(initialData: EventInterface[]) {
      this.events = initialData;
    }
  
    getEvents(): EventInterface[] {
      return this.events;
    }
  
    getEventById(id: number): EventInterface | undefined {
      return this.events.find(event => event.id === id);
    }
  
    addEvent(newEvent: EventInterface): void {
      this.events.push(newEvent);
    }
  
    updateEvent(updatedEvent: EventInterface): void {
      const index = this.events.findIndex(event => event.id === updatedEvent.id);
      if (index !== -1) {
        this.events[index] = updatedEvent;
      }
    }
  
    deleteEvent(id: number): void {
      const index = this.events.findIndex(event => event.id === id);
      if (index !== -1) {
        this.events.splice(index, 1);
      }
    }
  }
  
  // Example usage
  const initialData: EventInterface[] = [
    { id: 1, name: "Event 1" },
    { id: 2, name: "Event 2" },
    // Add more initial events as needed
  ];
  
  const jsonManager = new JsonManager(initialData);
  
  // Now you can use the jsonManager to manipulate events from different React components
  jsonManager.addEvent({ id: 3, name: "Event 3" });
  jsonManager.updateEvent({ id: 2, name: "Updated Event 2" });
  jsonManager.deleteEvent(1);
  
  const updatedEvents = jsonManager.getEvents();
  console.log(updatedEvents);
export { updateEvent, deleteEvent };
 