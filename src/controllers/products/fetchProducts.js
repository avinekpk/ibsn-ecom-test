import Products from '../../schemas/products'

export async function fetchProducts(req, res){
    const {skipAmount, pageSize} = req.body;

    const products = await Products.find({isDeleted: false})
                        .sort({createdAt: -1})
                        .skip(skipAmount)
                        .limit(pageSize);


    if(!products){
        res.status(400).json({message: "Error fetching products."});
    }

    res.status(200).json({message: "Products fethed.", products: products});
}