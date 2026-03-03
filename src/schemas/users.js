import mongoose from 'mongoose ';

const UserSchema = new mongoose.schema({
    name: string,
    email: {
        type: string,
        unique: true,
    },
    password: string,
    isDeleted: {
        type: boolean,
        default: false    
    }
})

module.exports = mongoose.model('Users', UserSchema)