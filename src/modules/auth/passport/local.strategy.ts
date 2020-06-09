import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException, Inject } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { IUser } from '../../user/model/user.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { generateHashedPassword } from 'src/utilities/encryption';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(
        @InjectModel('User') private readonly userModel: Model<IUser>,
        private authService: AuthService
    ) {
        super();
    }

    async validate(email: string, password: string): Promise<any> {
        //const user = await this.authService.validateUser(email, password);
        const user: IUser = await this.userModel.findOne({ 'email': email });
        if (!user) {
            throw new UnauthorizedException('The email does not exist');
        }
        if (generateHashedPassword(user.salt, password) !== user.hashedPassword) {
            throw new UnauthorizedException('Invalid password');
        }
        return user;
    }
}