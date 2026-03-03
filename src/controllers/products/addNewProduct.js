import Products from '../../schemas/products'

export async function addNewProduct(req, res){
    const { productName, price, description, stock} = req.body;

    if(!productName || !price || !description || !stock){
        res.status(400).json({message: "Please enter all fields."});
    }

    const newProduct = new Products({
        name: productName,
        price,
        description,
        stock
    })
    await newProduct.save()

    if(!newProduct){
        res.status(400).json({message: "Failed to save product."});
    }

    res.status(201).json({message: "Product saved.", product: newProduct});
}