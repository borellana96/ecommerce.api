import { Schema } from "mongoose";

export const userSchema: Schema = new Schema({
    email: { type: String, required: true, lowercase: true, unique: true, sparse: true },
    //salt: String,
    //hashedPassword: String, //Salting= Hash(Password + Salt)
    password: String,
    //roles: [String],
});