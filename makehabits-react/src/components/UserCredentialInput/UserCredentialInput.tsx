// UserCredentialInput.tsx
import React, { ChangeEvent } from "react";

interface InputFieldProps {
  icon: React.ReactNode;
  type: string;
  id: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const UserCredentialInput: React.FC<InputFieldProps> = ({
  icon,
  type,
  id,
  name,
  placeholder,
  value,
  onChange,
}) => (
  <div className="main-container-content-form-input d-flex justify-content-between align-items-center w-100">
    <div className="input-icons p-3 rounded-circle d-flex justify-content-center align-items-center h-100">
      {icon}
    </div>
    <input
      type={type}
      id={id}
      className="p-3 rounded-pill h-100"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
    />
  </div>
);

export default UserCredentialInput;
