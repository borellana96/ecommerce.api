import { Module } from '@nestjs/common';
import { UserController } from './modules/user/user/user.controller';
import { UserService } from './modules/user/user/user.service';
import { UserModule } from './modules/user/user/user.module';

@Module({
  imports: [UserModule],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
