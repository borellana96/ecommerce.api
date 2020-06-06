import { Controller, Post, UseGuards, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { UserDto } from '../user/dto/user.dto';

@Controller('api/auth')
export class AuthController {
    //constructor(private readonly authService: AuthService) { }

    @UseGuards(AuthGuard('local'))
    @Post('signin')
    async signin(@Body() user: UserDto) {
        console.log('Authorized route...')
        return user;
    }
}
