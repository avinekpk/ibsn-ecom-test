import Purchases from '../../schemas/purchases';

export async function fetchAllPurchases (req, res){
    const {skipAmount, pageSize} = req.body;

    const purchases = await Purchases.find({})
                            .sort({createdAt: -1})
                            .skip(skipAmount)
                            .limit(pageSize);

    if(!purchases){
        res.status(400).json({message: "Error fetching purchases."});
    };

    res.status(200).json({message: "Purchases fethed.", purchases: purchases});
}