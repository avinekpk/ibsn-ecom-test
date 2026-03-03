import Purchases from '../../schemas/purchases';

export async function addNewPurchase (req, res){
    const {user, products, billAmount} = req.body;

    if(!user || !products || !billAmount ){
        res.status(400).json({message: "Missing relavent data."});
    }

    const purchaseDate = new Date();

    //can add products type check
    const newPurchase = new Purchases({user, purchaseDate, billAmount, products});
    await newPurchase.save();

    if(!newPurchase){
        res.status(400).json({message: "Failed to place order."});
    };

    res.status(200).json({message: "Order placed"});
}