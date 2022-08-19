const joi = require('joi');

const id = joi.number().integer();
const name = joi.string().min(2).max(10);
const lastName = joi.string().min(2).max(10);
const address = joi.string();
const phone =  Joi.string();
const userId = Joi.number().integer();
const email = Joi.string().email();
const password =  Joi.string();

const getCustomerSchema = joi.object({
    id: id.required(),
})

const createCustomerSchema = Joi.object({
    name: name.required(),
    lastName: lastName.required(),
    phone: phone.required(),
    user: Joi.object({
      email: email.required(),
      password: password.required()
    })
  });
  
  const updateCustomerSchema = Joi.object({
    name,
    lastName,
    phone,
    userId
  });

  module.exports = { getCustomerSchema, createCustomerSchema, updateCustomerSchema };