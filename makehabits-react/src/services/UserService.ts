import UserInterface from "../models/UserInterface";

const BASE_URL = "http://localhost:8080/user";

// Function to make a GET request to fetch all users
async function getAllUsers(): Promise<UserInterface[]> {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    return await response.json();
  } catch (error: any) {
    throw new Error("Failed to fetch users: " + error.message);
  }
}

// Function to make a POST request to create a new user
async function createUser(newUser: UserInterface): Promise<UserInterface> {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    return await response.json();
  } catch (error: any) {
    throw new Error("Failed to create user: " + error.message);
  }
}

// Function to make a PUT request to update a user
async function updateUser(updatedUser: UserInterface): Promise<UserInterface> {
  try {
    const response = await fetch(`${BASE_URL}/${updatedUser.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    return await response.json();
  } catch (error: any) {
    throw new Error("Failed to update user: " + error.message);
  }
}

// Function to make a DELETE request to delete a user
async function deleteUser(userId: number): Promise<void> {
  try {
    const response = await fetch(`${BASE_URL}/${userId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
  } catch (error: any) {
    throw new Error("Failed to delete user: " + error.message);
  }
}

export { getAllUsers, createUser, updateUser, deleteUser };
