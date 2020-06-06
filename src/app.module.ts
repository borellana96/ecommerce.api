import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    MongooseModule.forRoot('mongodb://localhost/ecommerce', { useCreateIndex: true })],
  controllers: [],
  providers: [],
})
export class AppModule { }
