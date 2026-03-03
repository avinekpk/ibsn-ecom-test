import express from 'express';
import authenticateToken from '../utils/authenticate.middleware';
import addNewPurchase from '../controllers/purchases/addNewPurchase'
import fetchAllPurchases from '../controllers/purchases/fetchAllPurchases'

const router = express.Router();

router.get('/all', authenticateToken, fetchAllPurchases);
router.post('/new-purchase', authenticateToken, addNewPurchase);
