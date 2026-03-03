import jwt from 'jsonwebtoken';
import JWT_SECRET from '../constants';

export async function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) {
        // If no token is provided, return a 401 Unauthorized status
        return res.status(401).json({ message: 'Token missing' });
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        // If the token is invalid (expired, tampered, etc.), return 403 Forbidden
        if (err) {
        return res.status(403).json({ message: "Invalid or expired token." });
        }

        // If valid, attach the decoded payload to the request object for use in route handlers
        req.user = decoded;
        next();
    });
}