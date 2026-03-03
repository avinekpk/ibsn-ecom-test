import Products from '../../schemas/products'

export async function fetchProductbyId(req, res){
    const productid = req.params.id;

    const product = await Products.findById({productid});

    if(!product){
        res.status(400).json({message: "Error fetching product."});
    }

    res.status(200).json({message: "Product fethed.", product: product});
}