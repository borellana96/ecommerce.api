import { Controller, Post, UseGuards, Body, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { UserDto } from '../user/dto/user.dto';

@Controller('api/auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @UseGuards(AuthGuard('local'))
    @Post('signin')
    async signin(@Body() user: UserDto) {
        console.log('Authorized route...')
        return await this.authService.login(user);
    }

    @Post('signup')
    async register(@Body() user: UserDto){
        return await this.authService.register(user);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    getProfile(@Body() user: UserDto) {
        return user;
    }
}
