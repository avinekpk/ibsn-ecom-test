import mongoose from 'mongoose';

const PurchaseSchema = new mongoose.schema({
    user:{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    purchaseDate: date,
    billAmount: number,
    products: [{
        productId: {
            type: mongoose.Types.ObjectId,
            ref: 'Products'
        },
        quantity: number,
        productAmount: number
    }],
    deliveryStatus: {
        type:enums['OrderPlaced', 'Packed', 'Shipped', 'Delivered', 'Returned'],
        default: 'OrderPlaced'
    }
})

module.exports = mongoose.model('Purchases', PurchaseSchema)