import EventInterface from "../models/EventInterface";

const BASE_URL = "http://localhost:8080/activity";

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

// Function to make a DELETE request to delete a activity
async function deleteActivity(activityId: number): Promise<void> {
  const response = await fetch(`${BASE_URL}/${activityId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.message); // Throw an error with the error message from the backend
  }

  return response.json();
}

export { createActivity, deleteActivity };
