import { Injectable } from '@nestjs/common';
import { UserDto } from '../dto/user.dto';

@Injectable()
export class UserService {
    constructor(

    ) { }

    async getAll() {

    }

    async getUser(id: string) {

    }

    async createUser(user: UserDto) {
        
    }

    async deleteUser(id: string) {

    }

    async findUserByEmail(email: string) {
        //return await this.userModel.findOne({ 'email': email });
    }

}
