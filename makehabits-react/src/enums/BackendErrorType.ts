enum BackendErrorType {
  UserNotFound = "User not found",
  InvalidUserOrPassword = "Invalid user or password",
  UsernameAlreadyExists = "Username already exists",
  EmailAlreadyExists = "Email already exists",
  // ... add other error messages as needed
}

export default BackendErrorType;
