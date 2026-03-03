import express from 'express';
import addNewProduct from '../controllers/products/addNewProduct';
import fetchProducts from '../controllers/products/fetchProducts';
import fetchproductById from '../controllers/products/fetchproductById';
import authenticateToken from '../utils/authenticate.middleware';

const router = express.Router();

router.get('/all', authenticateToken, fetchProducts);
router.get('/:id', authenticateToken, fetchproductById);
router.post('/add-product', authenticateToken, addNewProduct);
