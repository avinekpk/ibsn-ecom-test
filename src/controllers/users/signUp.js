import bcrypt from 'bcrypt';
import {Users} from '../../schemas/users';

export async function signUp (req, res){
    const { name, email, password } = req.body;

    if(!name || !email || !password){
        res.status(400).json({message: "Enter reqired fields."});
    }

    const userExists = Users.find({email});

    if(userExists){
        res.status(400).json({message: "Invalid email."})
    }

    const hashedPass = bcrypt.hash(password, 10)

    const newUser = new Users({name, email, password: hashedPass});
    await newUser.save();

    const token = await generateJwtAuthToken({ id: newUser.id, username: newUser.name });

    res.status(201).json({message: "SignUp success.", data: token})
}