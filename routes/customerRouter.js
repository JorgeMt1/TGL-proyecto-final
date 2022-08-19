const express = require('express');
const router = express.Router();
const CustomerService = require('../services/customerService');
const { createCustomerSchema, updateCustomerSchema, getCustomerSchema } = require('../schemas/customerSchema');
const validartorHandler = require('../middlewares/validatorHandler')
const service = new CustomerService();

router.get('/', async(req, res, next)=>{
    try{
        const customers = await service.find();
        res.json(customers); 
    } catch (error){
        next(error);
    }
})

router.get('/:id', 
    validatorHandler(getCustomerSchema, 'params'),
    async(req, res, next)=>{
        try{
            const { id } = req.params;
            const customer = await service.findOne(id);
            res.json(customer);
        } catch(error){
        next(error);
        }
})

router.post('/',
    validatorHandler(createCustomerSchema, 'body'),
    async(req, res, next)=>{
        try{
            const body = req.body;
            const newCustomer = await service.create(body);
            res.status(201).json(newCustomer);
        } catch (error){
            next(error);
        }
})

router.patch('/:id', 
    validatorHandler(getCustomerSchema, 'params'),
    validatorHandler(createCustomerSchema, 'body'),
        async(req, res, next)=>{
        try{
            const { id } = req.params;
            const body = req.body;
            const rta = await service.update(id, body);
            res.status(201).json(rta);
        } catch (error){
            next(error);
        }
});

router.delete('/:id', 
alidationHandler(getCustomerSchema, 'params'),
async(req, res, next)=>{
    try{
        const { id } = req.params;
        const customer = await service.delete(id);
        res.status(200).json(customer)
    } catch (error){
        next(error);
    }
    }
);

module.exports = router;