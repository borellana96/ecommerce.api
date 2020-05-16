import { Controller, Post, Req, HttpStatus, Res, Get, Body, Delete, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from '../dto/user.dto';

@Controller('api/user')
export class UserController {

    constructor(
        private readonly userService: UserService
    ) { }

    @Get()
    public async findAll(@Res() res) {
        return await this.userService.getAll();
    }

    @Get(':userId')
    public async findUserById(@Param('userId') userId: string) {
        return this.userService.getUser(userId);
    }

    @Post()
    public async saveUser(@Res() res, @Body() user: UserDto) {
        console.log(user);
        return await res.status(HttpStatus.OK).json({
            message: 'Received'
        })
    }

    @Delete()
    public async deleteUser(@Param('userId') userId: string) {
        return this.userService.deleteUser(userId);
    }
}
