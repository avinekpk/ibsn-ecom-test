import express from 'express';
import signUp from '../controllers/users/signUp';
import login from '../controllers/users/login';

const router = express.Router();

router.post('/signup', signUp);
router.post('/login', login);