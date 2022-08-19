const express = require('express');
const ProductsService = require('../services/productService');
const validartorHandler = require('../middlewares/validatorHandler');
const { createProductSchema, updateProductSchema, getProductSchema } = require('../schemas/productSchema');
const router = express.Router();

const service = new ProductsService();

router.get('/', (req, res) =>{
    const products = service.find();
    res.json(products)
});

router.get('/:id', 
    validartorHandler(getProductSchema, 'params'), 
    async (req, res, next) =>{
        try{
            const { id } = req.params;
            const products = await service.findOne(id);
            res.json(products);
        } catch (error) {
            next(error);
        }     
    }
);

router.post('/', 
    validartorHandler(createProductSchema, 'body'), 
    async (req, res) =>{
      const body = req.body;
      const newProduct = await service.create(body);
      res.status(201).json(newProduct);
    }
);

router.patch('/:id', 
  validartorHandler(getProductSchema, 'params'),
  validartorHandler(updateProductSchema, 'body'), 
  async (req, res, next) =>{
    try {
        const { id } = req.params;
        const body = req.body;
        const product = await service.update(id, body);
        res.json(product);
    } catch (error) {
        next(error);
    }
});

router.delete('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);
module.exports = router;