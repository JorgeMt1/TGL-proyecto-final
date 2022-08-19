const joi = require('joi');

const id = joi.number.integer();
const email = joi.string.email();
const password = joi.string.min(5);

const createUserSchema = joi.object({
    email: email.required(),
    password: password.require(),
})

const updateUserSchema = joi.object({
    email: email,
    password: password,
})

const getUserSchema = joi.object({
    id: id.require(),
})

module.exports = { createUserSchema, updateUserSchema, getUserSchema }