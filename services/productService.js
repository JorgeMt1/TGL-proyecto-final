const boom = require('@hapi/boom');
const setupModels = require('../db/models');

class ProductsServices{

    constructor(){
        this.products = [];
    }

    async create(data){
        const newProduct = {
         newId,
         ...data
        }
        this.products.push(newProduct);
        return newProduct;
    }

    async find(){
        const query ='SELECT * FROM task'
        const [data] = await setupModels.Produc.findAll();
        return data;
    }

    async findOne(id){
        const product = this.products.find(item => item.id == id);
        
        if(!product){
            throw boom.notFound('Product not found');
        }
        if (product.isBlock) {
            throw boom.conflict('Product is block');
        }
        return product;
    }

    async update(id, changes){
        const index = this.products.findIndex(item => item.id == id);
        if (index === -1){
            throw boom.notFound('Product not found');
        }
        const product = this.products[index]
        this.products[index] = {
            ...product,
            ...changes
        };
        return this.products[index];
    }

    async delete(){
        const index = this.products.findIndex(item => item.id == id);
        if (index === -1){
            throw boom.notFound('Product not found');
        }
        this.products.splice(index, 1);
        return { id }
    }
}

module.exports = ProductsServices;