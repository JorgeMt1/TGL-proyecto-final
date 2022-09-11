export const inputs = [
  {
    id: 1,
    name: "name",
    type: "text",
    placeholder: "Name",
    errorMessage:
      "Name should be 3-15 characters and shouldn't include any special character!",
    label: "Name",
    pattern: "^[A-Za-z0-9]{3,15}$",
    required: true,
  },
  {
    id: 2,
    name: "lastName",
    type: "text",
    placeholder: "Lastname",
    errorMessage:
      "Name should be 3-15 characters and shouldn't include any special character!",
    label: "Lastname",
    pattern: "^[A-Za-z0-9]{3,15}$",
    required: true,
  },
  {
    id: 3,
    name: "phone",
    type: "tel",
    placeholder: "1-123-456-7890",
    errorMessage:
      "Phone Number should be a valid Phone Number!",
    label: "Phone Number",
    pattern: "^[0-9]{1}-[0-9]{3}-[0-9]{3}-[0-9]{4}",
    required: true,
  },
  {
    id: 4,
    name: "email",
    type: "email",
    placeholder: "Email",
    errorMessage: "It should be a valid email address!",
    label: "Email",
    required: true,
  },
  {
    id: 5,
    name: "password",
    type: "password",
    placeholder: "Password",
    errorMessage:
      "Password should bea at least 8 characters!",
    label: "Password",
    pattern: `^[A-Za-z0-9]{8,}$`,
    required: true,
  },
];

export const editInputs = [
  {
    id: 1,
    name: "name",
    type: "text",
    placeholder: "Name",
    errorMessage:
      "Name should be 3-15 characters and shouldn't include any special character!",
    label: "Name",
    pattern: "^[A-Za-z0-9]{3,15}$",
    required: true,
  },
  {
    id: 2,
    name: "lastName",
    type: "text",
    placeholder: "Lastname",
    errorMessage:
    "Name should be 3-15 characters and shouldn't include any special character!",
    label: "Lastname",
    pattern: "^[A-Za-z0-9]{3,15}$",
    required: true,
  },  
  {
    id: 3,
    name: "phone",
    type: "tel",
    placeholder: "1-123-456-7890",
    errorMessage:
      "Phone Number should be a valid Phone Number!",
    label: "Phone Number",
    pattern: "^[0-9]{1}-[0-9]{3}-[0-9]{3}-[0-9]{4}",
    required: true,
  }
]