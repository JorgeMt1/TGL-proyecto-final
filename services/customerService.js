const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');

class CustomerServices{
    constructor() {}

    async find(){
        const customers = await models.Customer.findAll();
        return customers;
    }
    async findOne(id){}
    async create(data){}
    async update(id, changes){}
    async delete(id){}
}