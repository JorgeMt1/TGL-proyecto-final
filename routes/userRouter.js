const express = require('express');
const validatorHandler = require('../middlewares/validatorHandler');
const router = express.Router();
const UserService = require('../services/userService');
const service = new UserService()

const {createUserSchema, updateUserSchema, getUserSchema } = require('../schemas/userSchema');

router.get('/', (req, res)=>{
    const users = service.find();
    res.json(users);
});

router.get('/:id', 
    validatorHandler(getUserSchema, 'params'),
    async(req, res, next)=>{
    try{
        const { id } = req.params;
        const user = await service.findOne(id);
        res.json(user);
        
    } catch(error){
        next(error);
    }
});

router.post('/',
    validatorHandler(createUserSchema, 'body'),
    async(req, res)=>{
        const { body } = req.params;
        const newUser = await service.create(body);
        res.status(201).json(newUser);
});

router.patch('/:id',
    validatorHandler(getUserSchema, 'params'),
    validatorHandler(updateUserSchema, 'body'),
        async(req, res)=>{
        try {
            const { id } = req.params;
            const body = req.body;
            const user = await service.update(id, body);
            res.json(user);
        } catch (error) {
        next(error);
        }
});

router.delete('/:id', 
    validatorHandler(getUserSchema, 'params'),
    async(req, res)=>{
        const { id } = req.params;
        const user = await service.delete(id);
        res.json(user);
});