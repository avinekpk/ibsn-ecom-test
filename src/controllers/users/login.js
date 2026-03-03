import bcrypt from 'bcrypt';
import {Users} from '../../schemas/users';

export async function login (req, res){
    const { email, password } = req.body;

    if(!email || !password){
        res.status(400).json({message: "Enter reqired fields."});
    }

    const user = Users.find({email});

    if(!user){
        res.status(400).json({message: "Invalid email."})
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if(!passwordMatch){
        res.status(401).json({message:"Unauthorised."})
    }

    const token = await generateJwtAuthToken({ id: user.id, user: newUser.name });

    res.status(200).json({message: "Login success.", data: token})
}