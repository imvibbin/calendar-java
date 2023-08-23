import ActivityInterface from "../models/ActivityInterface";

const BASE_URL = "http://localhost:8080/activity";

// Function to make a GET request to fetch all activitys
async function getAllactivitys(): Promise<ActivityInterface[]> {
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
async function createActivity(newActivity: ActivityInterface): Promise<ActivityInterface> {
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
  try {
    const response = await fetch(`${BASE_URL}/${activityId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
  } catch (error: any) {
    throw new Error("Failed to delete activity: " + error.message);
  }
}

export { createActivity, deleteActivity};
