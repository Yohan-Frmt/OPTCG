import { Module } from '@nestjs/common';
import { UserStoreController } from './userstore.controller';
import { UserStoreService } from './userstore.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserStore } from './userstore.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserStore])],
  controllers: [UserStoreController],
  providers: [UserStoreService],
})
export class UserStoreModule {}
