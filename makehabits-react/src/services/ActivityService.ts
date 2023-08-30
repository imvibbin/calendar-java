import Appointment from "../models/Appointment";
import EventInterface from "../models/EventInterface";
import Habit from "../models/Habit";

const BASE_URL = "http://localhost:8080";

// Function to make a GET request to fetch all activitys
async function getAllactivitys(): Promise<EventInterface[]> {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    return await response.json();
  } catch (error: any) {
    throw new Error("Failed to fetch activitys: " + error.message);
  }
}

// Function to make a POST request to create a new activity
async function createActivity(
  newActivity: EventInterface,
): Promise<EventInterface> {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newActivity),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    return await response.json();
  } catch (error: any) {
    throw new Error("Failed to create activity: " + error.message);
  }
}

async function updateActivity(
  newActivity: EventInterface,
): Promise<EventInterface> {
  console.log(newActivity);
  const response = await fetch(`${BASE_URL}/activity`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newActivity),
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.message); // Throw an error with the error message from the backend
  }

  return response.json();
}

// Function to make a DELETE request to delete a activity
async function deleteActivity(activityId: number): Promise<void> {
  const response = await fetch(`${BASE_URL}/activity/${activityId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.message); // Throw an error with the error message from the backend
  }

  return response.json();
}

export { createActivity, deleteActivity, updateActivity };
