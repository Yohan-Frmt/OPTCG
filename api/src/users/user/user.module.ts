import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { AuthenticationModule } from '../../authentication/authentication.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), AuthenticationModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
