import UserInterface from "../models/UserInterface";

const BASE_URL = "http://localhost:8080/users";

// Function to make a GET request to fetch all users
async function getAllUsers(): Promise<UserInterface[]> {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.message); // Throw an error with the error message from the backend
  }

  return response.json();
}

// Function to make a POST request to create a new user
async function createUser(newUser: UserInterface): Promise<UserInterface> {
  const response = await fetch(`${BASE_URL}/registration`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.message); // Throw an error with the error message from the backend
  }

  return response.json();
}

// Function to make a PUT request to update a user
async function updateUser(updatedUser: UserInterface): Promise<UserInterface> {
  const response = await fetch(`${BASE_URL}/${updatedUser.user_id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedUser),
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.message); // Throw an error with the error message from the backend
  }
  return await response.json();
}

// Function to make a DELETE request to delete a user
async function deleteUser(userId: number): Promise<void> {
  const response = await fetch(`${BASE_URL}/${userId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.message); // Throw an error with the error message from the backend
  }
  return await response.json();
}

export { getAllUsers, createUser, updateUser, deleteUser };
