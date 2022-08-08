const express = require('express');
const ProductsService = require('./../services/productService');
const router = express.Router();

const service = new ProductsService();

router.get('/', (req, res) =>{
    const products = service.find();
    res.json(products)
});

router.get('/:id', async (req, res) =>{
    const { id } = req.params;
    const products = await service.findOne(id);
    res.json(products);
});

router.post('/', async (req, res) =>{
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
});

router.put('/:id', async (req, res) =>{
    const { id } = req.params;
    const body = req.body;
    res.json({
        id,
        message:'updated',
        data: body
    })
});

router.patch('/:id', async (req, res) =>{
    try {
        const { id } = req.params;
        const body = req.body;
        const product = await service.update(id, body);
        res.json(product);
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
});

router.delete('/:id', (req, res) =>{
    const { id } = req.params;
    const rta = await service.delete(id);
    res.json(rta);
});


module.exports = router;