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
        return this.products;
    }

    async findOne(id){
        return this.products.find(item => item.id == id);
    }

    async update(id, changes){
        const index = this.products.findIndex(item => item.id == id);
        if (index === -1){
            throw new Error('Product not found')
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
            throw new Error('Product not found')
        }
        this.products.splice(index, 1);
        return { id }
    }
}

module.exports = ProductsServices;