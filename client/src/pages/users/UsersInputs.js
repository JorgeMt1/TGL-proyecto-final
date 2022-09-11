export const createInputs = [
  {
    id: 1,
    name: "email",
    type: "email",
    placeholder: "Email",
    errorMessage: "It should be a valid email address!",
    label: "Email",
    required: true,
  },
  {
    id: 2,
    name: "password",
    type: "password",
    placeholder: "Password",
    errorMessage:
      "Password should bea at least 8 characters!",
    label: "Password",
    pattern: `^[A-Za-z0-9]{8,}$`,
    required: true,
  },
  {
    id: 3,
    name: "role",
    type: "text",
    placeholder: "Role",
    errorMessage:
      "Name should be 3-15 characters and exclude any special character!",
    label: "role",
    pattern: "^[A-Za-z0-9]{3,15}$",
    required: true,
  }
]

export const editInputs = [
  {
    id: 1,
    name: "email",
    type: "email",
    placeholder: "Email",
    errorMessage: "It should be a valid email address!",
    label: "Email",
    required: true,
  },
  {
    id: 2,
    name: "role",
    type: "text",
    placeholder: "Role",
    errorMessage:
      "Name should be 3-15 characters and exclude any special character!",
    label: "role",
    pattern: "^[A-Za-z0-9]{3,15}$",
    required: true,
  }
]
