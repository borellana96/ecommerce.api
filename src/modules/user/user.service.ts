import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { IUser } from './model/user.model';
import { Model } from 'mongoose';
export type User = any;
@Injectable()
export class UserService {
    private readonly users: User[];
    constructor(
        @InjectModel('User') private readonly userModel: Model<IUser>
    ) { }

    async getAll(): Promise<IUser[]> {
        return await this.userModel.find();
    }

    async getUser(id: string): Promise<IUser> {
        return await this.userModel.findById(id);
    }

    async createUser(user: UserDto): Promise<IUser> {
        const userNewModel: IUser = new this.userModel(user);
        return await userNewModel.save();
    }

    async deleteUser(id: string): Promise<IUser> {
        return await this.userModel.findByIdAndDelete(id);
    }

    async updateUser(id: string, newUser: UserDto): Promise<IUser> {
        return await this.userModel.findByIdAndUpdate(id, newUser, { new: true });
    }

    async findUserByEmail(email: string): Promise<User | undefined> {
        return await this.userModel.findOne({ 'email': email });
    }

}
