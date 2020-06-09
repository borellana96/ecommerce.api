import { Document } from "mongoose";

export interface IUser extends Document {
    email: string;
    salt: string;
    hashedPassword: string;
    roles: string[];
}