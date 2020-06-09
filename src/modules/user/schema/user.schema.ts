import { Schema } from "mongoose";

export const userSchema: Schema = new Schema({
    email: { type: String, required: true, lowercase: true, unique: true, sparse: true },
    salt: String,
    //Salting= Hash(Password + Salt)
    hashedPassword: String,
    roles: [String],
});