import jwt from 'jsonwebtoken';
import JWT_SECRET from '../constants';

export async function generateJwtAuthToken (payload){
    const token = jwt.sign(
        payload,
        JWT_SECRET, // Store your secret key in an environment variable
        { expiresIn: "1h" } // Token expires in 1 hour
    );
}