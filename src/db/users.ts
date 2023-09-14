import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: { type: String, required: true},
    email: {type: String, required: true},
    authentication: {
        password: { type: String, required: true, select: false},
        salt: {type: String, select: false},
        sessionToken: {type: String, select: false}
    }
});

export const User = mongoose.model("User", userSchema);

export const getUsers = () => User.find();
export const getUserByEmail = (email: string) => User.findOne({email});
export const getUserBySessionToken = (sessionToken: string) => User.findOne({
    'authentication.sessionToken': sessionToken
});
export const getUserById = (id: string) => User.findById(id);
export const createUser = (values: Record<string, any>) => User.create(values)
export const deleteUserById = (id: string) => User.findByIdAndDelete(id);
export const updateUserById = (id: string, values: Record<string, any>)=> User.findByIdAndUpdate(id, values, {new: true});
