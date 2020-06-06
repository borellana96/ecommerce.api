import { Controller, HttpStatus, Res, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@Controller('api/user')
export class UserController {

    constructor(
        private readonly userService: UserService
    ) { }

    @Get()
    public async findAll() {
        return await this.userService.getAll();
    }

    @Get(':userId')
    public async findUserById(@Param('userId') userId: string) {
        return this.userService.getUser(userId);
    }

    @Post()
    public async saveUser(@Res() res, @Body() newUser: UserDto) {
        const user = await this.userService.createUser(newUser);
        return res.status(HttpStatus.OK).json({
            message: 'Received',
            user: user
        })
    }

    @Delete(':userId')
    public async deleteUser(@Param('userId') userId: string) {
        return this.userService.deleteUser(userId);
    }

    @Put(':userId')
    public async updateUser(@Param('userId') userId: string, @Body() user: UserDto) {
        return this.userService.updateUser(userId, user);
    }
}
