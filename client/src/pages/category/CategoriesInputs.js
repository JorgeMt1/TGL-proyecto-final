export const createInputs = [
  {
    id: 1,
    name: "name",
    type: "text",
    placeholder: "Name",
    errorMessage:
      "Name should be 3-15 characters and exclude any special character!",
    label: "Name",
    pattern: "^[A-Za-z0-9- ]{3,15}$",
    required: true,
  },
  {
    id: 2,
    name: "image",
    type: "url",
    placeholder: "https://imageURL.com/",
    errorMessage:
      "ImageURL should be valid URL!",
    label: "ImageUrl",
    required: true,
  }
]

export const editInputs = [
  {
    id: 1,
    name: "name",
    type: "text",
    placeholder: "Name",
    errorMessage:
      "Name should be 3-15 characters and exclude any special character!",
    label: "Name",
    pattern: "^[A-Za-z0-9- ]{3,15}$",
    required: true,
  },
  {
    id: 2,
    name: "image",
    type: "url",
    placeholder: "https://imageURL.com/",
    errorMessage:
      "ImageURL should be valid URL!",
    label: "ImageUrl",
    required: true,
  }
]