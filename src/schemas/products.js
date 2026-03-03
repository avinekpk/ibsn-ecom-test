import mongoose from 'mongoose';

const ProductSchema = new mongoose.schema({
    name: string,
    price: number,
    description: string,
    stock: number,
    isDeleted: {
        type: boolean,
        default: false    
    }
})

module.exports = mongoose.model('Products', ProductSchema);