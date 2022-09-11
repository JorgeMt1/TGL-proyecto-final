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
    name: "price",
    type: "number",
    placeholder: "Price",
    errorMessage:
      "Price must have the minimum value of 10!",
    label: "Price",
    min: "10",
    required: true,
  },
  {
    id: 3,
    name: "description",
    type: "text",
    placeholder: "Description",
    errorMessage:
      "Description should be ateast 10 characters!",
    label: "Description",
    pattern: "^[A-Za-z0-9- ]{10,}$",
    required: true,
  },
  {
    id: 4,
    name: "image",
    type: "url",
    placeholder: "https://imageURL.com/",
    errorMessage:
      "ImageURL should be valid URL!",
    label: "ImageUrl",
    required: true,
  },
  {
    id: 5,
    name: "categoryId",
    type: "text",
    placeholder: "CategoryId",
    errorMessage:
      "CategoryId must be an integer!",
    label: "CategoryId",
    pattern: "^[0-9]+$",
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
    name: "price",
    type: "number",
    placeholder: "Price",
    errorMessage:
      "Price must have the minimum value of 10!",
    label: "Price",
    min: "10",
    required: true,
  },
  {
    id: 3,
    name: "description",
    type: "text",
    placeholder: "Description",
    errorMessage:
      "Description should be ateast 10 characters!",
    label: "Description",
    pattern: "^[A-Za-z0-9- ]{10,}$",
    required: true,
  },
  {
    id: 4,
    name: "image",
    type: "url",
    placeholder: "https://imageURL.com/",
    errorMessage:
      "ImageURL should be valid URL!",
    label: "ImageUrl",
    required: true,
  },
  {
    id: 5,
    name: "categoryId",
    type: "text",
    placeholder: "CategoryId",
    errorMessage:
      "CategoryId must be an integer!",
    label: "CategoryId",
    pattern: "^[0-9]+$",
    required: true,
  }
]
